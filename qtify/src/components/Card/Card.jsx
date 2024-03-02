import React from "react";
import styles from "./Card.module.css";
import {Tooltip,Chip} from "@mui/material"

export default function Card({data,type}){
    const getCard=(type)=>{
        switch (type){
            case "song":{
                const {image,likes,title}=data;
                return(
                    <div className={styles.wrapper}>
                        <div className={styles.Card}>
                        <img src={image} className={styles.img} alt="song" loading="lazy"/>
                        <div className={styles.banner}>
                            <div className={styles.pill}>
                                <p>{likes} Likes</p>
                            </div>
                        </div>
                        </div>
                        <div className={styles.tittlewrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                )
            }
            
            case "album":{
                const {image,songs,follows,title}=data;
                return(
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <a href="sportify.com">
                            <div className={styles.wrapper}>
                                <div className={styles.Card}>
                                <img src={image} className={styles.img} alt="album" loading="lazy"/>
                                <div className={styles.banner}>
                                <Chip 
                                    label={`${follows} Follows`}
                                    size="small"
                                    className={styles.chip} />
                                </div>
                                {/* <div className={styles.banner}>
                                    <div className={styles.pill}>
                                        <p>{follows} Follows</p>
                                    </div>
                                </div> */}
                                </div>
                                <div className={styles.tittlewrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </a>
                    </Tooltip>
                    
                )
            }
            default : return <></>
        }
    }

    return getCard(type)
    
}