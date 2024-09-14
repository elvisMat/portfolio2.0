import React from 'react'
import UrlBar from './chrome/url-bar'
interface Props { url: string, displayUrl?: string }
function Chrome({ url, displayUrl }: Props) {
  return (
    <div>
      <div className="bg-dark-base">
        <UrlBar displayUrl={displayUrl} />
      </div>
      <iframe src={url} className="w-full h-[473px]" id="chrome-screen" frameBorder="0" title="Ubuntu Chrome Url"></iframe>
    </div>
  )
}

export default Chrome