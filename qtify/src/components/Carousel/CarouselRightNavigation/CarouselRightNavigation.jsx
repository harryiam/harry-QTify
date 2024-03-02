import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css"
import {ReactComponent as RightArrow} from "../../../assets/rightarrow.svg"

export default function CarouselRightNavigation(){
    const swiper=useSwiper();
    const [isEnd,setisEnd]=useState(swiper.isEnd)
    useEffect(()=>{swiper.on("slideChange",function(){
        setisEnd(swiper.isEnd)
    })},[])

    return (
        <div className={styles.rightnav}>
            {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
        </div>
    )
    
}