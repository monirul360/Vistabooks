import React from "react";
import { Link } from "react-router-dom";
import img from "./../../Image/images/2.png";
import Head2 from "./../Head2/Head2";
const OurNews = () => {
  const news = [1, 2, 3];
  return (
    <div>
      <Head2 tittle="Our News" heading="News"></Head2>
      <div className="container">
        <div className="row py-5">
          {news.map((n) => (
            <div className="col-md-6 col-lg-4">
              <div className="news">
                <div className="news-items">
                  <div className="body">
                    <div className="news-img">
                      <img className="img-fluid" src={img} alt="" />
                    </div>
                    <button>ERP</button>
                    <div className="news-text">
                      <h2>
                        Benefits of ERP Solutions for the Small & Medium
                        Enterprises
                      </h2>
                      <p>
                        There are a Several benefits of ERP for the Small &
                        Medium Businesses. This Covid has brought several
                        changes in.
                      </p>
                      <Link to="/NewsDetails">Read More</Link>
                    </div>
                  </div>
                  <div className="news-footer">
                    <div>
                      <img src={img} alt="" />
                    </div>
                    <div>
                      <h3>by Jonib Smith</h3>
                      <p>
                        25 October 2022 - <span>3 min Read</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurNews;
