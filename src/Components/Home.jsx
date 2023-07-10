import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cards from './Cards';

function Home() {
    const [Data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users').then(res=>res.json()).then(data=> setData(data))
    }, [])
    
    
    console.log(Data);
    
  return (
    <div className='bg-black top-16 absolute flex  flex-wrap sm:px-10  lg:px-20'>
        {Data.map(ele => (
        <>
            <Link to={`/profile/${ele.login}`} key={ele.id} className='p-4 lg:p-3 hover:opacity-50'> 
                <div className='flex'>
                   <Cards name={ele.login} image={ele.avatar_url} follwers={ele.followers_url} following={ele.following_url} />
                </div> 
                
            </Link>
        </>))}
    </div>
  )
}

export default Home