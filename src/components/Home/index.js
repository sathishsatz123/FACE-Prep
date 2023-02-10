
import Header from '../Header'

import './index.css'
import React, {useState, useEffect} from 'react'
function Home() {
  const [items, setItems] = useState([])
  const [setHasMore] = useState(true)
  const [page, setPage] = useState(1)
 
  useEffect(() => {
    fetchData(page)
  }, [page])
 
  const fetchData = (page) => {
    const newItems = []
 
    for (let i = 0; i <= 100; i++) {
      newItems.push(i)
    }
 
    if (page === 100) {
      setHasMore(false)
    }
 
    setItems([...items, ...newItems])
  }
 
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
 
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1)
    }
  }
 
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])
 
  return (
    <div>
     <Header/>
   
      {items.map((item, index) => (
        <div key={index}>
          {`Sathish Kumar - Count: `+item}
        </div>
      ))}
    </div>
  )
}
 
export default Home