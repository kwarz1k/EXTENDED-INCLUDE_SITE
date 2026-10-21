import "../Page1/P1_secc2.module.scss"
import { Photo } from "../../Photo"
import classes from "../Page1/P1_secc2.module.scss"
export default function App(){
    return(
        <>
            <section className={classes.Second}>
                <div className={classes.Centr}>
                    <div className={classes.kont1}>
                        <div className={classes.sent}>
                            <h1>Supplement.</h1>
                            <p>Nine powerful ingredients.</p>
                            <p>One ultimate formula.</p>
                            <div className={classes.konts}>
                                <p>DISCOVER</p>
                                <p>BUY</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.kont2}>
                        <div className={classes.sent}>
                            <h1>Laser.</h1>
                            <p>Ultimate skin regeneration.</p>
                            <p>A new dawn for beauty.</p>
                            <div className={classes.konts}>
                                <p>DISCOVER</p>
                                <p>BUY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}