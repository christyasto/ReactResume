import Cover from "./comp/Cover";
import About from "./comp/About";
import $ from "jquery";
import MainNav from "./comp/MainNav";

function App(props) {
  var navOpen = false;
  var scrol = false;
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  function openNav() {
    if ($(window).height() < 512) {
      $("#mySidenav").addClass("openNavSideFULL");
      $("#main").addClass("openNavMainFULL");
      navOpen = true;
      $(".posWrapper").addClass("wrapFULL");
      setTimeout(() => {
        $(".posWrapper").removeClass("hidden");
      }, 100);
    } else {
      $("#mySidenav").addClass("openNavSide");
      $("#main").addClass("openNavMain");
      navOpen = true;
      setTimeout(() => {
        $(".posWrapper").removeClass("hidden");
      }, 100);
      $(".moneyshot").addClass("flatside");
    }
    if ($(window).width() < 451 || $(window).height() < 451)
      $(".aboutDesc").css("text-align", "center");
  }
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    if ($(window).height() < 512) {
      $(".posWrapper").addClass("hidden");
      navOpen = false;
      setTimeout(() => {
        $("#mySidenav").removeClass("openNavSideFULL");
        $("#main").removeClass("openNavMainFULL");
      }, 200);
      setTimeout(() => {
        $(".posWrapper").removeClass("wrapFULL");
      }, 300);
    } else {
      $(".posWrapper").addClass("hidden");
      navOpen = false;
      scrol = true;
      $("body").addClass("stop-scrolling");
      setTimeout(() => {
        $("#mySidenav").removeClass("openNavSide");
        $("#main").removeClass("openNavMain");
        if ($(window).width() > 450 && $(window).height() > 512) {
          window.scrollTo(0, 0);
        }
      }, 200);
      setTimeout(() => {
        $("body").removeClass("stop-scrolling");
        scrol = false;
      }, 1000);
      $(".moneyshot").removeClass("flatside");
    }
    if ($(window).width() < 451 || $(window).height() < 451)
      $(".aboutDesc").css("text-align", "justify");
  }

  function toggleSidebar() {
    console.log(`width: ${$(window).width()}, height: ${$(window).height()}`);
    if ($(window).width() < 451 || $(window).height() < 521) {
      console.log("bleh");
      if (navOpen) closeNav();
      else openNav();
    }
  }

  $(".Hover").hover(
    function () {
      $("." + $(this).attr("class").split(" ")[1].toString()).css(
        "background-color",
        "#cbcbcb"
      );
      $("." + $(this).attr("class").split(" ")[1].toString()).css(
        "font-weight",
        "500"
      );
    },
    function () {
      $("." + $(this).attr("class").split(" ")[1].toString()).css(
        "background-color",
        "unset"
      );
      $("." + $(this).attr("class").split(" ")[1].toString()).css(
        "font-weight",
        "unset"
      );
    }
  );

  function scrolling() {
    var topTitle = $(".hiding").offset().top;
    var topAbt = $("#resume").offset().top;
    var botScreen = $(window).scrollTop() + $(window).innerHeight();
    var topScreen = $(window).scrollTop();
    if (!navOpen) {
      // window.alert("TopTitle: " + topTitle + "topScreen: " + topScreen + "topAbt: " + topAbt + "botScreen: " + botScreen);
      if (
        topScreen > topTitle &&
        topScreen - topTitle < 200 &&
        !scrol &&
        $(window).width() > 450 &&
        $(window).height() > 521
      ) {
        openNav();
        scrol = true;
        $("body").addClass("stop-scrolling");
        setTimeout(() => {
          document.getElementById("about").scrollIntoView(true);
        }, 200);
        setTimeout(() => {
          $("body").removeClass("stop-scrolling");
          scrol = false;
        }, 800);
      } else if (
        topAbt <= botScreen &&
        !scrol &&
        $(window).width() > 450 &&
        $(window).height() > 521
      ) {
        openNav();
      }
    } else if (
      topAbt >= botScreen &&
      !scrol &&
      $(window).width() > 450 &&
      $(window).height() > 521
    ) {
      closeNav();
    }
  }

  window.onscroll = function () {
    scrolling();
  };

  return (
    <div className="appwrapper">
      <Cover />
      <MainNav closeNav={closeNav} />
      <div id="main" style={{ height: "100%" }} onClick={toggleSidebar}>
        <About />
      </div>
    </div>
  );
}

export default App;
