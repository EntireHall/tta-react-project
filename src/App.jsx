import React from 'react'

function App() {
  return (
<div className='flex justify-center items-center mt-10 flex-wrap'>
    <div className='grid grid-col-2 border-2 border-neutral-700 max-w-[80%]'>

            {/*Upper section*/ }

      <div className=' flex  justify-around gap-[40%] text-center items-center flex-wrap'>
        <div className='border-r-2 p-6 border-neutral-700 pr-48'>Lorem ipsum </div>
        <div className=' '>Link1</div>
      </div>

               {/*Mid Section */ }

      <div className='grid  border-y-2 grid-cols-2 border-neutral-700 flex-wrap'>
        <div className='flex justify-center border-r-2 border-neutral-700 py-40 px-10 text-justify'>This is some content Aligned in the center vertically and horizontally</div>

      </div>

                   {/*Footer Section */ }

      <div className='pb-40 flex justify-start items-start pl-20 pt-10 flex-wrap'>THis is the footer contetnt which is aligned in the left</div>

    </div>
    </div>
  )
}

export default App
