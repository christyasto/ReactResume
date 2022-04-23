import $ from "jquery";
import classes from "./MainNav.module.css";

function MainNav(props) {
  function headerClickPlus() {
    var Type = $(".sHeader").attr("class").split(/\s+/)[1].slice(-1);
    var goTo = parseInt(Type) + 1;
    if (goTo > 2) {
      goTo = 0;
    } else if (goTo < 0) {
      goTo = 2;
    }
    $(".sHeader").css("opacity", 0);
    setTimeout(() => {
      switch (goTo) {
        case 0:
          $(".sHeader").text("Programming");
          break;
        case 1:
          break;
        case 2:
          $(".sHeader").text("Others");
          break;
        default:
          break;
      }
      $(".sHeader").css("opacity", "unset");
    }, 150);
    $(".sHeader")
      .removeClass("Head" + Type)
      .addClass("Head" + goTo);
    $(".type" + Type).addClass("hideskill");
    $(".type" + goTo).removeClass("hideskill");
  }
  function headerClickMinus() {
    var Type = $(".sHeader").attr("class").split(/\s+/)[1].slice(-1);
    var goTo = parseInt(Type) - 1;
    if (goTo > 2) {
      goTo = 0;
    } else if (goTo < 0) {
      goTo = 2;
    }
    $(".sHeader").css("opacity", 0);
    setTimeout(() => {
      switch (goTo) {
        case 0:
          $(".sHeader").text("Programming");
          break;
        case 1:
          $(".sHeader").text("CAD");
          break;
        case 2:
          $(".sHeader").text("Others");
          break;
        default:
          break;
      }
      $(".sHeader").css("opacity", "unset");
    }, 150);
    $(".sHeader")
      .removeClass("Head" + Type)
      .addClass("Head" + goTo);
    $(".type" + Type).addClass("hideskill");
    $(".type" + goTo).removeClass("hideskill");
  }
  $(".sHeader").text("CAD");
  return (
    <div id="mySidenav" className="sidenav">
      <div className="posWrapper hidden">
        <div className="dpHolder" onClick={props.closeNav}>
          <img alt="" className="portrait" src="/src/profile.jpg" />
        </div>
        <div className="skillHolder">
          <div className="skills col-lg-2">
            <h5 style={{ marginBottom: "20px" }}>PROFICIENCIES</h5>
            <div className="skillType">
              <div className="skillHeader">
                <i className="fas fa-less-than" onClick={headerClickPlus}></i>
                <h6
                  style={{ transition: "opacity 0.15s" }}
                  className="sHeader Head0"
                >
                  Programming
                </h6>
                <i
                  className={"fas fa-greater-than " + classes.arrow}
                  onClick={headerClickMinus}
                ></i>
              </div>
              foreach here
            </div>
          </div>
        </div>

        <div className="navigCont">
          <div className="sideContent">
            <a className="navigText abt" href="#about">
              <i className="fas fa-quote-left"></i>{" "}
              <i className="fas fa-quote-right"></i>
            </a>
            <a className="navigText" href="#education">
              <i className="fas fa-user-graduate"></i>
            </a>
            <a className="navigText" href="#workExp">
              <i className="fas fa-briefcase"></i>
            </a>
            <a className="navigText" href="#awards">
              <i className="fas fa-trophy"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
