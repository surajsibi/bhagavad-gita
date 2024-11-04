import React, { useEffect, useState } from "react";
import { createContext } from "react";


const UserContext =createContext()

const ChapterProvider = ({children})=>{
    const [chapters, setChapters] = useState([]);

    useEffect(()=>{
        const apiFunction = async ()=>{
          const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18';
          const options = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '38ffc38abdmshd39bcf986d7e34cp13ac58jsn3ceffd7a4d1e',
              'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
            }
          };
          
            const response = await fetch(url, options);
            const result =await  response.json()
            setChapters(result)
          
        };
            apiFunction();
           
            },[]);


            return(
                <UserContext.Provider value={chapters}>
                    {children}
                </UserContext.Provider>
            )
    
}

export {UserContext,ChapterProvider}; 
    