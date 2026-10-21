import "../Page1/P1_secc3.module.scss"
import { Photo } from "../../Photo"
import classes from "../Page1/P1_secc3.module.scss"
export default function App(){
    return(
        <>
            <section className={classes.Third}>
                <div className={classes.zxc}>
                    <h1>THE QUEST FOR BETTER.</h1>
                    <img src={Photo.duhi}></img>
                    <p>At LYMA, we’re always searching for the perfect balance of science, nature and technology. Every LYMA product has been designed to work together. We know that when we discover the best, you’ll discover yours.</p>
                </div>
            </section>
        </>
    )
}