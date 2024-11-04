import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/ChapterContext.jsx';
import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom';

const Verse = () => {
  const { id } = useParams()
  const chapters = useContext(UserContext);
  const [chapterInfo, setchapterInfo] = useState([]);
  const [verseInfo, setVerseInfo] = useState([]);
  useEffect(() => {
    const VerseApi = async () => {
      const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '38ffc38abdmshd39bcf986d7e34cp13ac58jsn3ceffd7a4d1e',
          'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
      };
      const response = await fetch(url, options);
      const result = await response.json();
      setVerseInfo(result)
      
      }
      VerseApi()
      }, [])
    //  const verseInfo = useLoaderData()

      useEffect(() => {
        setchapterInfo(chapters.filter(chapter=>chapter.id==id))
        
      }, [id])
      
      // console.log(verseInfo)


  return (
    <div className='flex flex-col justify-center items-center ' >

        {chapterInfo.map(chapter=><div className='flex flex-col items-center pb-2 rounded-lg justify-center mt-[56px]  text-white w-[90%] bg-white opacity-[0.85] '><div className='mt-[13px] h-[47px] justify-center flex items-center font-semibold text-[#ffc071] text-[20px] rounded-md bg-[#242d59] w-[80%]'>
          Chapter {id} : {chapter.name_translated}
        </div>
          <div className='h-[30px] mt-[13px] bg-[#242d59]  w-[80%] rounded-md flex justify-center items-center text-[#ffc071] font-semibold text-[15px]'>{chapter.name}</div>
          <div className='m-[15px] text-black justify-center items-center text-justify'>{chapter.chapter_summary}</div>
        </div>      
      )}
       {verseInfo.map(verse=> <div className='flex flex-col items-center pb-2 rounded-lg justify-center mt-[2px] mb-[10px]  text-white w-[90%] bg-white opacity-[0.85]'>
        <div className="h-[45px] bg-[#ffc071] flex items-center w-[80%] rounded-md text-blue-900 font-bold text-[20px] justify-center mt-2">Bhagavat Gita : Chapter {verse.chapter_number}, Verse {verse.verse_number} </div>
        <div className='mt-2 text-blue-900 font-bold w-[60%] text-center '>{verse.text}</div>
        <div className='mt-5 text-blue-900 font-bold w-[60%] text-center'>{verse.transliteration}</div>
        <div className="h-[45px] bg-[#ffc071] flex items-center w-[80%] rounded-md text-blue-900 font-bold text-[20px] justify-center mt-2"><h2>Translation</h2></div>
      <div className='text-black font-bold w-[60%] text-center m-2'>{verse.translations.filter(ver=>ver.author_name=="Dr. S. Sankaranarayan").map(ver=>ver.description)}</div>
      <div className="h-[45px] bg-[#ffc071] flex items-center w-[80%] rounded-md text-blue-900 font-bold text-[20px] justify-center mt-2"><h2>Commentary</h2></div>
      <div className='text-black font-bold w-[60%] text-center m-2'>{verse.commentaries.filter(ver=>ver.author_name=="Swami Chinmayananda" ).map(ver=>ver.description)}</div>
      <div className="h-[45px] bg-[#ffc071] flex items-center w-[80%] rounded-md text-blue-900 font-bold text-[20px] justify-center mt-2"><h2>Word Meaning</h2></div>
      <div className='text-black font-bold w-[60%] text-center m-2'>{verse.word_meanings}</div>
      </div>)}
        
    </div>
  )
}

export default Verse


// export const verseInfoLoader = async () => {
//   const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '38ffc38abdmshd39bcf986d7e34cp13ac58jsn3ceffd7a4d1e',
//       'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
//     }
//   };
//   const response = await fetch(url, options);
//   return response.json()
// }