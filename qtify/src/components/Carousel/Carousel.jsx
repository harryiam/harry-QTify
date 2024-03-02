import React, { useEffect } from "react";

import { Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

import styles from "./Carousel.module.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Controls=({data})=>{
    const swiper=useSwiper();
    useEffect(()=>{
        swiper.slideTo(0)
    },[data])
    return <></>

}


export default  function Carousel({data,renderComponent}){
    return(
        <>
        <Swiper
        style={{padding:"0px 20px"}}
        initialstate={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        navigation
        allowTouchMove
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <Controls data={data}/>
            <CarouselLeftNavigation/>
            <CarouselRightNavigation/>
            {data.map((ele)=>(
            <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
        </Swiper>
        </>
    )
}