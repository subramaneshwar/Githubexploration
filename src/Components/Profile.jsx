import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
function Profile() {
  const param = useParams()
  console.log(param);
  const [Data, setData] = useState([])
  const [repo, setrepo] = useState([])
  useEffect(() => {
    fetch(`https://api.github.com/users/${param.id}`).then(res => res.json()).then(data => setData(data))
    fetch(`https://api.github.com/users/${param.id}/repos`).then(res => res.json()).then(data => setrepo(data))
  }, [param.id])
  console.log(repo);
  return (
    <div className='bg-black text-white py-24 h-fit w-full md:flex flex-col items-center'>
      <p className='text-5xl text-center text-cyan-600 font-bold '>GitHub Profile</p>
      <div className='md:flex  my-6 border p-4 rounded-xl mx-3'  >
        <img src={Data.avatar_url} alt="" className='h-[9rem] w-[9rem] mx-auto rounded-full' />
        <div className='flex flex-col md:flex-none'>
          <p className='text-4xl text-center text-amber-700 ' >{Data.login}</p>
          <p className='text-lg text-center text-white py-2' >{Data.location}</p>
          <div className='flex justify-around gap-1 md:gap-2  md:px-3  '>
            <p className='bg-[#31ccbd] rounded-md md:rounded-xl px-1 md:px-2'>
              reps:{Data.public_repos}
            </p>
            <p className='bg-[#b51696] rounded-md md:rounded-xl px-1 md:px-2'>
              Followers:{Data.followers}
            </p>
            <p className='bg-[#a170fa] rounded-md md:rounded-xl px-1 md:px-2'>
              Following:{Data.following}
            </p>

          </div>
          <a href={Data.html_url} className='my-3 md:my-5 flex justify-center'>
            <button class=" flex items-center gap-2  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <AiFillGithub /> View Profile
            </button>
          </a>
        </div>

      </div>
      <p className='text-xl p-2'>Repositories</p>
      {
        repo.map((data, ind) => (ind < 5 ? 
        <div className='flex flex-col md:flex-row bg-yellow-600 p-3 m-2 gap-2'>
          <div className=''>
            <div className='flex gap-2 '>
              <p className='text-xl font-bold'>{data.name}</p>
              <p className=' bg-orange-600 rounded-lg px-2'>{data.language ? data.language : "Javascript"}</p>
            </div>
            <div className='flex flex-col items-start  md:flex-row gap-2'>
              <p className='font-bold'>created: <span>{data.created_at}</span> </p>
              <p className='font-bold'>Updated: <span>{data.updated_at}</span></p>

            </div>
            <div className='flex gap-2'>
              <p className=' bg-red-800 rounded-lg px-2'>Bootstrap</p>
              <p className=' bg-red-800 rounded-lg px-2'>React</p>
              <p className=' bg-red-800 rounded-lg px-2'>JavaScript</p>
            </div>
          </div>
          <div className='flex  gap-2 m-2'>
            <button class="  bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-1 px-2 border border-black hover:border-transparent rounded">
              <a href={data.html_url}>View Profile</a>
            </button>
            <button class="  bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-1 px-2 border border-black hover:border-transparent rounded">
              Host Link
            </button>
          </div>
        </div> : ""

        ))
      }

      <div>

      </div>

    </div>
  )
}

export default Profile