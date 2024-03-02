import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

export default function Section({title,data,filterSource,type}){
    const [carouselToggle,setCarouselToggle]=useState(true);
    const [filters,setFilters]=useState([{key:"all",label:"All"}])
    const [selectedFilterIndex,setSelectedFilterIndex]=useState(0)

    const handletoggle=()=>{
        setCarouselToggle((prevState)=>!prevState)
    }

    useEffect(()=>{
        if (filterSource){
            filterSource().then((response)=>{
                const {data}=response;
                setFilters([...filters, ...data]);
            })
        }
    },[ ])

    const showFilters=filters.length>1;
    const cardsToRender=data.filter((card)=> showFilters&&selectedFilterIndex!==0 ?card.genre.key===filters[selectedFilterIndex].key : card)



    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                {!showFilters &&(<h4 className={styles.toggleText} onClick={handletoggle}> {!carouselToggle ? "Collapse" :"Show All"}</h4>)}
            </div>
            <div>
            {showFilters &&(
                <Filters filters={filters} selectedFilterIndex={selectedFilterIndex} setSelectedFilterIndex={setSelectedFilterIndex}/>
            )}
            </div>
            {cardsToRender.length===0 ?(
                <CircularProgress/>
            ):(
                <div className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {cardsToRender.map((ele)=>(
                                <Card data={ele} type={type}/>
                            ))}
                        </div>
                    ):(
                        //Carousel logic
                        <Carousel 
                            data={cardsToRender} renderComponent={(d)=><Card data={d} type={type}/>}
                        />
                    )}
                </div>
            )}
        </div>
    )

}