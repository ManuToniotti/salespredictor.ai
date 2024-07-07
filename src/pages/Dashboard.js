// src/pages/Dashboard.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Layout, Row, Col, Typography } from 'antd';
import axios from 'axios';
import './Dashboard.css';

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const location = useLocation();
  const { state } = location;
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/business/metrics/${state.businessId}`);
        setMetrics(response.data);
      } catch (error) {
        console.error('Error fetching business metrics:', error);
      }
    };

    if (state && state.businessId) {
      fetchMetrics();
    }
  }, [state]);

  if (!metrics) {
    return <div>Loading...</div>;
  }

  return (
    <Layout.Content className="dashboard-content">
      <Title level={2}>Business Metrics Dashboard</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Potential Profitability">
            <Paragraph>${metrics.potentialProfitability}</Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Competition Analysis">
            <Paragraph>{metrics.competitionAnalysis} competitors</Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Time to Profitability">
            <Paragraph>{metrics.timeToProfitability} months</Paragraph>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Average Startup Costs">
            <Paragraph>${metrics.averageStartupCosts}</Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Market Demand">
            <Paragraph>{metrics.marketDemand}</Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Suggested Pricing">
            <Paragraph>${metrics.suggestedPricing}</Paragraph>
          </Card>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Dashboard;