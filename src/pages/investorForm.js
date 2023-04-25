import React from "react";
import getUrlOrigin from "../hooks/getUrlOrigin";
import { Radio, Form, Input, Select, Space } from "antd";
import {
  businessModel,
  businessModelType,
  industries,
  investmentTicket,
  investmentVehicle,
  operationTime,
  regions,
  startupStages,
} from "../helpers/formHelpers";

const InvestorForm = () => {
  getUrlOrigin();

  return (
    <div>
      <Form
        name="investorForm"
        layout="vertical"
        style={{ padding: "5% 10%" }}
        labelWrap
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <h2 style={{ marginBottom: "24px" }}>
          Please answer the following questions
        </h2>
        <Form.Item
          label="Contact full name"
          name="contactName"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
          ]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
        >
          <Input placeholder="john.doe@startupname.ai" />
        </Form.Item>

        <Form.Item
          label="Do you invest as individual or as a company/fund?"
          name="investorType"
          rules={[
            {
              required: true,
              message: "Please select the option that better describes you",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="Individual">Individual</Radio>
            <Radio value="Company/Fund">Company/Fund</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Fund name"
          extra="If you are an Angel Investor just put your name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter the fund name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Where are you located? (HQ Location)"
          name="headquarters"
          rules={[
            {
              required: true,
              message: "Please enter your location",
            },
          ]}
        >
          <Input placeholder="Country, City" />
        </Form.Item>

        <Form.Item
          label="What stage(s) do you prefer to invest in?"
          extra="Select 'Agnostic' if you don't have any preference about the Startup stage"
          name="stages"
          rules={[
            {
              required: true,
              message: "Please select the stages you're interested in",
            },
          ]}
        >
          <Select mode="multiple" allowClear>
            {["Agnostic", ...startupStages].map((stage, index) => (
              <Select.Option key={`stage-${index}`} value={stage}>
                {stage}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="In which industries are you interested in?"
          name="industries"
          extra="Select 'Agnostic' if you don't have any preference about industry"
          rules={[
            {
              required: true,
              message: "Please enter the industries you're interested in",
            },
          ]}
        >
          <Select mode="multiple" allowClear>
            {["Agnostic", ...industries].map((industry, index) => (
              <Select.Option key={`industry-${index}`} value={industry}>
                {industry}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="In which business model(s) are you interested to invest in?"
          extra="Select 'Agnostic' if you don't have any preference about business model"
          name="businessModels"
          rules={[
            {
              required: true,
              message: "Please select the business models you're interested in",
            },
          ]}
        >
          <Select mode="multiple" allowClear>
            {["Agnostic", ...businessModel].map((model, index) => (
              <Select.Option key={`model-${index}`} value={model}>
                {model}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="In which model type(s) are you interested to invest in?"
          extra="Select one or more"
          name="businessModelTypes"
          rules={[
            {
              required: true,
              message: "Please select the model types you're interested in",
            },
          ]}
        >
          <Select mode="multiple" allowClear>
            {businessModelType.map((type, index) => (
              <Select.Option key={`type-${index}`} value={type}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Average ticket that you have invested or want to invest per startup"
          name="investmentAmount"
          rules={[
            {
              required: true,
              message: "Please select the average ticket you want to invest",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              {investmentTicket.map((ticket, index) => (
                <Radio key={`ticket-${index}`} value={ticket}>
                  {ticket}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="What is the investment vehicle you use for your investments?"
          name="investmentVehicle"
          rules={[
            {
              required: true,
              message: "Please select the investment vehicle",
            },
          ]}
        >
          <Radio.Group>
            {investmentVehicle.map((vehicle, index) => (
              <Radio key={`vehicle-${index}`} value={vehicle}>
                {vehicle}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="In which regions must the startup have an operation to consider it for investment?"
          name="regions"
          rules={[
            {
              required: true,
              message: "Please select the regions you're interested in",
            },
          ]}
        >
          <Select mode="multiple" allowClear>
            {regions.map((region, index) => (
              <Select.Option key={`region-${index}`} value={region}>
                {region}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Do you invest in the MVP stage?"
          name="mvpInvestment"
          rules={[
            {
              required: true,
              message: "Please select the option that better describes you",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Minimum operating time that the startup needs to have in order to be considered for investment?"
          name="operatingTime"
          rules={[
            {
              required: true,
              message:
                "Please select the operating time you consider for investment",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              {operationTime.map((time, index) => (
                <Radio key={`time-${index}`} value={time}>
                  {time}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Does the startup need to have sales?"
          name="salesInvestment"
          rules={[
            {
              required: true,
              message: "Please select the option that better describes you",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InvestorForm;
