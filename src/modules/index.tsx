import React, { useState, useCallback } from "react";

import { Switch, Route, useHistory } from "react-router-dom";

import firebase, { auth } from "../common/firebase";

import { Login } from "./loginPanel/index";
import { LogoutMenu } from "./logoutMenu/layout";
import { Sidebar } from "./sidebar/index";
import { Main } from "./main/index";
import { Player } from "./player/index";

type DisplayNameProps = {
  displayName: any;
};

export const Layout = () => {
  const [user, setUser] = useState<string>("");
  const history = useHistory();

  const signInUser = (): void => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(function (result: any) {
        console.log(result);
        setUser(result.user.displayName);
        console.log(result.user.displayName);
        history.push("/user/main");
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const handleSignOut = useCallback((event: React.MouseEvent) => {
    auth.signOut();
    history.push("/");
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login onClick={signInUser} />
        </Route>
        <Route path="/user/">
          <LogoutMenu handleSignOut={handleSignOut} username={user} />
          <Sidebar />
          <Main />
          <Player />
        </Route>
      </Switch>
    </div>
  );
};
