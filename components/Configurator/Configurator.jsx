import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import divider from "../../public/div.png";
import configuratorStyles from "../../styles/configurator/configurator.module.scss";
import styles from "../../styles/mintgoth/mintgoth.module.scss";
import traits from "./traits";
import { generateGoth } from "./generate-img";
import { useForm } from "react-hook-form";

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
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const ref = useRef(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (e) => {
    setLoading(true);
    document.body.style.cursor = "wait";
    const mapped = Object.keys(e)
      .map((key) => ({
        trait_type: key,
        value: e[key],
      }))
      .filter((t) => t.value !== "None");
    await generateGoth(mapped).then((b64) => {
      ref.current.src = b64;
      setImgSrc(b64);
      document.body.style.cursor = "unset";
    });
    setLoading(false);
  };

  const getOptions = (category) => {
    // console.log(traits[category])
    if (!traits[category]) {
      return;
    }
    const keys = Object.keys(traits[category]);
    // console.log(keys)
    return (
      <>
        <option value="None">None</option>
        {keys.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </>
    );
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={ref}
              className={styles.image}
              width={300}
              height={300}
              src="/goths.gif"
              alt="Save Goth"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
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
                type="submit"
                style={{ background: "#cac6cb", display: "block" }}
              >
                Submit
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
            <div className={configuratorStyles["form-grid"]}>
              {selectableCategories.map((category) => {
                return (
                  <div
                    key={category}
                    className={configuratorStyles["flex-col"]}
                  >
                    <label
                      htmlFor={category}
                      className={configuratorStyles.label}
                    >
                      {category}
                    </label>
                    <select {...register(category)} name={category}>
                      {getOptions(category)}
                    </select>
                  </div>
                );
              })}
            </div>
          </form>
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
