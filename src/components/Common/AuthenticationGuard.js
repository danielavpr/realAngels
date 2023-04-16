import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { Space, Spin } from "antd";

const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <Space size="middle">
        <Spin size="large" />
      </Space>
    ),
  });

  return <Component />;
};

export default AuthenticationGuard;
