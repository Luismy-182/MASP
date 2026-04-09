import React from 'react'

function Footer() {
  const year=new Date().getFullYear();
  return (
    <div className="">
      <div className="text-center p-5 text-slate-600 font-light">@{year} Suarez<span className='text-slate-600 font-semibold'>DevLab</span> - Ingeniería web orientada a rendimiento y escalabilidad.</div>
    </div>
  )
}

export default Footer