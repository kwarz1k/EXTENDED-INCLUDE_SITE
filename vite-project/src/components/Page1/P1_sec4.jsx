import "../Page1/P1_secc4.module.scss"
import { Photo } from "../../Photo"
import classes from "../Page1/P1_secc4.module.scss"
export default function App(){
    return(
        <>
            <section className={classes.Four}>
                <div className={classes.Centr}>
                    <div className={classes.hennesy}>
                        <h1>WELLNESS INNOVATION AT ITS SCIENTIFIC BEST.</h1>
                        <div className={classes.kont}>
                            <button className={classes.knopka}>SUPPLEMENT</button>
                            <button className={classes.knopka}>LASER</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}