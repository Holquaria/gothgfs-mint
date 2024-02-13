import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import divider from "../../public/div.png";
import configuratorStyles from "../../styles/configurator/configurator.module.scss";
import styles from "../../styles/mintgoth/mintgoth.module.scss";
import { traits } from "./traits";
import { generateGoth } from "./generate-img";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const categories = Object.keys(traits).reverse();

const blacklist = ["Eyes Base", "Base"];
const selectableCategories = categories.filter((c) => !blacklist.includes(c));

const downloadImage = (src) => {
  var a = document.createElement("a");
  a.href = src;
  a.download = `goth-gf.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
export default function Configurator() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const ref = useRef(null);
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

  const onSubmit = async () => {
    setIsInitialLoad(false);
    setLoading(true);
    document.body.style.cursor = "wait";
    const layers = [];
    for (const category of selectableCategories) {
      const randomLayer = getRandomLayer(traits[category], category);
      layers.push(randomLayer);
    }
    await generateGoth(layers).then((b64) => {
      // ref.current.src = b64;
      setImgSrc(b64);
      document.body.style.cursor = "unset";
    });
    setLoading(false);
  };

  useEffect(() => {}, [ref]);

  return (
    <div className={styles.background}>
      <div>
        <div className={styles.container + " " + configuratorStyles.container}>
          <div style={{ transform: "scaleY(-1)", padding: "25px" }}>
            <Image
              className={styles.image}
              width={500}
              height={107}
              src={divider}
              alt="divider"
            />
          </div>
          <div style={{ marginBottom: "1rem 0 2rem", background: "white" }}>
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
            ) : (<></>)}
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
            ) : (<></>)}
          </div>

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
            {imgSrc && (
              <button
                type="submit"
                onClick={() => downloadImage(imgSrc)}
                style={{ background: "#cac6cb", display: "block" }}
              >
                Download
              </button>
            )}
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
        </div>
      </div>
    </div>
  );
}
