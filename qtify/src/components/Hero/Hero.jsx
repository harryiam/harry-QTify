import React from "react";
import {ReactComponent as EarphoneImg} from "../../assets/vibrating-headphone.svg"
import styles from "./Hero.module.css"

export default function Hero({text1,text2}){
    return(
        <div className={styles.hero}>
            <div className={styles.hero2}>
            <div className={styles.font}>
                <h5>{text1}</h5>
                <h5>{text2}</h5>
            </div>
            <div>
                <EarphoneImg/>
            </div>
            </div>
        </div>
    )
}