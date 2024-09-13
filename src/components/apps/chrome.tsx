import React from 'react'


interface Props { url: string }
function Chrome({ url }: Props) {
  return (
    <div>
      <iframe src={url} className="w-full h-[473px]" id="chrome-screen" frameBorder="0" title="Ubuntu Chrome Url"></iframe>
    </div>
  )
}

export default Chrome