import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css"
import {ReactComponent as LeftArrow} from "../../../assets/leftarrow.svg"



export default function CarouselLeftNavigation(){
    const swiper=useSwiper();
    const [isBeggining,setisBeggining]=useState(swiper.isBeginning)
    useEffect(()=>{swiper.on("slideChange",function(){
        setisBeggining(swiper.isBeginning)
    })},[])

    return (
        <div className={styles.leftnav}>
            {!isBeggining && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
        </div>
    )

}