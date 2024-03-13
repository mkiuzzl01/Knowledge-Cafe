import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import './App.css'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [reading,setReadingTime] = useState(0);

  const addBookmarks = blogs =>{
    const newBookmarks = [...bookmarks, blogs];
    setBookmarks(newBookmarks);
  }
  const readingTime = time =>{
    const newReadingTime = time + reading;
    console.log(newReadingTime)
    setReadingTime(newReadingTime);
  }
  return (
    <>
     <Header></Header> 
     <div className='flex mt-5 '>
     <Blogs addBookmarks = {addBookmarks} readingTime={readingTime}></Blogs>
     <Bookmarks bookmarks={bookmarks} reading={reading}></Bookmarks>
     </div>
    </>
  )
}

export default App
