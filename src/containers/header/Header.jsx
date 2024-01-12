import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import atlassian from "../../assets/atlassian.png";
import slack from "../../assets/slack.png";
import google from "../../assets/google.png";
import shopify from "../../assets/shopify.png";
import dropbox from "../../assets/dropbox.png";

const Header = () => {
  return (
    <>
      <div className="gpt3__header-main section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="desc">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="gpt3__header-form">
            <input type="text" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>
          <div className="gpt3__header-signup">
            <img alt="peaple" src={people} />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="gpt3__header-illustration">
          <img src={ai} alt="ai" />
        </div>
      </div>
      <div className="gpt3__header-logo section__padding">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </>
  );
};

export default Header;
