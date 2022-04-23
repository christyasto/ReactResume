import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>All Meetups</li>
          <li>Add New Meetup</li>
          <li>Favorites</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
