import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
   
     <div className=' max-w-screen-xl  pt-6 pb-4 flex mx-auto items-center  justify-between border-b-[1px] border-zinc-700'>
     <div className='flex items-center'>
     <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
     <div className='links font-semibold ml-24 flex gap-10 capitalize items-center '>
        {["Home","work","culture","", "news"].map((elem,index )=> <a key={index} className='flex gap-1 items-center text-sm' href='#'>
            {elem.length === 0 ? <span className='w-[2px] h-8 bg-zinc-500'></span>:index === 1 &&(<span style={{boxShadow:"0 0 0.25em #00FF19"}} className=' inline-block w-1 h-1 bg-green-400 rounded-full'></span>)}
            {elem}
            
            </a>)}
     </div>
     </div>
     <Button></Button>
    </div>
    
   
  )
}

export default Navbar
