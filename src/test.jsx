import React, { useEffect, useState } from 'react'


const Test = () => {
    const arry = [{name:'FirstButton' , id:1},{name:'SecondButton',id:2}]

    const [ButtonId , setButtonId] = useState(null)

    const handleId =(e)=>{
        setButtonId(e)
    }

    useEffect(()=>{
        alert("hello")
    },[])

    useEffect(()=>{
        alert(`'Button Changed' ${ButtonId}`)
    },[ButtonId])

  return (
    <div className='flex items-center justify-center gap-5 w-full'>
        {arry?.map((item)=>(
            <button key={item.id} className='border-2 border-solid border-black rounded w-28 h-10' onClick={()=>handleId(item.name)}>
                {item.name}
            </button>
        ))}
        </div>
  )
}

export default Test