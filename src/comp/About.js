import classes from "./About.module.css";

function About() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div>
      <section id="about" name="about"></section>
      <div className={classes.about}>
        <div className="container desc">
          <div className="row">
            <div className="col-lg-2 col-1">
              <h5>ABOUT</h5>
            </div>
            <div className={"col-lg-7 " + classes.aboutDesc}>
              <p>
                A designer, possessing a good background in CAD (Computer-Aided
                Design) and several programming languages, with a strong
                interest in the interplay between design, fabrication, and
                computation. A hardworking, forward-looking individual with a
                desire to serve. Always looking forward to learning a new trade!
              </p>
            </div>
            <div className={"col-lg-3 " + classes.downloader}>
              <p className={classes.contacts}>
                <a download href="./src/files/Christyasto-Resume.pdf">
                  <i className={"far fa-file-pdf " + classes.downloadtxt}></i>
                  DOWNLOAD PDF
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section id="resume" name="resume">
        <div className={classes.contacts}>
          <div className={classes.contactsLogo}>
            <a href="mailto:christyasto.chito@gmail.com">
              <i className="far fa-envelope"></i>
              <span>christyasto.chito @ gmail</span>
            </a>
          </div>
          <div className={classes.contactsLogo}>
            <a href="#resume" onClick={() => openInNewTab("https://bit.ly/3FHrQKk")}>
              <i className="fab fa-git-alt"></i>
              <span>christyasto</span>
            </a>
          </div>
          <div className={classes.contactsLogo}>
            <a href="#resume" onClick={() => openInNewTab("https://bit.ly/3AufBwV")}>
              <i className="fab fa-instagram"></i>
              <span>isyasowiyongo.cpp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
