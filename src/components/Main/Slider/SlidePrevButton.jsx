import { useSwiper } from 'swiper/react';
import React from "react"
import './Slider.scss';

export default function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper && swiper.slideNext()} className="nav-btn prev-btn swiper-button-prev">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.327472 8.85341L15.1127 0.562549C15.5618 0.310727 16.1159 0.6353 16.1159 1.15017V16.9239C16.1159 17.4388 15.5618 17.7633 15.1127 17.5115L0.327472 9.22067C0.184059 9.14025 0.184059 8.93383 0.327472 8.85341Z" fill="white" />
            </svg>
        </button>
    );
}


