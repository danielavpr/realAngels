import React, { useEffect, useState } from "react";
import axios from "axios";
import useGetUrlOrigin from "../hooks/useGetUrlOrigin";
import { Radio, Form, Input, Select, Space } from "antd";

const InvestorForm = () => {
  useGetUrlOrigin();
  const [businessModelTypes, setBusinessModelTypes] = useState([]);
  const [regions, setRegions] = useState([]);
  const [operationTimes, setOperationTimes] = useState([]);
  const [investmentVehicles, setInvestmentVehicles] = useState([]);
  const [investmentTickets, setInvestmentTickets] = useState([]);
  const [businessModels, setBusinessModels] = useState([]);
  const [startupStages, setStartupStages] = useState([]);
  const [industries, setIndustries] = useState([]);

  const agnostic = { id: "00", name: "Agnostic" };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/business_model_types`)
      .then((response) => {
        setBusinessModelTypes(response.data);
      });

    axios.get(`${process.env.REACT_APP_API}/regions`).then((response) => {
      setRegions(response.data);
    });

    axios
      .get(`${process.env.REACT_APP_API}/operating_times`)
      .then((response) => {
        setOperationTimes(response.data);
      });

    axios
      .get(`${process.env.REACT_APP_API}/investment_vehicles`)
      .then((response) => {
        setInvestmentVehicles(response.data);
      });

    axios
      .get(`${process.env.REACT_APP_API}/investment_tickets`)
      .then((response) => {
        setInvestmentTickets(response.data);
      });

    axios
      .get(`${process.env.REACT_APP_API}/business_models`)
      .then((response) => {
        setBusinessModels(response.data);
      });

    axios.get(`${process.env.REACT_APP_API}/stages`).then((response) => {
      setStartupStages(response.data);
    });

    axios.get(`${process.env.REACT_APP_API}/industries`).then((response) => {
      setIndustries(response.data);
    });
  }, []);

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
            {[agnostic, ...startupStages].map((stage) => (
              <Select.Option key={`stage-${stage.id}`} value={stage.name}>
                {stage.name}
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
            {[agnostic, ...industries].map((industry) => (
              <Select.Option
                key={`industry-${industry.id}`}
                value={industry.name}
              >
                {industry.name}
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
            {[agnostic, ...businessModels].map((model) => (
              <Select.Option key={`model-${model.id}`} value={model.name}>
                {model.name}
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
            {businessModelTypes.map((type) => (
              <Select.Option key={`type-${type.id}`} value={type.name}>
                {type.name}
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
              {investmentTickets.map((ticket) => (
                <Radio key={`ticket-${ticket.id}`} value={ticket.name}>
                  {ticket.name}
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
            {investmentVehicles.map((vehicle) => (
              <Radio key={`vehicle-${vehicle.id}`} value={vehicle.name}>
                {vehicle.name}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="In which regions must the startup have an operation to consider it for investment?"
          name="regions"
          extra="Select 'Agnostic' if you don't have any preference about the region"
          rules={[
            {
              required: true,
              message: "Please select the regions you're interested in",
            },
          ]}
        >
          <Select mode="multiple" allowClear>
            {regions.map((region) => (
              <Select.Option key={`type-${region.id}`} value={region.name}>
                {region.name}
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
              {operationTimes.map((time) => (
                <Radio key={`time-${time.id}`} value={time.name}>
                  {time.name}
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
