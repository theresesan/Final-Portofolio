//CSS
import "./styles/App.css";
import "./styles/Page1.css";
import "./styles/Page2.css";
import "./styles/Page3.css";
import "./styles/styles.css";

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
      <footer className="Footer FooterPage3">
        <div className="Scroll">
          <img
            src="./images/scrollicon.png"
            alt=""
            className="ScrollIcon"
            onClick={() => window.location.replace("#Page1")}
          />
        </div>
      </footer>
    </div>
  );
}

export default Page3;
