import React from 'react';
import bgimg from '../../assets/bgimg.png'

const Header = () => {
    
    return (
    <nav className='h-[55px] bg-white fixed w-full z-10 '>
     <div className="logos flex justify-center p-0.5">
        <div className="mr-1">
            <img className="bg-black h-[50px] "src={bgimg} alt="" />
        </div>
        <div className="text flex-col">
            <div className="upper flex justify-center items-baseline">
                <div className="left font-bold text-[20px]">Bhagavad Gita</div>
                <div className="right font-semibold text-[18px]">The Song Of The God</div>
            </div>
            <div className="lower font-medium text-[15px]">Jay Shree Krishna</div>
        </div>
     </div>

    </nav>
  )
}

export default Header
