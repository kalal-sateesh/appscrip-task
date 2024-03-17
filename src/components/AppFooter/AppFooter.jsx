import styles from "../AppFooter/AppFooter.module.css";
import usFlag from "../../assets/United States of America (US).png";
import star from "../../assets/Star 1.png";
import insta from "../../assets/Insta.png";
import linkedIn from "../../assets/mdi_linkedin.png";
import Gpay from "../../assets/Gpay.png";
import Mcard from "../../assets/Mcard.png";
import Ppal from "../../assets/Ppal.png";
import Amex from "../../assets/Amex.png";
import Apay from "../../assets/Apay.png";
import Opay from "../../assets/Opay.png";
import arrowDown from "../../assets/arrow-down-png.png";
const AppFooter = () => {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.divContainer}>
          <div className={styles.topContainer}>
            <div className={styles.input}>
              <div>
                <h3>BE THE FIRST TO KNOW</h3>
              </div>
              <div className={styles.signUpText}>
                Sign up for updates from mettā muse.
              </div>
              <div className={styles.inputField}>
                <input placeholder="Enter your email..." />
                <button>SUBSCRIBE</button>
              </div>
            </div>

            <div className={styles.contactUs}>
              <div>
                <h3>CONTACT US</h3>
              </div>
              <div>+44 221 133 5360</div>
              <div className={styles.email}>customercare@mettamuse.com</div>
              <div>
                <h3>CURRENCY</h3>
              </div>
              <div className={styles.usdflag}>
                <img src={usFlag} width="25px" height="25px" alt="Flag" />
                <img src={star} width="5px" height="5px" alt="dot-icon" />
                <span style={{ fontWeight: "bold" }}>USD</span>
              </div>
              <div className={styles.currencyText}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.bottomContainer}>
            <div className={styles.metaText}>
              <div className={styles.metaText1}>
                <h3>mettā muse</h3>
                <div>About Us</div>
                <div>Stories</div>
                <div>Artisans</div>
                <div>Boutiques</div>
                <div>Contact Us</div>
                <div>EU Compliances Docs</div>
              </div>
              <div>
                <div className={styles.metaText1}>
                  <h3>QUICK LINKS</h3>
                  <div>Orders & Shipping</div>
                  <div>Join/Login as a Seller</div>
                  <div>Payment & Pricing</div>
                  <div>Return & Refunds</div>
                  <div>FAQs</div>
                  <div>Privacy Policy</div>
                  <div>Terms & Conditions</div>
                </div>
              </div>
            </div>
            <div className={styles.followUs}>
              <div>
                <h3>FOLLOW US</h3>
                <div className={styles.imgIcons}>
                  <div>
                    <img
                      src={insta}
                      width="25px"
                      height="25px"
                      alt="Insta-icon"
                    />
                  </div>
                  <div>
                    <img
                      src={linkedIn}
                      width="25px"
                      height="25px"
                      alt="LinkedIn-icon"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.payments}>
                <h4>mettā muse ACCEPTS</h4>
                <div className={styles.paymentIcons}>
                  <img src={Gpay} width="50px" height="30px" alt="Gpay-icon" />
                  <img
                    src={Mcard}
                    width="50px"
                    height="30px"
                    alt="Mcard-icon"
                  />
                  <img src={Ppal} width="50px" height="30px" alt="Ppal-icon" />
                  <img src={Amex} width="50px" height="30px" alt="Amex-icon" />
                  <img src={Apay} width="50px" height="30px" alt="Apay-icon" />
                  <img src={Opay} width="50px" height="30px" alt="Opay-icon" />
                </div>
              </div>
            </div>
            </div>
            <div className={styles.copyRight}>
                  Copyright © 2023 mettamuse. All rights reserved.
             </div> 
          </div>
        </div>
      </footer>

      <footer className={styles.mobileFooterContainer}>
        <div className={styles.mobileDivFooterContainer}>
          <div className={styles.first}>
            <h3>BE THE FIRST TO KNOW</h3>
            <div className={styles.mobileLoremText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </div>
            <div className={styles.mobileInputField}>
              <input placeholder="Enter your email..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className={styles.second}>
            <h3>CALL US</h3>
            <div className={styles.mobileCallUs}>
              <div className={styles.mobileEmail}>+44 221 133 5360</div>
              {/* <div className={styles.mobileEmail}>
                <img src={star} width="6px" height="6px" alt="dot-image" />
              </div> */}
              <div className={styles.mobileEmail}>
                <img
                  src={star}
                  width="6px"
                  height="6px"
                  alt="dot-image"
                  style={{ marginRight: "5px" }}
                />
                customercare@mettamuse.com
              </div>
            </div>
            <h3>CURRENCY</h3>
            <div className={styles.mobileUsdflag}>
              <img src={usFlag} width="25px" height="25px" alt="Flag" />
              <img src={star} width="5px" height="5px" alt="dot-icon" />
              <span style={{ fontWeight: "bold" }}>USD</span>
            </div>
          </div>

          <div className={styles.mobileDropDowns}>
            <div className={styles.firstDropDown}>
              <div>
                <h3>mettā muse</h3>
              </div>
              <div>
                <img
                  src={arrowDown}
                  width="15px"
                  height="15px"
                  alt="drop-down"
                />
              </div>
            </div>
            <div className={styles.secondDropDown}>
              <div>
                <h3>QUICK LINKS</h3>
              </div>
              <div>
                <img
                  src={arrowDown}
                  width="15px"
                  height="15px"
                  alt="drop-down"
                />
              </div>
            </div>
            <div className={styles.thirdDropDown}>
              <div>
                <h3>FOLLOW US</h3>
              </div>
              <div>
                <img
                  src={arrowDown}
                  width="15px"
                  height="15px"
                  alt="drop-down"
                />
              </div>
            </div>
          </div>

          <div className={styles.mobilePayments}>
            <h4>mettā muse ACCEPTS</h4>
            <div className={styles.paymentIcons}>
              <img src={Gpay} width="50px" height="30px" alt="Gpay-icon" />
              <img src={Mcard} width="50px" height="30px" alt="Mcard-icon" />
              <img src={Ppal} width="50px" height="30px" alt="Ppal-icon" />
              <img src={Amex} width="50px" height="30px" alt="Amex-icon" />
              <img src={Apay} width="50px" height="30px" alt="Apay-icon" />
              <img src={Opay} width="50px" height="30px" alt="Opay-icon" />
            </div>
            <div className={styles.mobileCopyRight}>
              Copyright © 2023 mettamuse. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AppFooter;
