import React from "react";
import "./MainDash.css";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBinFill } from "react-icons/ri";
import circle from "../assets/circle.png";
import profile from "../assets/propic.jpg";
import wordshop from "../assets/wordshop.png";
import growth from "../assets/growth.png";
import memory from "../assets/memory.png";
import add from "../assets/edit.png";
import remove from "../assets/delete.png";
import realLogo from "../assets/pneuma.png";
import "./Blog.css";

function BlogPage() {
  return (
    <div className="container">
      <div className="headnav">
        <div className="title">
          <h2>Blog</h2>
          <img src={circle} alt="" />
        </div>
        <div className="profile">
          <div className="search">
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="5"
                cy="5"
                r="4.3"
                stroke="#2B3674"
                stroke-width="1.4"
              />
              <line
                x1="10.0101"
                y1="11"
                x2="8"
                y2="8.98995"
                stroke="#2B3674"
                stroke-width="1.4"
                stroke-linecap="round"
              />
            </svg>
            <input type="text" placeholder="Search" />
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2901 17.29L18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4801 19 19.9201 17.92 19.2901 17.29ZM16.0001 17H8.00005V11C8.00005 8.52 9.51005 6.5 12.0001 6.5C14.4901 6.5 16.0001 8.52 16.0001 11V17ZM12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22Z"
              fill="#A3AED0"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z"
              fill="#A3AED0"
            />
          </svg>
          <img className="propic" src={profile} alt="" />
        </div>
      </div>
      <div className="blog-welcome">
        <div className="blog-read">
          <h3>Read On For Inspiration And Encouragement.</h3>
          <p>
            Enjoy powerful and authentic original content right here on Pneuma
            Blog. Catch up on summaries of our latest messages, stay up-to-date
            on the latest happenings, and enjoy honest and personal reflections
            written by the Pneuma life Staff. To get content delivered directly
            to your inbox each Sunday, sign-up today for the Pneuma life
            Newsletter
          </p>
        </div>
        <div className="blog-books">
          <div className="first-book">
            <img src={wordshop} alt="" />
            <div className="growth-text">
              <h4>Tools & Skills</h4>
              <p>
                Tools are used to carry out functions. Skill is the ability to
                use a tool well. Tool can make you effective, while skills make
                you efficient.
              </p>
              <p>
                I have seen nations, group and individuals try to replicate
                things they don't have a deep understanding of, just because
                they feel they can get the tool. Most time they end of worse
                than they were before taking such step.
              </p>
              <p className="last-p">
                Tools in your hand doesn't make you skillful automatically, but
                a skillful person can make the best of available tools.just
                because you can buy it, does not guarantee you can use it.
              </p>
            </div>
            <div className="tools">
              <img src={realLogo} alt="" />
              <div>
                <h6>Pneuma life</h6>
                <span>
                  <BsPencilSquare style={{ fontSize: 30, olor: " #fff" }} />
                  <p>July 20th 2022</p>
                  <div>
                    <BsPencilSquare className="add" />
                    <RiDeleteBinFill className="remove" />
                  </div>
                </span>
              </div>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className="first-book">
            <img src={growth} alt="" />
            <div className="growth-text">
              <h4>SPIRITUAL GROWTH</h4>
              <p>There are two kinds of Men.</p>
              <p> 1. Natural Men</p>
              <p>2. Supernatural Men</p>
              <p>
                The natural man is the ordinary man. The natural man is the
                unspiritual physical man. The thought pattern of a natural man
                is a hindrance to the operations of the Spirit in his life. 1
                Corinthians 2:14 AMPC
              </p>
              <p className="mid-p">
                14 But the natural [unbelieving] man does not accept the things
                [the teachings and revelations] of the Spirit of God for they
                are foolishness [absurd and illogical] to him; and he is
                incapable of understanding them .
              </p>
            </div>
            <div className="tools">
              <img src={realLogo} alt="" />
              <div>
                <h6>Pneuma life</h6>
                <span>
                <BsPencilSquare style={{ fontSize: 30, olor: " #fff" }} />
                  <p>July 20th 2022</p>
                  <div>
                    <BsPencilSquare className="add" />
                    <RiDeleteBinFill className="remove" />
                  </div>
                </span>
              </div>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className="first-book">
            <img src={memory} alt="" />
            <div className="growth-text">
              <h4>Tools & Skills</h4>
              <p>
                Tools are used to carry out functions. Skill is the ability to
                use a tool well. Tool can make you effective, while skills make
                you efficient.
              </p>
              <p>
                I have seen nations, group and individuals try to replicate
                things they don't have a deep understanding of, just because
                they feel they can get the tool. Most time they end of worse
                than they were before taking such step.
              </p>
              <p className="last-p">
                Tools in your hand doesn't make you skillful automatically, but
                a skillful person can make the best of available tools.just
                because you can buy it, does not guarantee you can use it.
              </p>
            </div>
            <div className="tools">
              <img src={realLogo} alt="" />
              <div>
                <h6>Pneuma life</h6>
                <span>
                <BsPencilSquare style={{ fontSize: 30, olor: " #fff" }} />
                  <p>July 20th 2022</p>
                  <div>
                    <BsPencilSquare className="add" />
                    <RiDeleteBinFill className="remove" />
                  </div>
                </span>
              </div>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
