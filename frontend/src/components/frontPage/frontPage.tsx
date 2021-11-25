import { React } from "react";
import TitleBar from "../titleBar/titleBar";
import FrontPageBody from "./frontPageBody";
import "./frontPage.scss";

const FrontPage = () => {
  return (
    <div className="front-page">
      <TitleBar />
      <FrontPageBody />
    </div>
  );
};

export default FrontPage;
