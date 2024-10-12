import Wrapper from "../assets/wrappers/LandingPage";
// import styled from "styled-components";
import main from "../assets/images/main.svg";
// import Register from "../pages/Register";
import { Link } from "react-router-dom";
import navbar from "../components/NavBar";

function Landing() {
  return (
    <>
      <Wrapper>
        <div className="container page">
          <div className="info">
            <h1>
              Job <span>Tracking</span> System
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate asperiores, in voluptatum officia distinctio, hic atque,
              unde est ullam placeat vero inventore facilis! Esse est et odio
              quis sapiente impedit.
            </p>
            <Link to="/register" className="btn register-link">
              Register / Demo User
            </Link>
            <Link to="/login" className="btn register-link">
              Login
            </Link>
            <button className="btn register-link">Bayo</button>
          </div>

          <div>
            <img src={main} className="img main-img" alt="main" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Landing;
