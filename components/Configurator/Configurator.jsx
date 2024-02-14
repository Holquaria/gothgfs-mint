import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import divider from "../../public/div.png";
import configuratorStyles from "../../styles/configurator/configurator.module.scss";
import styles from "../../styles/mintgoth/mintgoth.module.scss";
import { traits } from "./traits";
import { generateGoth } from "./generate-img";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

function randomInteger(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumber);
  return randomNumber;
}

const gothicChatUpLines = [
  "Are you a vampire?\nBecause you've got my heart racing.",
  "Do you believe in love at first bite?\nYou must have been buried in a past life because you've got 'undying love' written all over you.",
  "Are you a ghost?\nBecause you've been haunting my dreams.",
  "Do you have a map?\nBecause I just got lost in your eyes, and now I can't find my way out.",
  "Are you a banshee?\nBecause your screams are music to my ears.",
  "If beauty were time,\nyou'd be an eternity.",
  "Is your name Morticia?\nBecause you're drop dead gorgeous.",
  "Do you have a reflection?\nBecause every time I look at you, I see perfection.",
  "Are you a werewolf?\nBecause when I look into your eyes, I feel a howl coming on.",
  "Do you like graveyards?\nBecause I could spend eternity with you in one.",
  "Is your heart as cold as your touch?\nBecause I'm willing to risk frostbite to hold your hand.",
  "Do you believe in curses?\nBecause I think I've been cursed to be in love with you.",
  "Are you a creature of the night?\nBecause you've bewitched me.",
  "If you were a vampire,\nyou'd have my neck in a heartbeat.",
  "Are you made of darkness?\nBecause every time I'm around you, I feel consumed by your presence.",
  "Do you like dark alleys?\nBecause I'd love to take a moonlit stroll with you in one.",
  "Is it just me, or is it getting colder in here?\nOh wait, that's just your chilling presence.",
  "Are you a ghoul?\nBecause I can't take my eyes off of you, even though it's making my blood run cold.",
  "Do you believe in soulmates?\nBecause I think I've found mine in you.",
  "Are you a vampire slayer?\nBecause you've staked a claim on my heart.",
  "Do you have a taste for danger?\nBecause I'm irresistible to all things forbidden.",
  "Is your love eternal?\nBecause I'd willingly spend forever with you.",
  "Are you a shadow?\nBecause you've been following me in my dreams.",
  "If looks could kill,\nyou'd be the death of me.",
  "Are you a poltergeist?\nBecause you've been haunting my thoughts all night.",
  "Do you like midnight picnics?\nBecause I'd love to share a feast with you under the stars.",
  "Is your love like a ghost?\nBecause it's haunting me day and night.",
  "Are you a witch?\nBecause every time I'm near you, I feel under your spell.",
  "Do you have a graveyard shift?\nBecause I'd stay up all night just to be with you.",
  "Are you a creature of the night?\nBecause I can't seem to resist your dark allure.",
  "If you were a bat,\nI'd let you hang around me anytime.",
  "Are you a fallen angel?\nBecause you've fallen straight into my heart.",
  "Do you like foggy nights?\nBecause I'd love to get lost with you in one.",
  "Is your love cursed?\nBecause I can't escape its enchantment.",
  "Are you a vampire?\nBecause I'm dying to taste your forbidden love.",
  "Do you like haunted houses?\nBecause I'd love to explore one with you, hand in hand.",
  "Are you nocturnal?\nBecause I find myself thinking about you even in the darkest hours of the night.",
  "Is your heart as cold as the grave?\nBecause I'm drawn to it like a moth to flame.",
  "Do you have a dark side?\nBecause I'm drawn to the shadows you cast.",
  "Are you a creature of the night?\nBecause I'm under your spell.",
  "Do you have a pulse?\nBecause mine races every time I see you.",
  "Are you a vampire?\nBecause you've got my blood boiling.",
  "Do you like moonlit walks?\nBecause I'd love to take one with you, forever.",
  "Is your love like a ghost?\nBecause it's haunting me wherever I go.",
  "Are you a banshee?\nBecause every time I hear your voice, it's like music to my ears.",
  "Do you believe in reincarnation?\nBecause I think we've been lovers in past lives.",
  "Are you a vampire?\nBecause I feel like you've sucked all the air out of the room, and I can't breathe.",
  "Do you have a taste for the macabre?\nBecause I find you irresistible.",
  "Is your love cursed?\nBecause I can't seem to escape its spell.",
  "Are you a ghost?\nBecause you've been haunting my thoughts all night long.",
];

const categories = Object.keys(traits).reverse();

const blacklist = ["Eyes Base", "Base"];
const selectableCategories = categories.filter((c) => !blacklist.includes(c));


export default function Configurator() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [lines, setLines] = useState({ line1: "", line2: "" });
  const [error, setError] = useState(false);
  const ref = useRef(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("")
  
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = "generated_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const saveDivAsImage = () => {
    const cardContainer = document.getElementById("cardContainer");
    html2canvas(cardContainer).then((canvas) => {
      const imageData = canvas.toDataURL();
      setGeneratedImage(imageData);
    });
  };

  const getBackgroundImage = () => {
    const number = randomInteger(0, 8)
    function getWordByNumber(number) {
      switch (number) {
        case 0:
          return "Beige";
        case 1:
          return "Galactic";
        case 2:
          return "Green";
        case 3:
          return "Orange";
        case 4:
          return "Pink";
        case 5:
          return "Purple";
        case 6:
          return "Red";
        case 7:
          return "Teal";
        case 8:
          return "Yellow";
        default:
          return "Invalid number";
      }
    }

    const string = getWordByNumber(number)
    setBackgroundImage(`/generator/Background/${string}.png`)
  }

  function getRandomLayer(data, category) {
    let matchedLayer = "None";

    const dataWithRanges = {};
    let lastValue = 0;
    for (const section of Object.keys(data)) {
      if (!dataWithRanges[section]) {
        dataWithRanges[section] = {
          min: lastValue,
          max: data[section] + lastValue,
        };
      }
      lastValue = data[section] + lastValue;
    }

    const random = Math.random();

    for (const section of Object.keys(dataWithRanges)) {
      const range = dataWithRanges[section];
      if (random >= range.min && random <= range.max) {
        matchedLayer = section;
        break;
      }
    }
    return { trait_type: category, value: matchedLayer };
  }

  const generateText = () => {
    const randomNumber = randomInteger(0, 49);
    const chatUpLine = gothicChatUpLines[randomNumber];
    const [setup, punchline] = chatUpLine.split("\n");

    // Set the state lines with keys of line1 and line2
    setLines({ line1: setup, line2: punchline });
  };

  const onSubmit = async () => {
    setGeneratedImage(null);
    setIsInitialLoad(false);
    setError(false);
    setLoading(true);
    document.body.style.cursor = "wait";
    const layers = [];
    for (const category of selectableCategories) {
      const randomLayer = getRandomLayer(traits[category], category);
      layers.push(randomLayer);
    }
    generateText();
    getBackgroundImage();
    await generateGoth(layers)
      .then((b64) => {
        // ref.current.src = b64;
        setImgSrc(b64);
        document.body.style.cursor = "unset";
      })
      .catch((err) => {
        setError(true);
      });
    setLoading(false);
  };

  useEffect(() => {}, [ref]);
  console.log(backgroundImage)

  return (
    <div className={styles.background}>
      <div>
        <div className={styles.container + " " + configuratorStyles.container}>
          {isInitialLoad && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/goths.gif"
              className={styles.image}
              width={300}
              height={300}
              alt="Save Goth"
            />
          )}
          {generatedImage ? (
            <div>
              <img src={generatedImage} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: "0.5rem",
                  margin: "1rem 0",
                }}
              >
                <button
                  style={{ background: "#cac6cb", display: "block" }}
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  Generate
                </button>
                {imgSrc && !generatedImage && !error && (
                  <button
                    type="submit"
                    onClick={saveDivAsImage}
                    style={{ background: "#cac6cb", display: "block" }}
                  >
                    Create Image
                  </button>
                )}
                {generatedImage && (
                  <button
                    type="submit"
                    onClick={downloadImage}
                    style={{ background: "#cac6cb", display: "block" }}
                  >
                    Save Image
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              {!error && (
                <>
                  {!isInitialLoad && (
                    <div
                      className={styles.cardContainer}
                      id="cardContainer"
                      style={{ marginBottom: "1rem 0 2rem" }}
                    >
                      {!isInitialLoad && !loading ? (
                        <p id="cardText" className="cardText">
                          {lines.line1}
                        </p>
                      ) : (
                        <></>
                      )}
                      {!isInitialLoad && !loading ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          ref={ref}
                          src={imgSrc}
                          className={styles.image}
                          width={300}
                          height={300}
                          alt="Save Goth"
                        />
                      ) : (
                        <></>
                      )}
                      {!isInitialLoad && !loading ? (
                        <p id="cardText" className="cardText">
                          {lines.line2}
                        </p>
                      ) : (
                        <></>
                      )}
                      {!isInitialLoad && !loading ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <Image
                          src={backgroundImage}
                          className={styles.backgroundImage}
                          alt="Save Goth"
                          layout="fill"
                        />
                      ) : (
                        <></>
                      )}
                      {!isInitialLoad && loading ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <div
                          style={{
                            width: 328,
                            height: 328,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          Loading...
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  )}
                </>
              )}
              {error && (
                 <div
                 style={{
                   width: 328,
                   height: 328,
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                 }}
               >
                 Please try again
               </div>
              )}
  
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: "0.5rem",
                  margin: "1rem 0",
                }}
              >
                <button
                  style={{ background: "#cac6cb", display: "block" }}
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                >
                  Generate
                </button>
                {imgSrc && !generatedImage && !error && (
                  <button
                    type="submit"
                    onClick={saveDivAsImage}
                    style={{ background: "#cac6cb", display: "block" }}
                  >
                    Create Image
                  </button>
                )}
                {generatedImage && (
                  <button
                    type="submit"
                    onClick={downloadImage}
                    style={{ background: "#cac6cb", display: "block" }}
                  >
                    Save Image
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
  
}
