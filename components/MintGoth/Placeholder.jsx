import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import divider from "../../public/div.png";
import configuratorStyles from "../../styles/configurator/configurator.module.scss";
import styles from "../../styles/mintgoth/mintgoth.module.scss";
import SaveGoth2 from "../../public/savegoth2.gif";


export default function Configurator() {
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const ref = useRef(null);




  return (
    <div className={styles.background}>
        <div className={styles.container}>
            
            <div className={styles.save}>
          SAVE YOUR GOTH GF
          <br />
          <div>
          <Image
            className={styles.image}
            width={300}
            height={300}
            src={SaveGoth2}
            alt="Save Goth2"
          />
        </div>
            <h1>COMING SOON</h1>
        </div>
        </div>
    </div>
  );
}
