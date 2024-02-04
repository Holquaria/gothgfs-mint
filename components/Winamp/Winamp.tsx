import { useCallback, useEffect, useRef, useState } from "react";

function useHookWithRefCallback() {
  const ref = useRef(null)
  const setRef = useCallback(node => {
    ref.current = node
  }, [])
  
  return [ref as any, setRef]
}

export default function Winamp ({closed, closeWindow}: {closed: boolean, closeWindow: any}) {
  const [ref, setRef] = useHookWithRefCallback();
  const [rendered, setRendered] = useState(false);
  const [winamp, setWinamp] = useState<any>(null);

  useEffect(() => {
    if (ref?.current) {
      if (!winamp) {
        if (!rendered && !closed) {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/webamp';
          document.getElementById('__next')?.append(script);
          setRendered(true);
          script.onload = (res) => {
            // @ts-ignore
            const webamp = new Webamp({
              initialTracks: [{
                metaData: {
                  artist: "Internet",
                  title: "Dial-Up",
                },
                url: "/black-parade.mp3"
              }],
            });
            webamp.play();
            webamp.renderWhenReady(ref?.current);
            setWinamp(webamp);
            webamp.onClose(() => {
              closeWindow();
            })
            webamp.onMinimize(() => {
              closeWindow();
            })
          }
        }
      } else if (!closed) {
        winamp.reopen();
      } else if (closed) {
        winamp.close();
      }
    }
  }, [winamp, closed, rendered]);

  return <div id="winamp" style={{opacity: closed ? 0 : 1 }} ref={setRef}></div>
}