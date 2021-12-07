import TitleBar from "../titleBar/titleBar";
import FrontPageBody from "./FrontPageBody";
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
