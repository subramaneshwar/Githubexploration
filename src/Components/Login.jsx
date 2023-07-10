import React, { useEffect, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const [Inp, setInp] = useState("")
    const [pass, setpass] = useState("")
    const [err, seterr] = useState(true)
    // const [UserDData, setUserDData] = useState([])
    // console.log(UserDData);
    const dispatch = useDispatch()

    const Navigate = useNavigate()
    
    const login =  async (e) => {
        e.preventDefault();
        console.log(pass,Inp);

        const resp = await fetch(`https://api.github.com/users/${Inp}`)
        const res  = await resp.json()
        console.log(res);
        if(pass === Inp){

            if(await res.login){

                // console.log("yes",UserDData,UserDData.login);
                dispatch({
                    type:'Login',
                    payload:res,
                    islogin:true

                })  
                Navigate('/')
                seterr(true)
                // alert("suceess")
            }
            else {
                console.log('no');
                // seterr(false)
            }

        }
        else{
            seterr(false)
        }
    }
    
    return (
        <section class="login bg-gray-50 dark:bg-gray-900 h-full">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link  class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <AiFillGithub className="w-8 h-8 mr-2" />
                    Github
                </Link>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your Account
                        </h1>
                        <p className={err ? `hidden` : 'block bg-red-700 p-2 font-bold'}>Please Enter your correct username and Password </p>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your UserName</label>
                                <input onChange={(e)=>setInp(e.target.value)} type="text" name="email" value={Inp} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={(e)=>setpass(e.target.value)} type="password" name="password" id="password" placeholder="••••••••"  value={pass} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>

                            <button onClick={login} class="bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                SignIn
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login