import React, { Fragment, useState } from "react";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import pngegg from "../images/pngegg.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Footer from "../components/footer/Footer";
import img1 from "../images/icons1.png";
import img2 from "../images/icons2.png";
import img3 from "../images/icons3.png";
import img4 from "../images/icons4.png";
import img5 from "../images/icons5.png";
import img6 from "../images/icons6.png";
import img7 from "../images/icons7.png";
import img8 from "../images/icons8.png";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Home = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [text] = useTypewriter({
    words: ["Obsessed Developers Plateform"],
    loop: {},
    typeSpeed: 80,
    delaySpeed: 1000,
    deleteSpeed: 30,
  });
  return (
    <Fragment>
      <Navbar />

      <div className="home">
        <div className="home-first">
          <img
            className="home-main-img"
            src={pngegg}
            alt=""
            width={"250px"}
            height={"250px"}
          />
          <h1>
            {text} <Cursor cursorStyle="|" />
          </h1>
        </div>

        <div className="home-second">
          <h1>Use Case</h1>
          <div className="home-scnd">
            <div className="case-list">
              <div className="case-list-item">
                <img src={img1} alt="" width="40px" height="40px" />
                <h3>Live debugging in production</h3>
                <p>
                  Capture context in real-time, without stopping execution, with
                  visibility down to the single line.
                </p>
              </div>
              <div className="case-list-item">
                <img src={img2} alt="" width="40px" height="40px" />
                <h3>Troubleshoot cloud-native applications</h3>
                <p>Get visibility across replicas, regions or entire clouds.</p>
              </div>

              <div className="case-list-item">
                <img src={img3} alt="" width="40px" height="40px" />
                <h3>Troubleshoot broken CI</h3>
                <p>Re-running jobs to fix them can be a thing of the past.</p>
              </div>
              <div className="case-list-item">
                <img src={img4} alt="" width="40px" height="40px" />
                <h3>Understand codeflow and code behavior in production</h3>
                <p>Enlighten the code path your users take through the app.</p>
              </div>
              <div className="case-list-item">
                <img src={img5} alt="" width="40px" height="40px" />
                <h3>Validate progressive delivery / feature flags</h3>
                <p>
                  Traverse complex, conditional paths to understand what really
                  happened.
                </p>
              </div>
              <div className="case-list-item">
                <img src={img6} alt="" width="40px" height="40px" />
                <h3>Troubleshoot serverless applications</h3>
                <p>
                  Break apart issues in function-based workloads, one lambda at
                  a time.
                </p>
              </div>
              <div className="case-list-item">
                <img src={img7} alt="" width="40px" height="40px" />
                <h3>Reduce logging cost</h3>
                <p>
                  Get deep context within your data to figure out logic and
                  quality issues.
                </p>
              </div>
              <div className="case-list-item">
                <img src={img8} alt="" width="40px" height="40px" />
                <h3>Performance analysis and investigation</h3>
                <p>
                  Break apart performance bottlenecks on the application level.
                </p>
              </div>
            </div>
          </div>
          <button style={{ marginTop: "20px" }} className="home-btn">
            Request a Demo
          </button>
        </div>
        <div className="faqs">
          <div className="wrapper">
            <div className="faqs-title">
              <h1>FAQs</h1>
            </div>
            <div className="sub-title">
              <h2>Most common questions</h2>
            </div>
            <div className="faq-list">
              <div className="faq-list-item">
                <div className="faq-list-question">
                  {" "}
                  What does the free trial include?
                  <div className="arrow-icon" onClick={() => { setOpen1(!open1); }} >
                    {open1 ? <FiArrowUp /> : <FiArrowDown />}
                  </div>
                </div>
                <div
                  className={`faq-list-ans ${open1 ? "active" : "inactive"}`}
                >
                  During the 14 days of the free trial, you can add unlimited
                  Actions Logs, Snapshots & Metrics to up to 20 concurrently
                  running SDKs, using up to 10 developers seats.
                </div>
              </div>

              <div className="faq-list-item">
                <div className="faq-list-question">
                  Do you charge per developer seat or per SDK?
                  <div className="arrow-icon-two" onClick={() => { setOpen2(!open2); }} >
                  {open2 ? <FiArrowUp /> : <FiArrowDown />}
                </div>
                </div>
                <div
                  className={`faq-list-ans ${open2 ? "active" : "inactive"}`}
                >
                  Lightrun charges per developer every developer seat comes with
                  10 concurrently running SDKs, which directly translate into
                  running application instances (running JVMs, V8s, Python
                  interpreters, etc…).
                </div>
              </div>

              <div className="faq-list-item">
                <div className="faq-list-question">
                  Do I need a credit card to get started?
                  <div className="arrow-icon" onClick={() => { setOpen3(!open3); }} >
                    {open3 ? <FiArrowUp /> : <FiArrowDown />}
                  </div>
                </div>
                <div
                  className={`faq-list-ans ${open3 ? "active" : "inactive"}`}
                >
                  No! You can get started with a Lightrun 14-day free trial any
                  time, no credit card required.
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
