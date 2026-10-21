import "../Page1/P1_secc1.module.scss"
import { Photo } from "../../Photo"
import classes from "../Page1/P1_secc1.module.scss"
export default function App(){
    return(
        <>
            <section className={classes.First}>
                <div className={classes.Centr}>
                    <h1>THE FUTURE OF WELLNESS.</h1>
                    <p>The perfect balance of science, nature and technology. Prepare to look and feel your absolute best.</p>
                    <div className={classes.kont}>
                        <button className={classes.knopka}>SUPPLEMENT</button>
                        <button className={classes.knopka}>LASER</button>
                    </div>
                </div>
            </section>
        </>
    )
}