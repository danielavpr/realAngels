import React from "react";
import { Radio, Checkbox, Form, Input, Space } from "antd";
import { startupStages, industries } from "../helpers/formHelpers";
import getUrlOrigin from "../hooks/getUrlOrigin";

const FounderForm = () => {
  getUrlOrigin();

  return (
    <div>
      <Form
        name="founderForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="termsOfService"
          rules={[
            { required: true, message: "Please accept the terms of service" },
          ]}
        >
          <Space direction="vertical">
            <p>Terms of Service</p>
            <p>
              By checking the box below you agree to share a success fee of 2%
              with MIU.
              <br />
              The fee only applies when MIU connects you successfully with an
              Investor (Angel or VC) and an Investment transaction between the
              Investor and the Startup was made.
            </p>
            <Checkbox>I agree on sharing a success fee</Checkbox>
          </Space>
        </Form.Item>
        <p>Please answer the following questions</p>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Space>
            <p>First and last name of founder or legal representative</p>
            <Input placeholder="John Doe" />
          </Space>
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
          name="linkedin"
          rules={[
            {
              required: true,
              message: "Please enter your LinkedIn profile",
            },
          ]}
        >
          <Space>
            <p>
              1. Log into your LinkedIn account. 2. Click on the Me icon in the
              top bar. 3. Click on View profile in the menu. 4. Copy your URL
              from your browser’s address bar.
            </p>
            <Input placeholder="www.linkedin.com/in/your-name" />
          </Space>
        </Form.Item>

        <Form.Item
          label="Startup public name"
          name="publicName"
          rules={[
            {
              required: true,
              message: "Please enter your Startup public name",
            },
          ]}
        >
          <Space>
            <p>This is the name what you use for your business in public</p>
            <Input />
          </Space>
        </Form.Item>

        <Form.Item
          label="Startup legal name"
          name="legalName"
          rules={[
            {
              required: true,
              message: "Please enter your Startup legal name",
            },
          ]}
        >
          <Space>
            <p>This is the business name in your legal documents</p>
            <Input />
          </Space>
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
          name="tweetPitch"
          rules={[{ required: true, message: "Please enter the tweet pitch" }]}
        >
          <Space>
            <p>
              A tweet pitch is used to describe an overview of your startup,
              that is as short as possible. (less than 140 characters)
            </p>
            <Input placeholder="EXAMPLE: XYZ makes it easy to find, share, and organize office documents on your company network using search and tagging." />
          </Space>{" "}
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
          label="Do you have an LLC, C-Corp in the United States of America?"
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
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>No</Radio>
              <Radio value={3}>In Progress</Radio>
              <Radio value={4}>
                I need support to create an LLC, C-Corp, etc.
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="In what stage is your startup at the moment"
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
              {startupStages.map((stage, index) => (
                <Radio key={`startup-stage-${index}`} value={stage}>
                  {stage}
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
              message: "Please enter your Startup's industry",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              {industries.map((industry, index) => (
                <Radio key={`startup-industry-${index}`} value={industry}>
                  {industry}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="How many founders does your startup have?"
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
          name="previousStartup"
          rules={[
            {
              required: true,
              message:
                "Please enter your previous experience creating Startups",
            },
          ]}
        >
          <Space>
            <p>
              If "Yes", please describe your or your co-founders former startup
              briefly.
              <br />
              If "No" type NO in the text field.
            </p>
            <Input />
          </Space>
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
          label="Did you raise money before?"
          name="previousRaises"
          rules={[
            {
              required: true,
              message: "Please enter information about the previous raises",
            },
          ]}
        >
          <Space>
            <p>
              Please describe the round volume, kind of investor, investment
              instrument, and post-money valuation.
            </p>
            <Input />
          </Space>
        </Form.Item>

        <Form.Item
          label="Please describe your current round"
          name="currentRound"
          rules={[
            {
              required: true,
              message: "Please enter information about your current round",
            },
          ]}
        >
          <Space>
            <p>
              The current ask in USD, valuation, instrument, and did a investor
              already compromise to invest?
            </p>
            <Input />
          </Space>
        </Form.Item>

        <Form.Item
          label="Did you already contact potential investors? (VC's, Angels, Family Offices, etc.)"
          name="potentialInvestors"
          rules={[
            {
              required: true,
              message: "Please enter information about potential investors",
            },
          ]}
        >
          <Space>
            <p>
              If "YES" please let us know with whom.
              <br />
              If "NO" please enter "NO" in the text field below.
            </p>
            <Input />
          </Space>
        </Form.Item>

        <Form.Item
          label="Please add the link to your pitch deck below. "
          name="pitchDeck"
          rules={[
            {
              required: true,
              message: "Please enter your pitch deck",
            },
          ]}
        >
          <Space>
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
            <Input />
          </Space>
        </Form.Item>

        <Form.Item
          label="I agree on MIU sharing this information with VCs and Angel Investors.?"
          name="shareInformation"
          rules={[
            {
              required: true,
              message: "Please accept sharing your information",
            },
          ]}
        >
          <Space>
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
            <Checkbox>I agree</Checkbox>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FounderForm;
