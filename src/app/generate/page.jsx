import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center min-h-[80vh]'>
        <div className="despriction text-center text-[2rem] max-w-[700px]">
            <h2>Generate great content with Topic/Domain only</h2>
        </div>
        <div className="input-section flex justify-center items-center mt-5">
            <div className="input">
                <input className='max-w-[570px] p-2 border-r-8 border-[#f7c520] border-[1px]' type='text' placeholder='Enter Topic for content' />
            </div>
            <div className="btn p-2">
                <button className='bg-[#f7c520] p-2 rounded-md'>Generate</button>
            </div>
        </div>
    </div>
  )
}

export default page