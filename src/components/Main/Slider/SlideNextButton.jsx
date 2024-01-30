import { useSwiper } from 'swiper/react';
import React from "react"
import './Slider.scss';

export default function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper && swiper.slideNext()} className="nav-btn next-btn swiper-button-next">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3247 8.85341L1.53949 0.562549C1.09041 0.310727 0.536285 0.635301 0.536285 1.15017V16.9239C0.536285 17.4388 1.09041 17.7633 1.53949 17.5115L16.3247 9.22067C16.4682 9.14025 16.4682 8.93383 16.3247 8.85341Z" fill="white" />
            </svg>
        </button>
    );
}
