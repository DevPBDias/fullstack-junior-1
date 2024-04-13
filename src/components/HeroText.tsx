import React from 'react'
import Image from 'next/image'
import arrow from '../assets/Arrow.svg'

const HeroText = () => {
    return (
        <section className='mt-[20px] flex flex-col ml-[160px] justify-start'>
            <p className='font-normal text-2xl text-[#FBFBFB] leading-[40px]'>
                Hi, There!
            </p>
            <h1 className='mt-[4px] font-bold text-[64px] text-[#FBFBFB] leading-[80px]'>
                We are a growing-up
                <br />
                Creative Agency from
                <br />
                Indonesia!
            </h1>
            <p className='mt-[8px] font-normal text-2xl text-[#FBFBFB] leading-10'>
                We provides you with modest and professional design templates
                <br />
                that come from the synergy of design and technology
            </p>
            <button
            className='mt-[36px] flex flex-row items-center h-[80px] w-[299px] bg-[#FBFBFB] justify-center font-normal text-[24px] text-[#333333] leading-[40px]'
            type='button'>
                Let’s Collaborate
                <Image className='w-[48px] h-[48px]' src={arrow} alt="arrow icon" />
            </button>
        </section>
    )
}

export default HeroText