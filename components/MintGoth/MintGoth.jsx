import Image from "next/image";
import styles from "../../styles/mintgoth/mintgoth.module.scss";
import { useState, useEffect, useRef, useMemo } from "react";
import Logo from "../../public/logotrans.png";
import SaveGoth from "../../public/savegoth1.gif";
import SaveGoth2 from "../../public/savegoth2.gif";
import goths from "../../public/goths.gif";
import divider from "../../public/div.png";
import mintgf from "../../public/mintgf.jpeg";
import teamgf from "../../public/teamgf.jpeg";
import aboutgf from "../../public/abouthgf.jpeg";
import roadgf from "../../public/roadgf.jpeg";
import roadmap from "../../public/roadmap.jpeg";
import pharaox from "../../public/pharaox.jpeg";
import noface from "../../public/noface.jpeg";
import hecreative from "../../public/hecreative.jpeg";
import alice from "../../public/alice.jpeg";
import bulma from "../../public/bulma.jpeg";
import luke from "../../public/luke.jpeg";
import myspace from "../../public/myspaceon.gif";
import Countdown from "react-countdown";
import { useWallet } from "@solana/wallet-adapter-react";
//import AnNFT from "../components/AnNFT/AnNFT";
import useCandyMachine from "../../hooks/useCandyMachine";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { CrossMintButton } from "@crossmint/client-sdk-react-ui";

function MintGoth() {
  const {
    isSoldOut,
    mintStartDate,
    isMinting,
    startMint,
    startMintMultiple,
    nftsData,
  } = useCandyMachine();

  const { connected } = useWallet();

  const [isMintLive, setIsMintLive] = useState(false);

  useEffect(() => {
    if (new Date(mintStartDate).getTime() < Date.now()) {
      setIsMintLive(true);
    }
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {/* <Image
          className={styles.image}
          width={400}
          height={161}
          src={Logo}
          alt="logo"
        />
        <div className={styles.save}>
          SAVE YOUR GOTH GF
          <br />
          0.666 SOL
        </div>
        <div style={{ maxWidth: "600px" }}>
          <div className="flex flex-wrap justify-center">
            <a href="#mint" className=" " style={{ width: "300px" }}>
              <Image alt="mint gf" src={mintgf} />
            </a>
            <a href="#roadmap" className=" " style={{ width: "300px" }}>
              <Image alt="mint gf" src={roadgf} />
            </a>
            <a href="#team" className=" " style={{ width: "300px" }}>
              <Image alt="mint gf" src={teamgf} />
            </a>
            <a
              href="https://www.altpress.com/news/goth-gfs-nfts-he-creative-0xnoface/"
              target="_blank"
              rel="noreferrer"
              className=" "
              style={{ width: "300px" }}
            >
              <Image alt="mint gf" src={aboutgf} />
            </a>
          </div>
        </div>
        <div style={{ transform: "scaleY(-1)", padding: "25px" }}>
          <Image
            className={styles.image}
            width={500}
            height={107}
            src={divider}
            alt="divider"
          />
        </div>
        <div>
          <Image
            className={styles.image}
            width={300}
            height={300}
            src={goths}
            alt="Save Goth"
          />
        </div> */}
      
        <div style={{ padding: "24px" }}>
          {connected && (
            <p className="mr-auto text-sm" id="mint">
              <span className="font-bold">Available/Minted/Total:</span>{" "}
              {nftsData.itemsRemaining}/{nftsData.itemsRedeemed}/
              {nftsData.itemsAvailable}
            </p>
          )}
        </div>
        <div>
          <div className="flex flex-col items-start justify-center w-11/12 my-10">
            {connected ? (
              <>
                {new Date(mintStartDate).getTime() < Date.now() ? (
                  <>
                    {isSoldOut ? (
                      <p style={{ fontSize: "24px", lineHeight: "35px" }}>
                        LAUNCH TBD LOSER
                      </p>
                    ) : (
                      <>
                        <div className="flex flex-col w-1/2" style={{width: '100%'}}>
                          <h1 className="mb-10 text-3xl font-bold">Mint</h1>
                          <button
                            onClick={startMint}
                            disabled={isMinting}
                            className="px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600"
                          >
                            {isMinting ? "loading" : "RELEASE YOUR GOTH"}
                          </button>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <Countdown
                    date={mintStartDate}
                    onMount={({ completed }) =>
                      completed && setIsMintLive(true)
                    }
                    onComplete={() => setIsMintLive(true)}
                  />
                )}
              </>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ lineHeight: "22px", padding: "24px" }}>
                  CONNECT WALLET TO MINT
                </p>
                <WalletMultiButton />
              </div>
            )}
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem'}}>
              <CrossMintButton
                collectionTitle="Goth Girlfriends"
                collectionPhoto=""
                collectionDescription=""
              />
            </div>
          </div>
        </div>
        <div style={{ padding: "25px" }}>
          <Image
            className={styles.image}
            width={500}
            height={107}
            src={divider}
            alt="divider"
          />
        </div>
        {/* <div>
          <Image
            className={styles.image}
            width={300}
            height={300}
            src={SaveGoth}
            alt="Save Goth"
          />
        </div>
        <div className={styles.description}>
          Once upon a time there was an evil man called Mot who built a website
          called gothspace.
          <br />
          knowing that no one ever reads the terms and conditions on these sites
          he included a clause where goth girls gave up their souls in order to
          use the site
          <br />
          they became trapped, but now he is sick of their company. he is
          willing to free them, but only if you cough up your SOL, 0.666 of it
          in fact
          <br />
          will you save the goth gfs?
        </div>
        <div>
          <Image
            className={styles.image}
            width={300}
            height={300}
            src={SaveGoth2}
            alt="Save Goth2"
          />
        </div>
        <div className={styles.save} id="roadmap">
          ROADMAP
        </div>
        <div>
          <Image className={styles.image} src={roadmap} alt="roadmap" />
        </div>
        <div className={styles.save} id="team">
          TEAM
        </div>
        <div className="flex self-start w-full flex-col">
          <div className="w-full bg-yellow-50 text-left p-1" id="team">
            GOTH GFS FRIEND SPACE
          </div>
          <div className="text-left pl-1.5 pt-1.5 text-white text-sm">
            GOTH GFS has <span className="text-red-600">10,000</span> Friends
          </div>

          <div
            className="flex flex-wrap self-center my-1.5 justify-evenly"
            style={{ maxWidth: "600px" }}
          >
            <div
              href="#mint"
              className="flex flex-col"
              style={{ width: "180px" }}
            >
              <Image alt="pharaox" src={noface} />
              <span className="pt-1.5">No Face</span>
              <span style={{ width: "80px", margin: "0 auto" }}>
                <Image alt="mypsace" src={myspace} />
              </span>
            </div>
            <div
              href="#mint"
              className="flex flex-col"
              style={{ width: "180px" }}
            >
              <Image alt="pharaox" src={hecreative} />
              <span className="pt-1.5">HE Creative</span>
              <span style={{ width: "80px", margin: "0 auto" }}>
                <Image alt="mypsace" src={myspace} />
              </span>
            </div>
            <div
              href="#mint"
              className="flex flex-col"
              style={{ width: "180px" }}
            >
              <Image alt="pharaox" src={alice} />
              <span className="pt-1.5">Alice</span>
              <span style={{ width: "80px", margin: "0 auto" }}>
                <Image alt="mypsace" src={myspace} />
              </span>
            </div>
            <div
              href="#mint"
              className="flex flex-col"
              style={{ width: "180px" }}
            >
              <Image alt="pharaox" src={pharaox} />
              <span className="pt-1.5">Pharaox</span>
              <span style={{ width: "80px", margin: "0 auto" }}>
                <Image alt="mypsace" src={myspace} />
              </span>
            </div>
            <div
              href="#mint"
              className="flex flex-col"
              style={{ width: "180px" }}
            >
              <Image alt="pharaox" src={luke} />
              <span className="pt-1.5">Luke</span>
              <span style={{ width: "80px", margin: "0 auto" }}>
                <Image alt="mypsace" src={myspace} />
              </span>
            </div>
            <div
              href="#mint"
              className="flex flex-col"
              style={{ width: "180px" }}
            >
              <Image alt="pharaox" src={bulma} />
              <span className="pt-1.5">Bulma</span>
              <span style={{ width: "80px", margin: "0 auto" }}>
                <Image alt="mypsace" src={myspace} />
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MintGoth;
