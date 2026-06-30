import UrlBar from "./chrome/url-bar";
import Window from "../../components/window/window";
import { WindowContext } from "../../context/window-context";
import React from "react";
interface Props {
  url: string;
  displayUrl?: string;
}
function Chrome({ url, displayUrl }: Props) {
  const refreshURL = () => {
    const iframe = document?.getElementById(
      "chrome-screen"
    ) as HTMLIFrameElement | null;
    if (iframe) {
      iframe.src += "";
    }
  };
  const appContext = React.useContext(WindowContext);
  if (!appContext) return null;
  const chromeContext = appContext?.windowConfig!["chrome"];
  if (!chromeContext) return null;

  return (
    <div>
      <div className="bg-dark-base">
        <UrlBar onClick={refreshURL} displayUrl={displayUrl} />
      </div>

      <iframe
        src={url}
        className="w-full h-[473px]"
        id="chrome-screen"
        frameBorder="0"
        title="Ubuntu Chrome Url"
      ></iframe>
    </div>
  );
}

export default Chrome;
