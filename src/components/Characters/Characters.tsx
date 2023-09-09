import Card from './Card'
import { useState, useEffect } from 'react'
import axios from "axios"


const Characters = () => {

  const [url, setUrl]=useState("https://gateway.marvel.com/v1/public/characters?ts=13469789&apikey=4459ff8a28f75db75d9c7eac0eb97c93&hash=384b7e90a155d9ab982a33714342c09f")
  const [item, setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])

  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
  }

  return (
    <>
      <div className="header">
        {/* <div className='bg'>
          <img src="/assets/images/Comic.jpg" alt="" />
        </div> */}
        <div className="search-bar">
                {/* <img src="./Images/logo.jpg" alt="logo" /> */}
                <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyPress={searchMarvel}/>
            </div>
        <div className="content">
          
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
        </div>
      </div>
    </>
  )
}

export default Characters

