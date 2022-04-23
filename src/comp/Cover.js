import moneyshot from "../files/Portraitdarker.png";
import classes from "./Cover.module.css";

function Cover() {
  return (
    <div className={classes.cover}>
      <div className={classes.moneyCont}>
        <img alt="" className={classes.moneyshot} src={moneyshot} />
      </div>
      <div className={classes.headwrapper}>
        <div className={classes.header} id="headerwrap">
          <div className={classes.moneyspace}></div>
          <div className={classes.container}>
            <div className="row centered hiding">
              <div className={classes.moneyprint + " col-lg-12"}>
                <h1>Christyasto Priyonggo Pambudi</h1>
                <h3>Research Officer | Aspiring Developer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cover;
