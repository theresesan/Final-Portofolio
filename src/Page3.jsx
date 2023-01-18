//CSS
import "./styles/App.css";
import "./styles/Page1.css";
import "./styles/Page2.css";
import "./styles/Page3.css";
import "./styles/styles.css";

//Components
import ScrollIcon from "./components/ScrollIcon";

function Page3() {
  return (
    <div className="Page3" id="Page3">
      <div className="FlexContainer">
        <div className="Project1">
          <div className="ProsjectTxt">
            <h2>Julekalender</h2>
          </div>
          <a
            href="https://github.com/theresesan/Christmas-Countdown"
            target="_blank"
          >
            <img
              className="ProjectImg"
              src="./images/Skjermbildekalender.png"
              alt=""
            />
          </a>
          <div className="ProjectInfo">
            <p>Julekalender laget med JavaScript, HTML og CSS</p>
          </div>
        </div>
        <div className="Project2">
          <div className="ProsjectTxt">
            <h2>CatApi</h2>
          </div>
          <a href="https://github.com/theresesan/Cat-Api-Project" target="_blank">
            <img className="ProjectImg" src="./images/Skjermbilde.png" alt="" />
          </a>
          <div>
            <p className="ProjectInfo">Cat Api laget i React</p>
          </div>
        </div>
      </div>
      <footer className="Footer">
        <div className="LogoContainer">
          <a href="https://github.com/theresesan" target="_blank">
            <img className="GithubLogo" src="./images/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/therese-sand%C3%A5ker-hagen-a5b582202/"
            target="_blank"
          >
            <img className="GithubLogo" src="./images/linkedin.png" alt="" />
          </a>
        </div>
        <div className="Scroll">
          <ScrollIcon />
        </div>
      </footer>
    </div>
  );
}

export default Page3;
