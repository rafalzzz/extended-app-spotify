import React, { useState } from "react";

import { LogoutContainer } from "./layout.styled";

type LogoutMenuProps = {
  handleSignOut: (event: React.MouseEvent) => void;
  username: any;
};

export const LogoutMenu = ({ handleSignOut, username }: LogoutMenuProps) => {
  const [signOutMenuIsOpen, setSignOutMenuIsOpen] = useState<boolean>(false);

  return (
    <LogoutContainer>
      <button
        className="dots"
        style={{ color: signOutMenuIsOpen ? "white" : "#868686" }}
        onClick={() => setSignOutMenuIsOpen(!signOutMenuIsOpen)}
      >
        ...
      </button>
      <div
        className="logoutMenu"
        style={{ display: signOutMenuIsOpen ? "block" : "none" }}
      >
        <div>Welcome</div>
        <div>{username}</div>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </LogoutContainer>
  );
};
