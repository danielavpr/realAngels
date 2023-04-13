import React from "react";

const InvestorForm = () => {
  return (
    <div>
      <Form
        name="investorForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
          label="Fund name"
          name="fundName"
          rules={[
            {
              required: true,
              message: "Please enter the fund name",
            },
          ]}
        >
          <p>If you are an Angel Investor just put your name</p>
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
          label="Industries that you or your fund are interested in"
          name="industries"
          rules={[
            {
              required: true,
              message: "Please enter the industries you're interested in",
            },
          ]}
        >
          {/* TODO: change for select  */}
          <Input placeholder="Fintech, Proptech, Edtech, Agrotech, Healthtech, Biotech, Web3, Bigdata, ..." />
        </Form.Item>

        <Form.Item
          label="What stage(s) do you prefer to invest in?"
          name="stages"
          rules={[
            {
              required: true,
              message: "Please select the stages you're interested in",
            },
          ]}
        >
          {/* TODO: change by check and add list to helper */}
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={1}>Idea</Radio>
              <Radio value={2}>Pre-Seed</Radio>
              <Radio value={3}>Seed</Radio>
              <Radio value={4}>Late-Seed</Radio>
              <Radio value={5}>Series A</Radio>
              <Radio value={6}>Series B</Radio>
              <Radio value={7}>Series C+</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Minimum investment ticket size (in USD)"
          name="minimumInvestment"
          rules={[
            {
              required: true,
              message: "Please enter your minimum investment ticket size",
            },
          ]}
        >
          <Input placeholder="USD" />
        </Form.Item>

        <Form.Item
          label="Maximum investment ticket size (in USD)"
          name="maximumInvestment"
          rules={[
            {
              required: true,
              message: "Please enter your maximum investment ticket size",
            },
          ]}
        >
          <Input placeholder="USD" />
        </Form.Item>

        <Form.Item
          label="Other important requirements you consider to invest"
          name="notes"
        >
          <Input placeholder="notes" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default InvestorForm;
