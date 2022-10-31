import React from 'react';
import Backdrop from '../Backdrop';
import classes from './Promotion.module.css';
import { IoIosClose } from "react-icons/io";

const content="Lorem ipsum dolor sit amet consectetur adipisicing elit. In suscipit voluptatibus ipsam, pariatur aut tempore itaque repellat commodi quaerat deserunt ex deleniti consequuntur distinctio molestiae esse sint. Libero, accusamus vel."

const ItemDetails = (props) => {
  console.log(props);
  const item= props.item;
    return (
      <Backdrop>
        <div className={classes.ItemDetailsContainer}>
          <div className={classes.IconboxClose}>
            <IoIosClose size={40} onClick={props.onCancle} />
          </div>
          <div className={classes.ItemDetailsBox}>
            <div className={classes.ItemDetailsContainerImgBox}>
              <div className={classes.PromotionPeriod}>
                <span>{`end ${new Date(item.endDate).toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "short",
                  }
                )}`}</span>
              </div>
              <img src={item.img} alt="pics"></img>
            </div>
            <div className={classes.ItemDetailsContainerDescBox}>
              <h2>Collect {item.point} points</h2>
              <p className={classes.ItemDetailsSub}>{item.detailsInfo}</p>
              <a className={classes.ItemDetailsLink}>Find the nearest store </a>
              <h3>Booster Terms and Conditions</h3>
              <p className={classes.ItemDetailsDes}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                dignissimos unde voluptatem vel inventore harum officia eveniet
                reprehenderit maxime. Suscipit incidunt velit consequuntur
                dolor. Adipisci perferendis dolores tempora saepe voluptate?
              </p>
            </div>
          </div>
          <div className={classes.footer}>
            <button className={classes.footerbtn}>Boost</button>
          </div>
        </div>
      </Backdrop>
    );
}
 
export default ItemDetails;