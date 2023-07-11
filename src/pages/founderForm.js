import React, { useEffect, useState } from "react";
import axios from "axios";
import { Radio, Checkbox, Form, Input, Space, Select, Button } from "antd";
import getUrlOrigin from "../hooks/getUrlOrigin";

const FounderForm = () => {
  getUrlOrigin();
  const [startupStages, setStartupStages] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [usCorps, setUsCorps] = useState([]);
  const [businessModels, setBusinessModels] = useState([]);
  const [businessModelTypes, setBusinessModelTypes] = useState([]);
  const [investmentTickets, setInvestmentTickets] = useState([]);
  const [investmentVehicles, setInvestmentVehicles] = useState([]);
  const [regions, setRegions] = useState([]);
  const [operatingTimes, setOperatingTimes] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/stages`).then((response) => {
      setStartupStages(response.data);
    });

    axios.get(`${process.env.REACT_APP_API}/industries`).then((response) => {
      setIndustries(response.data);
    });

    axios.get(`${process.env.REACT_APP_API}/us_corps`).then((response) => {
      setUsCorps(response.data);
    });

    axios
      .get(`${process.env.REACT_APP_API}/business_models`)
      .then((response) => {
        setBusinessModels(response.data);
      });

    axios
      .get(`${process.env.REACT_APP_API}/business_model_types`)
      .then((response) => {
        setBusinessModelTypes(response.data);
      });

    axios
      .get(`${process.env.REACT_APP_API}/investment_tickets`)
      .then((response) => {
        setInvestmentTickets(response.data);
      });

    axios
      .get(`${process.env.REACT_APP_API}/investment_vehicles`)
      .then((response) => {
        setInvestmentVehicles(response.data);
      });

    axios.get(`${process.env.REACT_APP_API}/regions`).then((response) => {
      setRegions(response.data);
    });

    axios
      .get(`${process.env.REACT_APP_API}/operating_times`)
      .then((response) => {
        setOperatingTimes(response.data);
      });
  }, []);

  const handleSubmit = (values) => {
    console.log("values", values);
    axios
      .post(`${process.env.REACT_APP_API}/form_startups`, {
        name: values.name,
        mail: values.email,
        linkedin_profile: values.linkedin,
        startup_public_name: values.publicName,
        startup_legal_name: values.legalName,
        website: values.website,
        tweet_pitch: values.tweetPitch,
        hq_location: values.headquarters,
        founders: values.founders,
        startup_created_before: values.previousStartup,
        team_size: values.teamSize,
        money_raised_before: values.previousRaises,
        potential_investors_contacted: values.potentialInvestors,
        post_money_valuation: values.postMoneyValuation,
        money_compromised: values.moneyCompromised,
        pitch_deck: values.pitchDeck,
        have_registered_users: values.registeredUsers,
        have_sales: values.haveSales,
        monthly_recurring_revenue: values.monthlyRecurringRevenue,
        // user_id: DataTypes.INTEGER, TODO: pending logic
        user_id: 1,
        industry_id: values.industry,
        stage_id: values.stage,
        business_model_id: values.businessModel,
        business_model_type_id: values.businessModelType,
        investment_vehicle_id: values.investmentVehicle,
        investment_ticket_id: values.minimumTicket,
        // region_id: DataTypes.INTEGER, TODO: update logic to handle multiple regions
        operating_time_id: values.operatingTime,
        us_corp_id: values.corporation,
      })
      .then(function(response) {
        console.log(response);
      });
  };

  return (
    <div>
      <Form
        name="investorForm"
        layout="vertical"
        style={{ padding: "5% 10%" }}
        labelWrap
        onFinish={handleSubmit}
      >
        <h2>Terms of Service</h2>
        <p>
          By checking the box below you agree to share a success fee of 2% with
          MIU.
          <br />
          The fee only applies when MIU connects you successfully with an
          Investor (Angel or VC) and an Investment transaction between the
          Investor and the Startup was made.
        </p>
        <Form.Item
          name="termsOfService"
          valuePropName="checked"
          rules={[
            { required: true, message: "Please accept the terms of service" },
          ]}
        >
          <Checkbox>I agree on sharing a success fee</Checkbox>
        </Form.Item>

        <h2 style={{ margin: "12px 0 24px 0" }}>
          Please answer the following questions
        </h2>

        <Form.Item
          label="Name"
          extra="First and last name of founder or legal representative"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
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
          label="LinkedIn Profile"
          extra={
            <p>
              1. Log into your LinkedIn account.
              <br />
              2. Click on the Me icon in the top bar.
              <br />
              3. Click on View profile in the menu.
              <br />
              4. Copy your URL from your browser's address bar.
            </p>
          }
          name="linkedin"
        >
          <Input placeholder="www.linkedin.com/in/your-name" />
        </Form.Item>

        <Form.Item
          label="Startup public name"
          extra="This is the name what you use for your business in public"
          name="publicName"
          rules={[
            {
              required: true,
              message: "Please enter your Startup public name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Startup legal name"
          extra="This is the business name in your legal documents"
          name="legalName"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Website"
          name="website"
          rules={[
            { required: true, message: "Please enter your Startup's website" },
          ]}
        >
          <Input placeholder="https://" />
        </Form.Item>

        <Form.Item
          label="Tweet Pitch"
          extra="A tweet pitch is used to describe an overview of your startup, that is as short as possible. (less than 140 characters)"
          name="tweetPitch"
          rules={[{ required: true, message: "Please enter the tweet pitch" }]}
        >
          <Input placeholder="EXAMPLE: XYZ makes it easy to find, share, and organize office documents on your company network using search and tagging." />
        </Form.Item>

        <Form.Item
          label="Where is your Startup located? (HQ Location)"
          name="headquarters"
          rules={[
            {
              required: true,
              message: "Please enter your Startup headquarters",
            },
          ]}
        >
          <Input placeholder="Country, City" />
        </Form.Item>

        <Form.Item
          label="In what stage is your startup at the moment?"
          name="stage"
          rules={[
            {
              required: true,
              message:
                "Please enter the option that better describes your Startup",
            },
          ]}
        >
          <Radio.Group>
            <Space>
              {startupStages.map((stage) => (
                <Radio key={`startup-stage-${stage.id}`} value={stage.id}>
                  {stage.name}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="In what industry is your Startup in?"
          name="industry"
          rules={[
            {
              required: true,
              message: "Please enter your startup's industry",
            },
          ]}
        >
          <Select>
            {industries.map((industry) => (
              <Select.Option
                key={`industry-${industry.id}`}
                value={industry.id}
              >
                {industry.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="What is your startup's business model?"
          name="businessModel"
          rules={[
            {
              required: true,
              message: "Please select your startup's business model",
            },
          ]}
        >
          <Select>
            {businessModels.map((model) => (
              <Select.Option key={`model-${model.id}`} value={model.id}>
                {model.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="What's your startup's type of business model?"
          name="businessModelType"
          rules={[
            {
              required: true,
              message: "Please select your startup's business model type",
            },
          ]}
        >
          <Select>
            {businessModelTypes.map((type) => (
              <Select.Option key={`type-${type.id}`} value={type.id}>
                {type.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="What is the amount you are currently raising?"
          name="raisingAmount"
          rules={[
            {
              required: true,
              message: "Please select the investment you're looking for",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              {investmentTickets.map((ticket) => (
                <Radio key={`ticket-${ticket.id}`} value={ticket.id}>
                  {ticket.name}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="What is the investment vehicle you are using?"
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
              <Radio key={`vehicle-${vehicle.id}`} value={vehicle.id}>
                {vehicle.name}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="In what region(s) do you operate?"
          name="regions"
          rules={[
            {
              required: true,
              message: "Please select the regions where you operate",
            },
          ]}
        >
          <Select mode="multiple" allowClear>
            {regions.map((region) => (
              <Select.Option key={`region-${region.id}`} value={region.id}>
                {region.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Do you have registered users?"
          name="registeredUsers"
          rules={[
            {
              required: true,
              message: "Please select the option that applies to you",
            },
          ]}
        >
          <Radio.Group>
            <Space>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="How many months have you been validating?"
          name="operatingTime"
          rules={[
            {
              required: true,
              message: "Please select the option that applies to you",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              {operatingTimes.map((times) => (
                <Radio key={`months-validating-${times.id}`} value={times.id}>
                  {times.name}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Do you have sales?"
          name="haveSales"
          rules={[
            {
              required: true,
              message: "Please select the option that applies to you",
            },
          ]}
        >
          <Radio.Group>
            <Space>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="What is your MRR (Monthly Recurring Revenue) range?"
          name="monthlyRecurringRevenue"
          extra="In USD"
          rules={[
            {
              required: true,
              message: "Please enter your Monthly Recurring Revenue",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="How many founders does your startup have?"
          extra="Please add the number of founders"
          name="founders"
          rules={[
            {
              required: true,
              message: "Please enter the number of founders your Startup has",
            },
          ]}
        >
          <Input placeholder="2" />
        </Form.Item>

        <Form.Item
          label="Did you or any of co-founders create a startup before?"
          extra="If YES, please describe your or your co-founders former startup
          briefly. If NO type 'NO' in the text field."
          name="previousStartup"
          rules={[
            {
              required: true,
              message:
                "Please enter your previous experience creating Startups",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Total team size (Number of founders including staff)"
          name="teamSize"
          rules={[
            {
              required: true,
              message: "Please enter your total team size",
            },
          ]}
        >
          <Input placeholder="5" />
        </Form.Item>

        <Form.Item
          label="Do you have an LLC or C-Corp in the United States of America?"
          name="corporation"
          rules={[
            {
              required: true,
              message:
                "Please enter the option that better describes your Startup",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              {usCorps.map((corp) => (
                <Radio key={`us-corp-${corp.id}`} value={corp.id}>
                  {corp.name}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Did you raise money before?"
          extra="Please describe the round volume, kind of investor, investment instrument, and post-money valuation."
          name="previousRaises"
          rules={[
            {
              required: true,
              message: "Please enter information about the previous raises",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Did you already contact potential investors? (VC's, Angels, Family Offices, etc.)"
          extra="If YES please let us know with whom. If NO please enter 'NO' in the text field below."
          name="potentialInvestors"
          rules={[
            {
              required: true,
              message: "Please enter information about potential investors",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="What is your post-money valuation?"
          extra="In USD"
          name="postMoneyValuation"
          rules={[
            {
              required: true,
              message: "Please enter your post-money valuation",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="What is the minimum ticket you accept for investment?"
          extra="In USD"
          name="minimumTicket"
          rules={[
            {
              required: true,
              message: "Please enter your minimum ticket",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="How much money do you have compromised in your current round?"
          extra="In USD"
          name="moneyCompromised"
          rules={[
            {
              required: true,
              message:
                "Please enter the money compromised for the current round",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Please add the link to your pitch deck below. "
          extra={
            <p>
              Please make sure to activate the option that everyone with the
              link can see the file.
              <br />
              IF YOU DON'T HAVE A LINK YOU CAN SEND YOUR DECK TO
              marcelo@miu.institute.
              <br />
              In this case please just type "sent by email" in the text field
              below.
            </p>
          }
          name="pitchDeck"
          rules={[
            {
              required: true,
              message: "Please enter your pitch deck",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="I agree on MIU sharing this information with VCs and Angel Investors?"
          name="shareInformation"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Please accept sharing your information",
            },
          ]}
        >
          <Checkbox>I agree</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FounderForm;
