import { Link } from "react-router-dom"
import { Photo } from "../../Photo"
import "./Footer.module.scss"
import classes from "../Footer/Footer.module.scss"
export default function App(){
    return(
        <>
            <footer>
                <div className={classes.Centr}>
                    <div className={classes.left}>
                        <div className={classes.kont}>
                            <h1>SUPPLEMENT</h1>
                            <div className={classes.text}>
                                <p1>Benefits</p1>
                                <p1>Formula</p1>
                                <p1>Immunity</p1>
                                <p1>Journal</p1>
                                <p1>Reviews</p1>
                                <span><p>Buy</p></span>
                            </div>
                        </div>
                        <div className={classes.kont}>
                            <h1>LYMA LASER</h1>
                            <div className={classes.text}>
                                <p1>LYMA Laser</p1>
                                <p1>Active Mist</p1>
                                <p1>Priming Serum</p1>
                                <p1>Technology</p1>
                                <p1>Results</p1>
                                <p1>Journal</p1>
                                <p1>Reviews</p1>
                                <span><p>Buy</p></span>
                            </div>
                        </div>
                        <div className={classes.kont}>
                            <h1>ABOUT</h1>
                            <div className={classes.text}>
                                <p1>About</p1>
                                <p1>Journal</p1>
                                <p1>FAQs</p1>
                                <p1>Contact</p1>
                                <p1>Terms</p1>
                                <p1>Privacy</p1>
                                <p1>Warranty</p1>
                            </div>
                        </div>
                        <div className={classes.kont}>
                            <h1>ACCOUNT</h1>
                            <div className={classes.text}>
                                <p1>Activate</p1>
                                <p1>My subscription</p1>
                                <p1>Add extras</p1>
                                <p1>My orders</p1>
                                <p1>Account details</p1>
                                <p1>Payment method</p1>
                                <p1>Login details</p1>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <h1>NEWSLETTER</h1>
                        <div className={classes.Shakira}>
                            <p>Subscribe to our newsletter.</p>
                            <form action="/search" method="get">
                            <input className={classes.search} placeholder="LYMA Newsletter" required></input>
                            <button className={classes.submit}>SIGN UP</button>
                            </form>
                        </div>
                        <div className={classes.asdasd}>
                            <img src={Photo.yt}></img>
                            <img src={Photo.ina}></img>
                            <img src={Photo.face}></img>
                            <img src={Photo.insta}></img>
                            <img src={Photo.pinter}></img>
                        </div>
                        <p>© LYMA Life Ltd. 2021</p>
                    </div>
                </div>
            </footer>
        </>
    )
}