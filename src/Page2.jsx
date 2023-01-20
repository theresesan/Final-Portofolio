//CSS
import "./styles/App.css";
import "./styles/Page1.css";
import "./styles/Page2.css";
import "./styles/Page3.css";
import "./styles/styles.css";

function Page2() {
  return (
    <div className="Page2" id="Page2">
      <div className="FlexContainer">
        <div className="AboutMe">
          <p>
            <h2 className="FirstSentence">
              <code className="CodeTag">&lt;h1&gt;</code>
              Hei, Therese her!
              <code className="CodeTag">&lt;h1&gt;</code> <br /> <br />
            </h2>{" "}
            <strong>
              <code className="CodeTag">&lt;p&gt;</code>
            </strong>{" "}
            Jeg er ei jente på 26 år som har stor interesse for koding! Interessen
            vokser mer etterhvert som jeg lærer mer, ønske om å lære mer og tilegne
            meg mer kunnskap er noe jeg hele tiden jobber for. Det å ha en ide i
            hodet og deretter gjøre det visuelt er veldig gøy. Jeg er godt vandt med
            samarbeid og har alltid vært pliktoppfyllende. Andre sier også jeg er
            ydmyk og har en god stå-på vilje.{" "}
            <strong>
              <code className="CodeTag">&lt;p&gt;</code>
            </strong>
          </p>
        </div>
        {/* <div className="LogoContainer">
        <img className="Logo" src="/images/html.png" alt="" />
        <img className="Logo" src="/images/css.png" alt="" />
        <img className="Logo" src="/images/js.png" alt="" />
        <img className="Logo" src="/images/react.png" alt="" />
        <img className="Logo" src="/images/figma.png" alt="" />
      </div> */}
        <div className="Skills">
          <div className="SkillBtn">FIGMA</div>
          <div className="SkillBtn">HTML</div>
          <div className="SkillBtn">CSS</div>
          <div className="SkillBtn">JAVASCRIPT</div>
          <div className="SkillBtn">REACT</div>
        </div>
      </div>
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
      <div className="ScrollGrid">
        <img
          src="./images/scrollicon.png"
          alt=""
          className="ScrollIcon"
          onClick={() => window.location.replace("#Page1")}
        />
        <img
          src="./images/scrolldown.png"
          alt=""
          className="ScrollIcon"
          onClick={() => window.location.replace("#Page3")}
        />
      </div>
    </div>
  );
}

export default Page2;
