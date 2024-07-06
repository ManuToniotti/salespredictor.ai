// src/pages/FirstTimeUser.js
import React from 'react';
import { Button, Typography, Card, Space, Layout, Row, Col, Divider } from 'antd';
import { PlusOutlined, BulbOutlined, LineChartOutlined, DollarOutlined, UserOutlined, BarChartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './FirstTimeUser.css';

const { Title, Paragraph } = Typography;

const FirstTimeUser = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <Layout.Content className="first-time-user-content">
      <Card className="first-time-user-card">
        <Title level={3}>Welcome to Sales Predictor.ai</Title>
        <Paragraph>
          Let's get started with your first business idea. Follow the steps below to get started.
        </Paragraph>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          style={{ width: '100%', marginBottom: '20px' }}
          onClick={() => navigate('/add-business-idea')} // Use navigate to go to the Add Business Idea page
        >
          Add Your First Business Idea
        </Button>
        <Divider />
        <Title level={4}>How It Works:</Title>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={[16, 16]}>
            <Col span={24} className="step">
              <BulbOutlined className="step-icon" />
              <div className="step-text">
                <Paragraph strong>Enter Your Business Idea</Paragraph>
                <Paragraph>Fill in the details about your business concept, including industry, product/service type, target market, and location.</Paragraph>
              </div>
            </Col>
            <Col span={24} className="step">
              <LineChartOutlined className="step-icon" />
              <div className="step-text">
                <Paragraph strong>Analyze Your Competitors</Paragraph>
                <Paragraph>View a list of local competitors, their pricing, and estimated revenue.</Paragraph>
              </div>
            </Col>
            <Col span={24} className="step">
              <DollarOutlined className="step-icon" />
              <div className="step-text">
                <Paragraph strong>Estimate Potential Revenue</Paragraph>
                <Paragraph>Visualize potential earnings through our interactive charts and graphs.</Paragraph>
              </div>
            </Col>
            <Col span={24} className="step">
              <UserOutlined className="step-icon" />
              <div className="step-text">
                <Paragraph strong>Optimize Your Pricing Strategy</Paragraph>
                <Paragraph>Experiment with different pricing options and see how they affect your potential monthly earnings.</Paragraph>
              </div>
            </Col>
            <Col span={24} className="step">
              <BarChartOutlined className="step-icon" />
              <div className="step-text">
                <Paragraph strong>Get Actionable Recommendations</Paragraph>
                <Paragraph>Receive personalized recommendations and insights to help you refine your business strategy.</Paragraph>
              </div>
            </Col>
          </Row>
        </Space>
      </Card>
    </Layout.Content>
  );
};

export default FirstTimeUser;