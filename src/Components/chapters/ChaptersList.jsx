import React, {useState, useEffect, useContext} from 'react'
import {Link,NavLink} from 'react-router-dom'
import { UserContext } from '../../context/ChapterContext.jsx';


const ChapterList =()=>{
const chapters = useContext(UserContext)
   

  


  return (
   <div className='flex justify-center '>
     <div className=' absolute w-[80%] mt-[55px]'>
      <ul className='h-[45px] bg-[#ffc071] mt-2'>
      {chapters.map(chapter => (
        <li key={chapter.id}>
          <Link to={`/verse/${chapter.id}`} className='h-[45px] bg-[#ffc071] flex items-center justify-center mt-2'>
               <h2 className='font-bold text-[20px] flex justify-center items-center text-blue-900 '>Chapter -  {chapter.chapter_number}</h2>
                {/* {console.log(chapter)} */}
          </Link>
                <h3 className='h-[25px] bg-[#ffc071] font-medium text-gray-900 flex items-center justify-center mt-2'>{chapter.name} : {chapter.name_meaning}</h3>
         </li>
        ))}

      </ul>
      
    </div>
    
   </div>
  );

}

export default ChapterList

