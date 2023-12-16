import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center min-h-[80vh] bg-black'>
        <div className="despriction text-center text-[2rem] max-w-[700px]">
            <h2 className='text-white mt-5'>Generate great content with Topic/Domain only</h2>
        </div>
        <div className="input-section flex justify-center items-center mt-5">
            <div className="input ">
                <input className=' p-2  border-[#f7c520] border-[1px] rounded-b-md rounded-t-md active:border-[2px] active:border-[#f7c520]' type='text' placeholder='Enter Topic for content' />
            </div>
            <div className="btn p-2">
                <button className='bg-[#f7c520] p-2 rounded-md'>Generate</button>
            </div>
        </div>

        <div class="h-screen w-[90%] mt-8 text-white">
   <div class="grid grid-cols-2 grid-rows-3 md:grid-rows-4 md:grid-cols-4 gap-2 md:gap-4 h-screen">
      <div class="bg-slate-600 col-span-3 md:col-span-2 rounded-b-md rounded-t-md border-2 border-yellow-300 ">
         <span className='pl-1 pt-1 text-lg'>Title</span>
         <p className='w-100 h-auto text-sm pl-1 ' >Text</p>
      </div>
      <div class="bg-slate-600 rounded-b-md rounded-t-md border-2 border-yellow-300 col-span-1 md:col-span-2 row-span-1 md:row-span-2">
         <span className='pl-1 pt-1 text-lg'>Video Script</span>
         <p className='w-100 h-auto text-sm pl-1' >Text</p>
      </div>
      <div class="bg-slate-600 rounded-b-md rounded-t-md border-2 border-yellow-300 col-span-1 md:col-span-2">
         <span className='pl-1 pt-1 text-lg'>Description</span>
         <p className='w-100 h-auto text-sm pl-1' >Text</p>
      </div>
      <div class="bg-slate-600 rounded-b-md rounded-t-md border-2 border-yellow-300">
         <span className='pl-1 pt-1 text-lg'>Keywords</span>
         <p className='w-100 h-auto text-sm pl-1' >#Text</p>
      </div>
      <div class="bg-slate-600 rounded-b-md rounded-t-md border-2 border-yellow-300">
         <span className='pl-1 pt-1 text-lg'>Unlock Full Access ✨</span>
         <p className='w-100 h-auto text-sm pl-1' >Text</p>
      </div>
      <div class="bg-slate-600 rounded-b-md rounded-t-md border-2 border-yellow-300 col-span-1 md:col-span-2">
         <span className='pl-1 pt-1 text-lg'>Thumbnail</span>
         <p className='w-100 h-auto text-sm pl-1' >Text</p>
      </div>
   </div>
</div>

    </div>
  )
}

export default page