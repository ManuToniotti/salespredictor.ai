// src/pages/Dashboard.js
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Col, Row, Statistic, Avatar, Dropdown, Menu, Typography } from 'antd';
import { EllipsisOutlined, PlusOutlined, HistoryOutlined, UserOutlined } from '@ant-design/icons';
import { Bar, Line } from '@ant-design/charts';
import './Dashboard.css';

const { Title, Paragraph } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      Manage Profile
    </Menu.Item>
    <Menu.Item key="2" icon={<PlusOutlined />}>
      Add Credits
    </Menu.Item>
    <Menu.Item key="3" icon={<HistoryOutlined />}>
      View History
    </Menu.Item>
  </Menu>
);

const Dashboard = () => {
  // Mock Data
  const barData = [
    { type: 'January', sales: 38 },
    { type: 'February', sales: 52 },
    { type: 'March', sales: 61 },
    { type: 'April', sales: 145 },
    { type: 'May', sales: 48 },
    { type: 'June', sales: 38 },
    { type: 'July', sales: 28 },
    { type: 'August', sales: 38 },
    { type: 'September', sales: 68 },
    { type: 'October', sales: 38 },
    { type: 'November', sales: 58 },
    { type: 'December', sales: 38 },
  ];

  const lineData = [
    { month: 'January', value: 3 },
    { month: 'February', value: 4 },
    { month: 'March', value: 3.5 },
    { month: 'April', value: 5 },
    { month: 'May', value: 4.9 },
    { month: 'June', value: 6 },
    { month: 'July', value: 7 },
    { month: 'August', value: 9 },
    { month: 'September', value: 13 },
    { month: 'October', value: 13 },
    { month: 'November', value: 12 },
    { month: 'December', value: 15 },
  ];

  const barConfig = {
    data: barData,
    xField: 'type',
    yField: 'sales',
    seriesField: 'type',
    legend: { position: 'top-left' },
  };

  const lineConfig = {
    data: lineData,
    xField: 'month',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  return (
    <PageContainer
      title="Business Dashboard"
      extra={[
        <Dropdown key="1" overlay={menu} placement="bottomRight">
          <Avatar icon={<UserOutlined />} />
        </Dropdown>,
      ]}
    >
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic title="Total Sales" value={126560} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Visits" value={8846} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Payments" value={6560} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Operational Effect" value="78%" />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col span={16}>
          <Card title="Stores Sales Trend">
            <Bar {...barConfig} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Sales Ranking">
            <Line {...lineConfig} />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Dashboard;