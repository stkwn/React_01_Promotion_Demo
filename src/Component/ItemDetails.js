import React from 'react';
import Backdrop from '../Backdrop';
import classes from './Promotion.module.css';
import { IoIosClose } from "react-icons/io";

const ItemDetails = () => {
    return (
      <Backdrop>
        <div className={classes.ItemDetailsContainer}>
            <div className={classes.ItemDetailsBox}>
                <div className={classes.IconboxClose} onClick={() => {}}>
                  <IoIosClose size={40} />
                </div>
          <div className={classes.ItemDetailsContainerImgBox}>
            <div className={classes.PromotionPeriod}>
              <span>{`end ${new Date("2022-10-1").toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
              })}`}</span>
            </div>
            <img src="img/01.png" alt="01png"></img>
          </div>
          <div className={classes.ItemDetailsContainerDescBox}>
            <h2>Collect 10x points</h2>
            <p className={classes.ItemDetailsSub}>
              When you shop fresh fruit, in-store or online at Woolworths until
              Sunday, 23 October.*
            </p>
            <a className={classes.ItemDetailsLink}>Find the nearest store </a>
            <h3>Booster Terms and Conditions</h3>
            <p className={classes.ItemDetailsDes}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              iure nulla aut provident possimus, quisquam rem modi labore
              repellat deleniti assumenda, incidunt fuga suscipit corporis
              saepe. Accusamus nulla dolorem molestias. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Magnam iure nulla aut provident
              possimus, quisquam rem modi labore repellat deleniti assumenda,
              incidunt fuga suscipit corporis saepe. Accusamus nulla dolorem
              molestias. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Magnam iure nulla aut provident possimus, quisquam rem modi
              labore repellat deleniti assumenda, incidunt fuga suscipit
              corporis saepe. Accusamus nulla dolorem molestias. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam iure nulla aut
              provident possimus, quisquam rem modi labore repellat deleniti
              assumenda, incidunt fuga suscipit corporis saepe. Accusamus nulla
              dolorem molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magnam iure nulla aut provident possimus,
              quisquam rem modi labore repellat deleniti assumenda, incidunt
              fuga suscipit corporis saepe. Accusamus nulla dolorem molestias.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              iure nulla aut provident possimus, quisquam rem modi labore
              repellat deleniti assumenda, incidunt fuga suscipit corporis
              saepe. Accusamus nulla dolorem molestias. Lorem ipsum dolor sit

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repudiandae quod cum ea laudantium nostrum facilis doloremque veniam dicta quidem rerum beatae repellat itaque mollitia commodi praesentium, molestias amet. Magnam!              
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