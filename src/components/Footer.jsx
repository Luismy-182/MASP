import React from 'react'

function Footer() {
  const year=new Date().getFullYear();
  return (
    <div className="">
      <div className="text-center p-5 text-slate-600 font-light">@{year} MASP - Ingeniería web orientada a rendimiento y escalabilidad.</div>
    </div>
  )
}

export default Footer