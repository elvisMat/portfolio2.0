import React from 'react'
import UrlBar from './chrome/url-bar'
interface Props { url: string, displayUrl?: string }
function Chrome({ url, displayUrl }: Props) {

  const refreshURL = () => {
    const iframe = document?.getElementById("chrome-screen") as HTMLIFrameElement | null;
    if (iframe) {
      iframe.src += '';
    }
  }
  return (
    <div>
      <div className="bg-dark-base">
        <UrlBar onClick={refreshURL} displayUrl={displayUrl} />
      </div>
      <iframe src={url} className="w-full h-[473px]" id="chrome-screen" frameBorder="0" title="Ubuntu Chrome Url"></iframe>
    </div >
  )
}

export default Chrome