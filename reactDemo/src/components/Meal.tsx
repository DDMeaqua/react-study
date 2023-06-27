import React from 'react'

export default function Meal() {
  return (
    <div className='flex justify-between p-4 m-2'>
      <div className='w-1/4'>
        <img src="../../public/img/1.png" alt="" />
      </div>
      <div>
        <h1>汉堡</h1>
        <p>美味的汉堡</p>
        <div className='flex justify-between'>
          <span>$12</span>
          <div>数量</div>
        </div>
      </div>

    </div>
  )
}
