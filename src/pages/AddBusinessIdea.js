// src/pages/AddBusinessIdea.js
import React from 'react';
import { Form, Input, Button, Select, DatePicker, InputNumber, Card, Typography, Layout } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import './AddBusinessIdea.css';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const AddBusinessIdea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const initialValues = state ? {
    ...state,
    startDate: state.startDate ? dayjs(state.startDate) : null,
    investment: state.investment ? parseFloat(state.investment.replace(/,/g, '')) : null,
  } : {};

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      startDate: values.startDate ? dayjs(values.startDate).format('YYYY-MM-DD') : null,
      investment: values.investment.toString(),
    };
    console.log('Received values of form:', formattedValues);
    navigate('/business-idea-summary', { state: formattedValues });
  };

  return (
    <Layout.Content className="add-business-idea-content">
      <Card className="add-business-idea-card">
        <Title level={2}>Add Your Business Idea</Title>
        <Paragraph>
          Provide the details of your business idea to get started with SalesPredictor.AI.
        </Paragraph>
        <Form
          name="add_business_idea"
          layout="vertical"
          initialValues={initialValues}
          onFinish={onFinish}
        >
          <Form.Item
            name="businessName"
            label="Business Name"
            rules={[{ required: true, message: 'Please enter the business name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="industry"
            label="Industry"
            rules={[{ required: true, message: 'Please select the industry' }]}
          >
            <Select placeholder="Select an industry">
              <Option value="retail">Retail</Option>
              <Option value="tech">Tech</Option>
              <Option value="healthcare">Healthcare</Option>
              <Option value="finance">Finance</Option>
              <Option value="food">Food & Beverage</Option>
              {/* Add more industries as needed */}
            </Select>
          </Form.Item>
          <Form.Item
            name="productService"
            label="Product/Service Type"
            rules={[{ required: true, message: 'Please enter the product/service type' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="targetMarket"
            label="Target Market"
            rules={[{ required: true, message: 'Please enter the target market' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label="Location (City, Region)"
            rules={[{ required: true, message: 'Please enter the location' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Estimated Start Date"
            rules={[{ required: true, message: 'Please select the start date' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="investment"
            label="Initial Investment"
            rules={[{ required: true, message: 'Please enter the initial investment' }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout.Content>
  );
};

export default AddBusinessIdea;