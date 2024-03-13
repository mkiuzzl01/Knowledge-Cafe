import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import './App.css'

function App() {
  return (
    <>
     <Header></Header> 
     <div className='flex'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
