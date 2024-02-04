import Head from "next/head";
import Image from "next/image";
import { useState, useRef } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import useWalletBalance from "../hooks/useWalletBalance";
// import { useWallet } from "@solana/wallet-adapter-react";
import { Toaster } from "react-hot-toast";
import * as React from "react";
import styles from "../styles/win98/taskbar.module.scss";
import run from "../public/mint.png";
import paint from "../public/paint.gif";
import notepad from "../public/notepad.ico";
import fire from "../public/fire.gif";
import winampLogo from "../public/winamp-logo.png";
import computer from "../public/computer.ico";
import userImg from "../public/users.png";
import discord from "../public/discord-og.png";
import twitter from "../public/twitter-og.png";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";
import WindowFrame from "../components/WindowFrame/WindowFrame";
import MintGoth from "../components/MintGoth/MintGoth";
import Placeholder from "../components/MintGoth/Placeholder"
import ExclusiveContent from "../components/ExclusiveContent/ExclusiveContent";
import MYNOTEPAD from "../components/WindowsApps/Notepad";
import Winamp from "../components/Winamp/Winamp";
import Paint from "../components/WindowsApps/Paint";
import Configurator from "../components/Configurator/Configurator";
// import MyGoths from '../components/MyGoths/MyGoths';

function Boot() {
  const dropdownRef = useRef();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const openTaskbar = () => {
    setIsActive(!isActive);
  };

  // const [balance] = useWalletBalance();

  // const { connected } = useWallet();
  
  const [totalWindows, addWindow] = useState({
    MY_COMPUTER: {
      opened: false,
      minimized: false,
      label: "My Computer",
      icon: computer,
      mockPath: "goth://computer",
      zIndex: 0,
    },
    MY_MINT: {
      opened: false,
      minimized: false,
      label: "Mint My Goth GF",
      icon: run,
      mockPath: "https://goth.mint/",
      zIndex: 0,
    },
    EXCLUSIVE_CONTENT: {
      opened: false,
      minimized: false,
      label: "Exclusive Access",
      icon: "/calendar-1.png",
      mockPath: "https://goth.mint/specials",
      zIndex: 0,
    },
    NOTEPAD: {
      opened: false,
      minimized: false,
      label: "NOTEPAD",
      icon: notepad,
      mockPath: "",
      zIndex: 0,
    },
    PAINT: {
      opened: false,
      minimized: false,
      label: "PAINT",
      icon: paint,
      mockPath: "",
      zIndex: 0,
    },
    CONFIGURATOR: {
      opened: false,
      minimized: false,
      label: "CONFIGURATOR",
      icon: userImg,
      mockPath: "",
      zIndex: 0,
    },
    WINAMP: {
      opened: false,
      minimized: false,
      label: "WINAMP",
      icon: winampLogo,
      mockPath: "",
      zIndex: 0,
    },
  });

  const openWindow = (title, exit = false) => {
    if (exit) {
      console.log("exiting window");
      return addWindow((prevState) => ({
        ...prevState,
        [title]: {
          ...prevState[title],
          minimized: false,
          opened: false,
        },
      }));
    }

    if (totalWindows[title].opened) {
      console.log("opened already, minimizing");
      return addWindow((prevState) => ({
        ...prevState,
        [title]: {
          ...prevState[title],
          minimized: !prevState[title].minimized,
        },
      }));
    }

    return addWindow((prevState) => ({
      ...prevState,
      [title]: {
        ...prevState[title],
        opened: !prevState[title].opened,
      },
    }));
  };

  /**
   *
   */

  const taskbarTabs = () => {
    const totalTabs = Object.entries(totalWindows).map((windows) => {
      if (windows[1].opened) {
        return (
          <button
            key={windows[1].label}
            className={styles.taskbar_window}
            onClick={() => openWindow(windows[0])}
          >
            <div className={styles.taskbar_icon}>
              <Image
                width={16}
                height={16}
                src={windows[1].icon}
                alt={windows[1].label}
              />
            </div>
            <div className={styles.taskbar_text}>{windows[1].label}</div>
          </button>
        );
      }
    });

    return <>{totalTabs}</>;
  };

  React.useEffect(() => {
    if (window.location.pathname === '/events') {
      openWindow('EXLUSIVE_CONTENT')
    }
  }, [])

  return (
    <>
      <Head>
        <title>GOTH GF</title>
        <meta name="description" content="GOTH GIRLFRIEND NFT MINT " />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="https://unpkg.com/98.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <Toaster />
        <div className={styles.desktop}>
          <div
            className={styles.icon}
            onClick={() => openWindow("MY_COMPUTER")}
          >
            <Image width={32} height={32} src={computer} alt="comp" />
            <div className={styles.textContainer}>
              <div className={styles.text}>MY COMPUTER</div>
            </div>
          </div>
          {/* <div
            className={styles.icon}
            onClick={() => openWindow("EXCLUSIVE_CONTENT")}
          >
            <div style={{ margin: "7px" }}>
              {" "}
              <Image width={32} height={32} src="/calendar-1.png" alt="comp" />
            </div>
            <div className={styles.text + " text-white text-center"}>
              EXCLUSIVE ACCESS
            </div>
          </div> */}
          <div className={styles.icon} onClick={() => openWindow("MY_MINT")}>
            <Image width={32} height={32} src={run} alt="comp" />
            <div className={styles.textContainer}>
              <div className={styles.text + ""}>MINT MY GOTH</div>
            </div>
          </div>
          <div className={styles.icon} onClick={() => openWindow("NOTEPAD")}>
            <Image width={32} height={32} src={notepad} alt="notepad" />
            <div className={styles.textContainer}>
              <div className={styles.text}>NOTEPAD</div>
            </div>
          </div>
          <div className={styles.icon} onClick={() => openWindow("PAINT")}>
            <Image width={32} height={32} src={paint} alt="paint" />
            <div className={styles.textContainer}>
              <div className={styles.text}>PAINT</div>
            </div>
          </div>
          {/* <div
            className={styles.icon}
            onClick={() => openWindow("CONFIGURATOR")}
          >
            <Image width={32} height={32} src={userImg} alt="paint" />
            <div className={styles.textContainer}>
              <div className={styles.text}>CONFIGURATOR</div>
            </div>
          </div> */}
          <div
            className={styles.icon}
            onClick={() => openWindow("WINAMP", totalWindows.WINAMP.opened)}
          >
            <Image width={32} height={32} src={winampLogo} alt="paint" />
            <div className={styles.textContainer}>
              <div className={styles.text}>WINAMP</div>
            </div>
          </div>
          <a
            className={styles.icon}
            href="https://discord.gg/m4sNZV76EB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={32} height={32} src={discord} alt="paint" />
            <div className={styles.textContainer}>
              <div className={styles.text}>DISCORD</div>
            </div>
          </a>
          <a
            className={styles.icon}
            href="https://twitter.com/gothygfs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={32} height={32} src={twitter} alt="paint" />
            <div className={styles.textContainer}>
              <div className={styles.text}>TWITTER</div>
            </div>
          </a>
          {/* <WalletMultiButton /> */}
        </div>

        {totalWindows.MY_COMPUTER.opened && (
          <WindowFrame
            id={totalWindows.MY_COMPUTER}
            toggleWindow={() => openWindow("MY_COMPUTER")}
            exitWindow={() => openWindow("MY_COMPUTER", true)}
            title={"My Computer"}
            content={<Placeholder />}
          />
        )}
        {totalWindows.MY_MINT.opened && (
          <WindowFrame
            id={totalWindows.MY_MINT}
            toggleWindow={() => openWindow("MY_MINT")}
            exitWindow={() => openWindow("MY_MINT", true)}
            title={"Mint my Goth GF"}
            content={<Placeholder />}
          />
        )}
        {totalWindows.EXCLUSIVE_CONTENT.opened && (
          <WindowFrame
            id={totalWindows.EXCLUSIVE_CONTENT}
            toggleWindow={() => openWindow("EXCLUSIVE_CONTENT")}
            exitWindow={() => openWindow("EXCLUSIVE_CONTENT", true)}
            title={"Exclusive Access"}
            content={<ExclusiveContent />}
          />
        )}
        {totalWindows.NOTEPAD.opened && (
          <WindowFrame
            id={totalWindows.NOTEPAD}
            hidePath
            toggleWindow={() => openWindow("NOTEPAD")}
            exitWindow={() => openWindow("NOTEPAD", true)}
            title={"Notepad"}
            content={<MYNOTEPAD />}
          />
        )}
        {totalWindows.PAINT.opened && (
          <WindowFrame
            id={totalWindows.PAINT}
            hidePath
            toggleWindow={() => openWindow("PAINT")}
            exitWindow={() => openWindow("PAINT", true)}
            title={"PAINT"}
            content={<Paint />}
          />
        )}
        {totalWindows.CONFIGURATOR.opened && (
          <WindowFrame
            id={totalWindows.CONFIGURATOR}
            hidePath
            toggleWindow={() => openWindow("CONFIGURATOR")}
            exitWindow={() => openWindow("CONFIGURATOR", true)}
            title={"CONFIGURATOR"}
            content={<Configurator />}
          />
        )}
        <Winamp
          closeWindow={() => openWindow("WINAMP", true)}
          closed={!totalWindows.WINAMP.opened}
        />
        {/* <MyGoths/> */}
      </div>
      <div className={styles.taskbar}>
        <div
          ref={dropdownRef}
          className={`${styles.startMenu} ${
            isActive ? styles.active : styles.inactive
          }`}
        >
          {/* <div className={styles.walletStatus}>
            <header>
              {connected ? (
                <div className="flex items-end mr-2">
                  <p className="text-xs text-black"></p>
                  <p className="mx-1 font-bold text-purple-600 leading-none">
                    {balance.toFixed(2)}
                  </p>
                  <p
                    className="font-bold leading-none text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, #00FFA3, #03E1FF, #DC1FFF)`,
                    }}
                  >
                    SOL
                  </p>
                </div>
              ) : (
                <span>NOT CONNECTED</span>
              )}
            </header>
            <WalletMultiButton />
          </div> */}
          <div className={styles.startMenuItems}>
            <section className={styles.menuCont}>
              <div
                className={styles.item}
                onClick={() => openWindow("MY_COMPUTER")}
              >
                <div style={{ margin: "7px" }}>
                  {" "}
                  <Image width={16} height={16} src={computer} alt="comp" />
                </div>
                <div className={styles.texts}>My Computer</div>
              </div>
              <div
                className={styles.item}
                onClick={() => openWindow("MY_MINT")}
              >
                <div style={{ margin: "7px" }}>
                  {" "}
                  <Image width={16} height={16} src={run} alt="comp" />
                </div>
                <div className={styles.texts}>Mint my Goth</div>
              </div>
              {/* <div
                className={styles.item}
                onClick={() => openWindow("EXCLUSIVE_CONTENT")}
              >
                <div style={{ margin: "7px" }}>
                  {" "}
                  <Image
                    width={16}
                    height={16}
                    src="/calendar-1.png"
                    alt="comp"
                  />
                </div>
                <div className={styles.texts}>Exlusive Access</div>
              </div> */}
              <div
                className={styles.item}
                onClick={() => openWindow("NOTEPAD")}
              >
                <div style={{ margin: "7px" }}>
                  {" "}
                  <Image width={16} height={16} src={notepad} alt="comp" />
                </div>
                <div className={styles.texts}>Notepad</div>
              </div>
              <div className={styles.item} onClick={() => openWindow("PAINT")}>
                <div style={{ margin: "7px" }}>
                  {" "}
                  <Image width={16} height={16} src={paint} alt="comp" />
                </div>
                <div className={styles.texts}>Paint</div>
              </div>
              <div
                className={styles.item}
                onClick={() => openWindow("CONFIGURATOR")}
              >
                <div style={{ margin: "7px" }}>
                  {" "}
                  <Image width={16} height={16} src={userImg} alt="comp" />
                </div>
                <div className={styles.texts}>Configurator</div>
              </div>
              <div className={styles.item} onClick={() => openWindow("WINAMP")}>
                <div style={{ margin: "7px" }}>
                  {" "}
                  <Image width={16} height={16} src={winampLogo} alt="comp" />
                </div>
                <div className={styles.texts}>Winamp</div>
              </div>

              <a
                className={styles.item}
                href="https://discord.gg/m4sNZV76EB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ margin: "7px" }}>
                  <Image width={16} height={16} src={discord} alt="comp" />
                </span>
                <div className={styles.texts}>Discord</div>
              </a>

              <a
                className={styles.item}
                href="https://twitter.com/gothygfs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ margin: "7px" }}>
                  <Image width={16} height={16} src={twitter} alt="comp" />
                </span>
                <div className={styles.texts}>Twitter</div>
              </a>
            </section>
          </div>
        </div>
        <button
          className={styles.start}
          ref={dropdownRef}
          onClick={openTaskbar}
        >
          <Image width={16} height={16} src={fire} alt="fire" />
          <div
            className="leading-none text-transparent bg-clip-text"
            style={{
              margin: "-6px",
              zIndex: "1",
              color: "#FFFFFF",
              backgroundImage:
                "linear-gradient(to bottom right, #000000, #e91616, #36083e)",
            }}
          >
            START
          </div>
          <Image width={16} height={16} src={fire} alt="fire" />
        </button>
        <div className={styles.divbar}>
          <div></div>
          <div></div>
        </div>
        {taskbarTabs()}
      </div>
    </>
  );
}

export default Boot;
