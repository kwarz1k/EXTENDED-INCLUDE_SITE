import "../Page1/P1_secc6.module.scss"
import { Photo } from "../../Photo"
import classes from "../Page1/P1_secc6.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function App(){
    return(
        <>
        <section className={classes.Six}>
            <div className={classes.Centr}>
            <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
         >
        <SwiperSlide>
            <div className={classes.kont}>
                <h1>“Your one stop solution to feeling energised and focused.”</h1>
                <img src={Photo.FORBS}></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.kont}>
                <h1>“A revelation. Not just about looking better and feeling better. LYMA is about real health benefits.”</h1>
                <img src={Photo.gang}></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.kont}>
                <h1>“Experts are queuing up to praise LYMA.”</h1>
                <img src={Photo.FTA}></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.kont}>
                <h1>“Your one stop solution to feeling energised and focused.”</h1>
                <img src={Photo.FORBS}></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.kont}>
                <h1>“A revelation. Not just about looking better and feeling better. LYMA is about real health benefits.”</h1>
                <img src={Photo.gang}></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.kont}>
                <h1>“Experts are queuing up to praise LYMA.”</h1>
                <img src={Photo.FTA}></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.kont}>
                <h1>“Your one stop solution to feeling energised and focused.”</h1>
                <img src={Photo.FORBS}></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.kont}>
                <h1>“A revelation. Not just about looking better and feeling better. LYMA is about real health benefits.”</h1>
                <img src={Photo.gang}></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.kont}>
                <h1>“Experts are queuing up to praise LYMA.”</h1>
                <img src={Photo.FTA}></img>
            </div>
        </SwiperSlide>
        </Swiper>
            </div>
        </section>
        </>
    )
}