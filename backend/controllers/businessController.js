// backend/controllers/businessController.js

const Business = require('../models/businessModel');
const {
  fetchProfitabilityData,
  fetchCompetitionData,
  fetchTimeToProfitabilityData,
  fetchStartupCostData,
  fetchMarketDemandData
} = require('../services/apiService');

const addBusinessIdea = async (req, res) => {
  try {
    const business = new Business(req.body);
    await business.save();
    res.status(201).json(business);
  } catch (error) {
    res.status(500).json({ error: 'Error adding business idea' });
  }
};

const getBusinessDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const business = await Business.findById(id);
    res.json(business);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching business details' });
  }
};

const getBusinessMetrics = async (req, res) => {
  const { id } = req.params;
  try {
    const business = await Business.findById(id);
    if (!business) {
      return res.status(404).json({ error: 'Business not found' });
    }

    const profitability = await fetchProfitabilityData(business.industry, business.location);
    const competition = await fetchCompetitionData(business.industry, business.location);
    const timeToProfitability = await fetchTimeToProfitabilityData(business.industry, business.location);
    const startupCosts = await fetchStartupCostData(business.industry, business.location);
    const marketDemand = await fetchMarketDemandData(business.industry, business.location);

    const metrics = {
      potentialProfitability: profitability.potentialProfitability,
      competitionAnalysis: competition.competitionAnalysis,
      timeToProfitability: timeToProfitability.timeToProfitability,
      averageStartupCosts: startupCosts.averageStartupCosts,
      marketDemand: marketDemand.marketDemand,
      suggestedPricing: profitability.suggestedPricing
    };

    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching business metrics' });
  }
};

module.exports = {
  addBusinessIdea,
  getBusinessDetails,
  getBusinessMetrics
};