import React, { Fragment } from "react";
import "./Blog.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import blogimg from "../../images/8912849.jpg";
import blogsec from "../../images/blogsec.jpg";
import BlogData from "./BlogData";

const Blog = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="blog">
        <div className="blog-img">
          <img className="top-img" src={blogimg} alt="" width="100%" height="400px" />
        </div>
          <div className="blog-text">
            Welcome to <br />
            TASKER Blog
          </div>

        
          <div className="wrapper-blog">
            <div className="post-primary-item">
              <div className="post-primary-left">
                <div className="post-left-img">
                  <img className="sec-img" src={blogsec} alt="" width="550px" height="300px" />
                </div>
              </div>
              <div className="post-primary-right">
                <h2>
                  Reduce 60% of your Logging Volume, and Save 40% of your
                  Logging Costs with Lightrun Log Optimizer™
                </h2>
                <h4>
                  As organizations are adopting more of the FinOps foundation
                  practices and trying to optimize their cloud-computing costs,
                  engineering…
                </h4>
              </div>
            </div>

            <div className="blogdata">
              {BlogData.map((data, index) => (
                <div className="blog-cart">
                  <div className="blog-cart-img">
                    <img src={data.image} alt="" width="290px" height="150px" style={{borderRadius:"5px"}} />
                  </div>
                  <div className="blog-cart-dis">
                    <h4>{data.title}</h4><br />
                    <h6>{data.description}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
        <Footer />
      </div>
    </Fragment>
  );
};

export default Blog;
