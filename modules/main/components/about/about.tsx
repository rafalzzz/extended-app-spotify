import React from "react";

import { AboutContainer } from "./about.styled";

export const About = () => {
  return (
    <AboutContainer>
      <h1>About this app</h1>
      <div>
        My main goal during writing this app was build simple spotify version.
      </div>
      <div>
        I used iTunes API to download tracks, Firestore to save data and redux
        to manage actions.
      </div>
      <div>. </div>
      <div>
        This App is extended version of app-spotifytest with few differences:
      </div>

      <div className="pause">
        - in this app i used TypeScript to type modules,
      </div>
      <div className="pause">- fixed search section,</div>
      <div className="pause">
        - added new functions like playing full albums and searching tracks by
        album name,
      </div>
      <div className="pause">
        - I tried to organize code better than in simpler version of
        app-spotify.
      </div>
    </AboutContainer>
  );
};
