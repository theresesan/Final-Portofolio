//CSS
import "./styles/App.css";
import "./styles/Page1.css";
import "./styles/Page2.css";
import "./styles/Page3.css";
import "./styles/styles.css";

//Components
import ScrollIcon from "./components/ScrollIcon";
import ScrollDownIcon from "./components/ScrollDownIcon";

function Page2() {
  return (
    <div className="Page2" id="Page2">
      <div className="FlexContainer2">
        <div className="OmMeg">
          <p>
            <code>&lt;h1&gt;</code>
            <span className="FørsteDel">Hei, Therese her!</span>
            <code>&lt;h1&gt;</code> <br /> <br />{" "}
            <strong>
              <code>&lt;p&gt;</code>
            </strong>{" "}
            Jeg er ei jente på 26 år som har stor interesse for koding! Interessen
            vokser mer etterhvert som jeg lærer mer, og ønske om å lære mer og
            tilegne meg mer kunnskap er noe jeg hele tiden jobber for. Det å ha en
            ide i hodet og deretter gjøre det visuelt er veldig gøy. Jeg er godt
            vandt med samarbeid og har alltid vært pliktoppfyllende. Andre sier også
            jeg er ydmyk og har en god stå-på vilje. På fritiden liker jeg å være ute
            på turer i skogen og på fjellet med mannen og barna mine, men er også
            veldig glad i å sette meg foran PlayStationet og game Call Of Duty. Jeg
            er forresten en rimelig god lagspiller, etter hva vennene mine sier.{" "}
            <strong>
              <code>&lt;p&gt;</code>
            </strong>
          </p>
        </div>
        <div className="KontaktInfo">
          <h2 className="KontaktTekst">Kontakt</h2>
          <ul className="KontaktListe">
            <li>Therese Sandåker Hagen</li>
            <li>947 88 654</li>
            <li>96thehag@gmail.com</li>
          </ul>
        </div>
        {/* <div className="LogoContainer">
        <img className="Logo" src="/images/html.png" alt="" />
        <img className="Logo" src="/images/css.png" alt="" />
        <img className="Logo" src="/images/js.png" alt="" />
        <img className="Logo" src="/images/react.png" alt="" />
        <img className="Logo" src="/images/figma.png" alt="" />
      </div> */}
        <div className="OmMegDel2">
          <p>
            {" "}
            For tiden går jeg kurs i koding og programmering gjennom pudium, her
            lærer vi blandt annet om <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong> og
            <strong>React</strong>. Men også mye annet relevant. Jeg har jobbet flere
            år innen servicebransjen og helsesektoren. Men nå i det siste er det{" "}
            <strong>koding</strong>
            og <strong>design</strong> som har fanget min interesse.
          </p>
        </div>
      </div>
      <footer className="Footer">
        <div className="LogoContainer">
          <a href="https://github.com/theresesan" target="_blank">
            <img className="GithubLogo" src="/images/Github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/therese-sand%C3%A5ker-hagen-a5b582202/"
            target="_blank"
          >
            <img className="GithubLogo" src="/images/linkedin.png" alt="" />
          </a>
        </div>
        <div className="Scroll">
          <ScrollIcon />
          <ScrollDownIcon />
        </div>
      </footer>
    </div>
  );
}

export default Page2;
