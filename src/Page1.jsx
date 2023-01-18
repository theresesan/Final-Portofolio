//CSS
import "./styles/App.css";
import "./styles/Page1.css";
import "./styles/Page2.css";
import "./styles/Page3.css";
import "./styles/styles.css";

// Components
import MeImg from "./components/MeImg";
import FlowerImg from "./components/FlowerImg";
import NavBar from "./components/NavBar";

function Page1() {
  return (
    <div className="Page1" id="Page1">
      <div className="img2-box">
        <NavBar />
        <FlowerImg />
      </div>
      <div className="NameBox">
        <div className="name">
          <h1>
            <span>T</span>
            <span>h</span>
            <span>e</span>
            <span>r</span>
            <span>e</span>
            <span>s</span>
            <span>e</span> <br />
            <span>H</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
            <span>n</span>
          </h1>
        </div>
        <p className="FrontPageTxt">Frontend Utvikler</p>
        <div className="LogoContainer">
          <a href="https://github.com/theresesan" target="_blank">
            <img
              className="GithubLogo FirstPageLogo"
              src="./src/images/github.png"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/therese-sand%C3%A5ker-hagen-a5b582202/"
            target="_blank"
          >
            <img
              className="GithubLogo FirstPageLogo"
              src="./src/images/linkedin.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="img-box">
        <MeImg />
      </div>
    </div>
  );
}

export default Page1;
