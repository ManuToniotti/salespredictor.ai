// src/api/index.js
import axios from 'axios';

const API_URL = 'http://localhost:5001/api/business';

export const addBusinessIdea = async (businessIdea) => {
  try {
    const response = await axios.post(`${API_URL}/add`, businessIdea);
    return response.data;
  } catch (error) {
    console.error('Error adding business idea:', error);
    throw error;
  }
};

export const getBusinessDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching business details:', error);
    throw error;
  }
};

export const getBusinessMetrics = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/metrics/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching business metrics:', error);
    throw error;
  }
};