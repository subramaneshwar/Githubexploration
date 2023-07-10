import React, {  useState } from 'react'

function Search() {
    const [Data, setData] = useState([])
    const [Inp, setInp] = useState("")
    const [Error, setError] = useState(false)
    function onSubmit() {
        console.log(Inp);
        fetch(`https://api.github.com/users/${Inp}`).then(res => res.json()).then(data => setData(data)).catch(error => setError(!error))
        setInp("")
    }
    // useEffect(() => {
    // }, [])
    console.log(Data);
    return (
        <div className='text-center bg-black h-full w-full py-24 text-white '>
            <div>
                <h1 className='text-4xl md:text-6xl text-[#eab446] '>GitFetch-Profile Finder </h1>
                <h1 className='text-4xl md:text-6xl text-[#eab446] p-5'>for Github</h1>
                <p className='text-xl py-2'>Check out the reps,follwers and more, <br />just by entering a username</p>
            </div>
            <input onChange={(e) => setInp(e.target.value)} type="text" name="" id="" value={Inp} className='bg-black text-lg border-b-2 outline-none p-2' placeholder="Enter Username ..." />
            <button onClick={onSubmit} class=" mx-2 bg-transparent hover:bg-[#eab446] text-[#eab446] font-bold hover:text-white py-2 px-4 border border-[#eab446] hover:border-transparent rounded">
                Button
            </button>
            
            {
                Data.length <= 0 ? "" 
                
                :
                
                ! Data.message ? <div className='flex item-center justify-center m-5'>
                <div className='flex  text-white bg-[#141212] 	border-2 border-gray-300 rounded-lg '>
                    <div >
                        <img src={Data.avatar_url} alt="" className=' w-[10rem]  h-[10rem] p-2 md:rounded-lg' />
                    </div>
                    <div className=' p-3'>
                        <p className='text-xl md:text-4xl fw-bolder my-2 text-blue-500'>{Data.login}</p>
                        <p>{Data.location}</p>
                        <p>Repositories: {Data.public_repos}</p>
                        <div>
                            <div className='flex text-white gap-2'>
                                <div>
                                    <p className=' fw-lighter md:text-xl ' >Follower</p>
                                    <p>{Data.followers}</p>
                                </div>
                                <div>

                                    <p className=' fw-lighter md:text-xl ' >following</p>
                                    <p>{Data.following}</p>
                                </div>
                                <div>

                                    <p className=' fw-lighter text-xl ' >articles</p>
                                    <p>30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <p className=' flex   items-center justify-center py-10 text-red-700 font-bold'>Please enter correct Usename</p>
            }
            
            
        </div>
    )
}

export default Search