import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

export default function Section({title,data,type}){
    const [carouselToggle,setcarouselToggle]=useState(true);

    const handletoggle=()=>{
        setcarouselToggle((prevState)=>!prevState)
    }

    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handletoggle}> {!carouselToggle ? "Collapse" :"Show All"}</h4>
            </div>
            {data.length===0 ?(
                <CircularProgress/>
            ):(
                <div className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {data.map((ele)=>(
                                <Card data={ele} type={type}/>
                            ))}
                        </div>
                    ):(
                        //Carousel logic
                        <Carousel 
                            data={data} renderComponent={(data)=><Card data={data} type={type}/>}
                        />
                    )}
                </div>
            )}
        </div>
    )

}