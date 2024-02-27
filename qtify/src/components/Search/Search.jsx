import React from "react"
import {ReactComponent as SearchIcon} from "../../assets/Search-icon.svg"
import styles from "./Search.module.css"


export default function Search({placeholder}){
    const onSubmit=(e)=>{
        return null
    }
    return(
        <form onSubmit={onSubmit} className={styles.wrapper}>
            <input className={styles.search} placeholder={placeholder} required/>
            <button className={styles.searchButton} type="submit"><SearchIcon/></button>
        </form>
    )
}