import React from 'react';
import classes from "./Promotion.module.css";
const PromotionItem = ({item}) => {
    return (
      <div className={classes.PromotionItemC}>
        <div className={classes.PromotionItemImgBox}>
          <div className={classes.PromotionPeriod}>
            <span>{`end ${new Date(item.endDate).toLocaleDateString('en-GB',{day:"numeric",month:"short"})}`}</span>
          </div>
          <img src={item.img} alt="pics"></img>
        </div>
        <div className={classes.PromotionItemT}>
          <div className={classes.PromotionItemDesc}>
            <h2>Collect {item.point} points</h2>
            <p>{item.desc}</p>
          </div>
          <div className={classes.Footer}>
            <a>See details</a>
            <button className={classes.btn}>Boost</button>
          </div>
        </div>
      </div>
    );
}
 
export default PromotionItem;