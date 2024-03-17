import styles from "../Products/Products.module.css";
import arrowLeft from "../../assets/arrow-left.png";
import arrowDown from "../../assets/arrow-down.jpg";
import arrowRight from "../../assets/arrow-left.jpg";
import arrowup from "../../assets/arrow-up.png";
import Right from "../../assets/material-symbols_check-small-rounded.png";
import checkbox from "../../assets/Checkbox.png";
import heart from "../../assets/heart.png";
import heartRed from "../../assets/heart-red.png";
import productsData from "../../constants/productsData";

import { useState } from "react";

const Products = () => {
  const [data, setData] = useState(productsData);
  const [isShow, setIsShow] = useState(true);
  const [isRecomended, setisRecomended] = useState(false);
  const [text, setText] = useState("RECOMMENDED");
  const [isDropDown, setIsDropDown] = useState(false);
  const [dropDownText, setDropDownText] = useState("");

  const handleShowFilter = () => {
    setIsShow(isShow ? false : true);
  };

  const handleShowRecomended = () => {
    setisRecomended(isRecomended ? false : true);
  };

  const handleRecomendedIndex = (index) => {
    setText(recomendedArr[index]);
    setisRecomended(false);
  };

  const handleFilteredDropDown = (index) => {
    const clickedText = DropDownTextandIcons[index];
    if (dropDownText === clickedText) {
      setIsDropDown(!isDropDown);
    } else {
      setDropDownText(clickedText);
      setIsDropDown(true);
    }
  };

  const handleAddtoCart = (index) => {
    const updatedProductsData = [...data];
    updatedProductsData[index].isAdd = !updatedProductsData[index].isAdd;
    setData(updatedProductsData);
  };

  const DropDownTextandIcons = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  const recomendedArr = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  const recomendedItem = recomendedArr.map((ele, index) => {
    return (
      <div
        className={styles.recomendedSelection}
        key={index}
        onClick={() => handleRecomendedIndex(index)}
      >
        {text === ele ? (
          <div>
            {" "}
            <img src={Right} width="20px" height="20px" />
          </div>
        ) : (
          ""
        )}
        <div style={text === ele ? { fontWeight: "bold" } : {}}>{ele}</div>
      </div>
    );
  });

  const list = data.map((ele, index) => {
    return (
      <div key={index} className={styles.card}>
        <div className={styles.cardImgContainer}>
          <img src={ele.image} width="100%" height="100%" alt="Image"/>
        </div>
        <div className={styles.cardNameContainer}>
          <h4>{ele.name}</h4>
        </div>
        <div className={styles.cardDescriptionContainer}>
          <div>
            <span
              style={{
                color: "#888792",
                textDecoration: "underline",
                marginRight: "3px",
              }}
            >
              Signin
            </span>{" "}
            or Create an account to see pricing
          </div>
          <div onClick={() => handleAddtoCart(index)}>
            {ele.isAdd ? (
              <img src={heartRed} width="20px" height="20px" alt="heart-icon" />
            ) : (
              <img src={heart} width="20px" height="20px" alt="heartRed" />
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={styles.filterHeder}>
        <div className={styles.filterItems}>
          <div className={styles.itemsCount}>3425 Items</div>
          <div className={styles.slideBar} onClick={handleShowFilter}>
            {isShow && (
              <>
                <div className={styles.hideFilterIcon}>
                  <img
                    src={arrowLeft}
                    width="15px"
                    height="15px"
                    alt="arrow-left"
                  />
                </div>
                <div className={styles.hideFilterText}>HIDE FILTER</div>
              </>
            )}

            {!isShow && (
              <>
                <div className={styles.showFilterIcon}>
                  <img
                    src={arrowRight}
                    width="15px"
                    height="15px"
                    alt="arrow-left"
                  />
                </div>
                <div className={styles.showFilterText}>SHOW FILTER</div>
              </>
            )}
          </div>
        </div>
        <div className={styles.filterText} onClick={handleShowFilter}>FILTER</div>






        
        <div className={styles.slideBar} onClick={handleShowRecomended}>
          <div className={styles.recomemdedTextSize}>{text}</div>
          <div>
            <img
              src={arrowDown}
              width="15px"
              height="15px"
              alt="arrow-down"
              className={styles.arrowIcon}
            />
          </div>
        </div>
      </div>

      {isRecomended && (
        <div className={styles.recomendedContainer}>{recomendedItem}</div>
      )}

      <div className={styles.productsandFilterContainer}>
        {isShow && (
          <div className={styles.filterItemsContainer}>
            <div className={styles.customizContainer}>
              <div>
                <img src={checkbox} width="15px" height="15px" alt="Icon" />
              </div>
              <div>CUSTOMIZBLE</div>
            </div>

            {DropDownTextandIcons.map((ele, index) => {
              return (
                <>
                  <div
                    className={styles.idealForContainer1}
                    style={
                      dropDownText === index
                        ? {}
                        : { borderBottom: "0.1px solid rgb(233, 232, 232)" }
                    }
                  >
                    <div
                      className={styles.idealForText}
                      onClick={() => handleFilteredDropDown(index)}
                    >
                      <div>{ele}</div>
                      <div>
                        {isDropDown && dropDownText === ele ? (
                          <img
                            src={arrowup}
                            width="15px"
                            height="15px"
                            alt="drop-down-icon"
                          />
                        ) : (
                          <img
                            src={arrowDown}
                            width="15px"
                            height="15px"
                            alt="drop-down-icon"
                          />
                        )}
                      </div>
                    </div>
                    <div>ALL</div>
                  </div>

                  {isDropDown && dropDownText === ele ? (
                    <div className={styles.idealForDropDownContainer}>
                      <div className={styles.unSelectAllText}>Unselect all</div>
                      <div className={styles.men}>
                        <div>
                          <img
                            src={checkbox}
                            width="15px"
                            height="15px"
                            alt="Icon"
                          />
                        </div>
                        <div>Men</div>
                      </div>
                      <div className={styles.men}>
                        <div>
                          <img
                            src={checkbox}
                            width="15px"
                            height="15px"
                            alt="Icon"
                          />
                        </div>
                        <div>Women</div>
                      </div>
                      <div className={styles.men}>
                        <div>
                          <img
                            src={checkbox}
                            width="15px"
                            height="15px"
                            alt="Icon"
                          />
                        </div>
                        <div>Baby & Kids</div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        )}

        <div
          className={
            isShow ? styles.productsContainer : styles.productsContainerNew
          }
        >
          {list}
        </div>
      </div>
    </div>
  );
};

export default Products;
