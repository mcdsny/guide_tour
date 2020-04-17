import React from "react";

import Typography from "@material-ui/core/Typography";

import Tour from "/src/components/Tour";

import "/src/assets/styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <center className="title-wrapper">
        <Typography variant="h6">
          デザイン・システム室の内定までの道のり
        </Typography>
      </center>
      <Tour />
    </div>
  );
};
export default App;
