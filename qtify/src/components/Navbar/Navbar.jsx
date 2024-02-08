import styles from "./Navbar.module.css"
import {InputAdornment,TextField} from "@mui/material";
import {Search} from "@mui/icons-material";
import logoimg from "../../assets/logo.png"
import Logo from "../Logo/Logo";

export default function Navbar(){
    return (
        <div className={styles.navbar}> 
            <Logo/>
            <div>
                <TextField
                className="search-desktop"
                InputProps={{
                    endAdornment:(
                        <InputAdornment position="end">
                            <Search color="primary"/>
                        </InputAdornment>
                    ),
                }}
                placeholder="Search a song or album"
                name="search"
                />
            </div>
            <div>
                <button className={styles.feedback}>Feedback</button>
            </div>
        </div>
    )
}