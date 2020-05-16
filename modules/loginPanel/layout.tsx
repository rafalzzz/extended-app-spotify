import React from "react";

import { LoginContainer } from "./login.styled";

type LoginLayoutProps = {
  onClick: (event: React.MouseEvent) => void;
};

export const LoginLayout = ({ onClick }: LoginLayoutProps) => {
  return (
    <LoginContainer>
      <h1>Sign-in with:</h1>
      <button onClick={onClick}>Google</button>
    </LoginContainer>
  );
};
