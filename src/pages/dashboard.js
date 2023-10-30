import React, { useEffect } from "react";
import axios from "axios";
import { Table } from "antd";
import { formatMoney } from "../helpers";

const Dashboard = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/get_form_startups`)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const columns = [
    { title: "Name", dataIndex: "name", name: "name" },
    { title: "Mail", dataIndex: "mail", name: "mail" },
    {
      title: "Startup Public Name",
      dataIndex: "startup_public_name",
      name: "startup_public_name",
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id}
        expandable={{
          expandedRowRender: (record) => (
            <div>
              <p>
                <b>Startup Public Name:</b> {record.startup_public_name}
              </p>
              <p>
                <b>Startup Legal Name:</b> {record.startup_legal_name}
              </p>
              <p>
                <b>LinkedIn Profile:</b>{" "}
                <a
                  href={record.linkedin_profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {record.linkedin_profile}
                </a>
              </p>
              <p>
                <b>Website:</b>{" "}
                <a
                  href={record.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {record.website}
                </a>
              </p>
              <p>
                <b>Tweet Pitch:</b> {record.tweet_pitch}
              </p>
              <p>
                <b>HQ Location:</b> {record.hq_location}
              </p>
              <p>
                <b>Founders:</b> {record.founders}
              </p>
              <p>
                <b>Startup Created Before:</b> {record.startup_created_before}
              </p>
              <p>
                <b>Team Size:</b> {record.team_size}
              </p>
              <p>
                <b>Money Raised Before:</b> {record.money_raised_before}
              </p>
              <p>
                <b>Potential Investors Contacted:</b>{" "}
                {record.potential_investors_contacted}
              </p>
              <p>
                <b>Post Money Valuation:</b>{" "}
                {formatMoney(record.post_money_valuation)} USD
              </p>
              <p>
                <b>Money Compromised:</b>{" "}
                {formatMoney(record.money_compromised)} USD
              </p>
              <p>
                <b>Pitch Deck:</b>{" "}
                <a
                  href={record.pitch_deck}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {record.pitch_deck}
                </a>
              </p>
              <p>
                <b>Have Registered Users:</b>{" "}
                {record.have_registered_users ? "Yes" : "No"}
              </p>
              <p>
                <b>Have Sales:</b> {record.have_sales ? "Yes" : "No"}
              </p>
              <p>
                <b>Monthly Recurring Revenue:</b>{" "}
                {formatMoney(record.monthly_recurring_revenue)} USD
              </p>
              <p>
                <b>Industry:</b> {record.industry}
              </p>
              <p>
                <b>Stage:</b> {record.stage}
              </p>
              <p>
                <b>Business Model:</b> {record.business_model}
              </p>
              <p>
                <b>Business Model Type:</b> {record.business_model_type}
              </p>
              <p>
                <b>Investment Vehicle:</b> {record.investment_vehicle}
              </p>
              <p>
                <b>Investment Ticket:</b> {record.investment_ticket}
              </p>
              <p>
                <b>Region:</b> {record.region}
              </p>
              <p>
                <b>Operating Time:</b> {record.operating_time}
              </p>
              <p>
                <b>
                  Do they have an LLC or C-Corp in the United States of America?
                </b>{" "}
                {record.us_corp}
              </p>
              <p>
                <b>Minimum Ticket:</b> {formatMoney(record.minimum_ticket)} USD
              </p>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default Dashboard;
