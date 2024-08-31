import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,para,start,hover}) {
  return (
    <div className={`bg-zinc-700 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between hover:bg-violet-500 hover:${hover} hover:p-6 hover:ease-in-out duration-300`}>
       <div className='w-full'>
       <div className=' w-full flex justify-between items-center'>
        <h3>Our Heading</h3>
        <IoIosArrowRoundForward />
        </div>
        <h1 className='text-3xl font-medium mt-5'>Whatever Heading</h1>
       </div>
        <div className='down w-full'>
            {
                start && ( <>
                    <h1 className='text-8xl font-semibold tracking-tight leading-none mb-4'>Start a Project</h1>
                    <button className='px-5 py-2 rounded-full border border-zinc-50 font-semibold mt-2' >Contact Us</button>
                </>
                )
            }           
        </div>

        {
            para && (
                <p className='text-zinc-500 text-sm font-medium mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            )
        }
    </div>
  )
}

export default Card
