import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import Loader from "../../components/Common/Loader";

const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });

  return <Component />;
};

export default AuthenticationGuard;
