import React from "react"
import {ReactComponent as SearchIcon} from "../../assets/Search-icon.svg"
export default function Search(){
    return(
        <form>
            <input placeholder="Search Any thing"/>
            <button><SearchIcon/></button>
        </form>
    )
}