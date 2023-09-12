import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs'
import Bookmarks from './components/Boomarks/Bookmarks'

function App() {
  const [bookmark,setBookmark] =useState([]);
  const handleAddToBookmark =(blog) =>{
    console.log(blog);
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-screen-lg mx-auto'>
      <Blogs handleAddToBookmark ={handleAddToBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
