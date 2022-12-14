import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./Promotion.module.css";
import PromotionItem from "./PromotionItem";
import { ItemContents } from "./ItemContents.js";

 export default function Promotion() {
    const numPerPage = 4;
    const [currentpage, setCurrentPage] = useState(0);
    const pageNumber = Math.ceil(ItemContents.length / numPerPage);

  useEffect(() => {
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      if (currentpage == pageNumber - 1 && pageNumber !== 0) {
        return setCurrentPage(0)
      } else {
        setCurrentPage((prev) => prev + 1)
      }
    }, 5000)
  
    return () => clearInterval(intervalId); //This is important
  }, [currentpage])

    const createDot = (pageNumber) => {
    const lis = new Array(pageNumber).fill(1).map((item, index) => (
      <li
        key={index}
        className={`${classes.liItem} 
        ${currentpage === index ? classes.activeLiItem : null}`}
        onClick={() => setCurrentPage(index)}
      ></li>
    ));
      return lis;
    };

    return (
      <div className={classes.OuterContainer}>
        <div className={classes.PromotionContainer}>
          {currentpage !== 0 && (
            <div
              className={classes.IconboxBack}
              onClick={() => setCurrentPage(currentpage - 1)}
            >
              <IoIosArrowBack size={20} />
            </div>
          )}
        {currentpage !== pageNumber - 1 && pageNumber !== 0 && (
            <div
              className={classes.IconboxForward}
              onClick={() => setCurrentPage(currentpage + 1)}
            >
              <IoIosArrowForward size={20} />
            </div>
          )}
          {ItemContents.slice(
            currentpage * numPerPage,
            (currentpage + 1) * numPerPage + 1
          ).map((item) => (
            <PromotionItem key={item.id} item={item} />
          ))}
        </div>
        <ul className={classes.nextPageContainer}>{createDot(pageNumber)}</ul>
      </div>
    );
}
 