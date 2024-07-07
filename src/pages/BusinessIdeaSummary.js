// src/pages/BusinessIdeaSummary.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Typography, Layout, Space, Row, Col } from 'antd';
import axios from 'axios';
import './BusinessIdeaSummary.css';

const { Title, Paragraph } = Typography;

const BusinessIdeaSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [businessDetails, setBusinessDetails] = useState(null);

  useEffect(() => {
    const fetchBusinessDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/business/${state.businessId}`);
        setBusinessDetails(response.data);
      } catch (error) {
        console.error('Error fetching business details:', error);
      }
    };

    if (state && state.businessId) {
      fetchBusinessDetails();
    }
  }, [state]);

  if (!businessDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Layout.Content className="business-idea-summary-content">
      <Card className="business-idea-summary-card">
        <Title level={2}>Business Idea Summary</Title>
        <Paragraph>Review the details of your business idea and proceed with the analysis.</Paragraph>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Row>
            <Col span={24}><Paragraph><strong>Business Name:</strong> {businessDetails.name}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Industry:</strong> {businessDetails.industry}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Product/Service Type:</strong> {businessDetails.productType}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Target Market:</strong> {businessDetails.targetMarket}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Location:</strong> {businessDetails.location}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Estimated Start Date:</strong> {businessDetails.estimatedStartDate}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Initial Investment:</strong> ${businessDetails.initialInvestment}</Paragraph></Col>
          </Row>
          <Space direction="horizontal" size="middle">
            <Button type="primary" onClick={() => navigate('/dashboard', { state: { businessId: businessDetails._id } })}>Proceed to Dashboard</Button>
            <Button onClick={() => navigate('/add-business-idea', { state: businessDetails })}>Edit Business Idea</Button>
          </Space>
        </Space>
      </Card>
    </Layout.Content>
  );
};

export default BusinessIdeaSummary;