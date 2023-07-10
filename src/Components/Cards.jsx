import React, { useEffect, useState } from 'react'

function Cards({name,image,follwers }) {
    const [follers, setfollers] = useState([])
    useEffect(() => {
      fetch(follwers).then(res => res.json()).then(data => setfollers(data))
    }, [follers])
    
  return (
    <div className='flex  text-white bg-[#141212] 	border-2 border-gray-300 rounded-lg '>
        <div >
            <img src={image} alt=""  className=' w-[10rem]  h-[10rem] p-2 md:rounded-lg'/>
        </div>
        <div className=' p-3'>
            <p className='text-xl md:text-4xl fw-bolder my-2 text-blue-500'>{name}</p>
            <div>
                <div className='flex text-white gap-2'>
                    <div>
                    <p  className=' fw-lighter md:text-xl ' >Follower</p>
                    <p>{follers.length}</p>
                    </div>
                    <div>

                    <p className=' fw-lighter md:text-xl ' >following</p>
                    <p>30</p>
                    </div>
                    <div>

                    <p className=' fw-lighter text-xl ' >articles</p>
                    <p>30</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards