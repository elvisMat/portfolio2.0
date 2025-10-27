import UrlBar from "./chrome/url-bar";
import Window from "../../components/window/window";
import { WindowContext } from "../../context/window-context";
import React from "react";
import { useWindowStateMachine } from "../../hooks/useWindowState";
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
  const chromeContext = appContext?.allWindowConfig!["chrome"];
  if (!chromeContext) return null;

  const { currentState, transition } = useWindowStateMachine("OPEN", "chrome");
  return (
    <Window
      defaultState={currentState}
      {...chromeContext}
      transitionTo={transition}
    >
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
    </Window>
  );
}

export default Chrome;
