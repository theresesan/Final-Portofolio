//CSS
import "./styles/App.css";
import "./styles/Page1.css";
import "./styles/Page2.css";
import "./styles/Page3.css";
import "./styles/Page4.css";
import "./styles/styles.css";

function Page4() {
  return (
    <div className="Page4" id="Page4">
      <div className="ContactInfo">
        <h2 className="ContactTxt">Kontakt</h2>
        <ul className="ContactList">
          <li>Therese Sandåker Hagen</li> <br />
          <li>947 88 654</li>
          <br />
          <li>96thehag@gmail.com</li>
        </ul>
      </div>
      <div className="BackToTop">
        <button
          className="BackToTopBtn"
          onClick={() => window.location.replace("#Page1")}
        >
          Tilbake til toppen
        </button>
      </div>
    </div>
  );
}

export default Page4;
