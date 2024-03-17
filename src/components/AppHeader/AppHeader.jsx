import styles from "../AppHeader/AppHeader.module.css";
import icon from "../../assets/element-4.png";
import navLogoIcon from "../../assets/Logo.png";
import searchNormal from "../../assets/search-normal.png";
import heart from "../../assets/heart.png";
import shoppingBag from "../../assets/shopping-bag.png";
import profile from "../../assets/profile.png";
import Language from "../../assets/Language.png";
const AppHeader = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerLorem}>
          <div className={styles.headerLoremText}>
            <div className={styles.headerLoremTextIcon}>
              <img src={icon} width="90%" height="90%" alt="icon" />
            </div>
            <div>Lorem ipsum dolor</div>
          </div>
          <div className={styles.headerLoremText}>
            <div className={styles.headerLoremTextIcon}>
              <img src={icon} width="90%" height="90%" alt="icon" />
            </div>
            <div>Lorem ipsum dolor</div>
          </div>
          <div className={styles.headerLoremText}>
            <div className={styles.headerLoremTextIcon}>
              <img src={icon} width="90%" height="90%" alt="icon" />
            </div>
            <div>Lorem ipsum dolor</div>
          </div>
          <div className={styles.headerLoremTextContainer}>
            <div className={styles.headerLoremTextIcon}>
              <img src={icon} width="90%" height="90%" alt="icon" />
            </div>
            <div>Lorem ipsum dolor</div>
          </div>
        </div>
        <nav>


          <label htmlFor="toggle" className={styles.hamburgur}>
            &#9776;
          </label>
          <input type="checkbox" id="toggle" />

          <div className={styles.navBar}>
            <div className={styles.navIcons}>
              <div className={styles.navLogoIcon}>
                <img src={navLogoIcon} alt="LOGO" width="25px" height="25px" />
              </div>
              <div className={styles.navLogoText}>LOGO</div>
              <div className={styles.navLogoIcons}>
                <div>
                  <img
                    src={searchNormal}
                    width="80%"
                    height="80%"
                    alt="search-icon"
                  />
                </div>
                <div>
                  <img src={heart} width="80%" height="80%" alt="search-icon" />
                </div>
                <div>
                  <img
                    src={shoppingBag}
                    width="80%"
                    height="80%"
                    alt="search-icon"
                  />
                </div>
                <div className={styles.profileIcon}>
                  <img
                    src={profile}
                    width="80%"
                    height="80%"
                    alt="search-icon"
                  />
                </div>
                <div className={styles.profileLanguage}>
                  <img
                    src={Language}
                    width="100%"
                    height="100%"
                    alt="search-icon"
                  />
                </div>
              </div>
            </div>
            <div className={styles.navItems}>
              <div className={styles.navItemsContainer}>
                <div>SHOP</div>
                <div>SKILLS</div>
                <div>STORIES</div>
                <div>ABOUT</div>
                <div>CONTACT US</div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className={styles.navItemsContainerMobile}>
        <div className={styles.homeText}>HOME</div>
        <span className={styles.homeText}>|</span>
        <div>SHOP</div>
      </div>
    </>
  );
};

export default AppHeader;
