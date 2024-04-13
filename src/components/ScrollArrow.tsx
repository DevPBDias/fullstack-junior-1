import React from 'react'
import Image from 'next/image'
import arrowDown from '../../public/assets/icons/arrowDown.png'

const ScrollArrow = () => {
    return (
        <div className='bottom-[73px] left-[60px] w-[40px] h-[89px] scroll_arrow_container'>
            <p className='scroll_arrow_txt'>Scroll</p>
            <div className='w-[32px] h-[32px]'>
                <Image className='img_size' src={arrowDown} alt="arrow icon" />
            </div>
        </div>
    )
}

export default ScrollArrow