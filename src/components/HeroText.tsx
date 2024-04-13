import React from 'react'
import Image from 'next/image'
import arrowRight from '../../public/assets/icons/arrowRight.svg'

const HeroText = () => {
    return (
        <section className='mt-[20px] hero_container'>
            <p className='normal_txt'>
                Hi, There!
            </p>
            <h1 className='bold_title'>
                We are a growing-up
                <br />
                Creative Agency from
                <br />
                Indonesia!
            </h1>
            <p className='mt-[8px] normal_txt'>
                We provides you with modest and professional design templates
                <br />
                that come from the synergy of design and technology
            </p>
            <button
            className='mt-[40px] h-[80px] w-[299px] main_btn_container main_btn_txt'
            type='button'>
                Let’s Collaborate
                <Image className='w-[48px] h-[48px]' src={arrowRight} alt="arrow icon" />
            </button>
        </section>
    )
}

export default HeroText