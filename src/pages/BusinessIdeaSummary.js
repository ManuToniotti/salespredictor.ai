// src/pages/BusinessIdeaSummary.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Typography, Layout, Space, Row, Col } from 'antd';
import './BusinessIdeaSummary.css';

const { Title, Paragraph } = Typography;

const BusinessIdeaSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const handleProceed = (path) => {
    navigate(path, { state });
  };

  return (
    <Layout.Content className="business-idea-summary-content">
      <Card className="business-idea-summary-card">
        <Title level={2}>Business Idea Summary</Title>
        <Paragraph>Review the details of your business idea and proceed with the analysis.</Paragraph>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Row>
            <Col span={24}><Paragraph><strong>Business Name:</strong> {state.businessName}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Industry:</strong> {state.industry}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Product/Service Type:</strong> {state.productService}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Target Market:</strong> {state.targetMarket}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Location:</strong> {state.location}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Estimated Start Date:</strong> {state.startDate}</Paragraph></Col>
            <Col span={24}><Paragraph><strong>Initial Investment:</strong> ${state.investment}</Paragraph></Col>
          </Row>
          <Space direction="horizontal" size="middle">
            <Button type="primary" onClick={() => handleProceed('/dashboard')}>Proceed to Dashboard</Button>
            <Button onClick={() => navigate('/add-business-idea', { state })}>Edit Business Idea</Button>
          </Space>
        </Space>
      </Card>
    </Layout.Content>
  );
};

export default BusinessIdeaSummary;