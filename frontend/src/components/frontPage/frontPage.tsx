import { React } from "react";
import ScreenTitleBar from "../titleBar/ScreenTitleBar";
import FrontPageBody from "./frontPageBody";
import "./frontPage.scss";

const FrontPage = () => {
  return (
    <div className="front-page">
      <ScreenTitleBar />
      <FrontPageBody />
    </div>
  );
};

export default FrontPage;
