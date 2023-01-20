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
        <div className="Info">
          <h3 className="Page3Info">Prosjekter</h3>
          <p>
            For tiden går jeg kurs i koding og programmering gjennom pudium, her
            lærer vi blandt annet om <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong> og <strong>React</strong>. Men også mye annet
            relevant. Jeg har jobbet flere år innen servicebransjen og helsesektoren.
            Men nå i det siste er det <strong>koding</strong>
            og <strong>design</strong> som har fanget min interesse.
          </p>
        </div>
        <div className="GithubProjects">
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
      </div>
      <footer className="Footer FooterPage3">
        <div className="ScrollGrid">
          <img
            src="./images/scrollicon.png"
            alt=""
            className="ScrollIcon"
            onClick={() => window.location.replace("#Page2")}
          />
          <img
            src="./images/scrolldown.png"
            alt=""
            className="ScrollIcon"
            onClick={() => window.location.replace("#Page4")}
          />
        </div>
      </footer>
    </div>
  );
}

export default Page3;
