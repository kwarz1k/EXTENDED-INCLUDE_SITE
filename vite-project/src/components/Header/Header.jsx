import { Link } from "react-router-dom"
import { Photo } from "../../Photo"
import "./Header.module.scss"
import classes from "../Header/Header.module.scss"
export default function App(){
    return(
        <>
            <header> 
                <nav>
                    <div className={classes.konti2}>
                        <ul>
                            <li><a href="">SUPPLEMENT</a></li>
                            <li><a href="">LASER</a></li>
                            <li><a href="">REVIEWS</a></li>
                            <li><a href="">JOURNAL</a></li>
                            <li><a href="">ABOUT</a></li>
                        </ul>
                    </div>
                    <img src={Photo.lyma}></img>
                    <div className={classes.konti1}>
                        <ul>
                            <li><a href="">HELP & SUPPORT</a></li>
                            <li><a href="">ACTIVATE</a></li>
                            <li><a href="">ACCOUNT</a></li>
                            <button className={classes.knopka}>BUY</button>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}