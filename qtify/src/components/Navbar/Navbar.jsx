import styles from "./Navbar.module.css"
import {InputAdornment,TextField} from "@mui/material";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";

export default function Navbar(){
    return (
        <nav className={styles.navbar}> 
            <Logo/>
            <Search placeholder={"Search a song of your choice"}/>
            <Button type="submit" buttontext="Give Feedback"/>
        </nav>
    )
}