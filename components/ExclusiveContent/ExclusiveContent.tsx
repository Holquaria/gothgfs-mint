import styles from "../../styles/mintgoth/mintgoth.module.scss";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "../../hooks/useCandyMachine";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import * as metagrab from "solana-nft-metadata";
import { getMeta } from "./get-meta";
import md5 from "md5";
import { useForm } from "react-hook-form";
3;

const isValidEmail = (email: string) =>
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );

const serializeUint8Array = (arr: Uint8Array) =>
  JSON.stringify(new Array(...arr));

function HMAsForm({
  goths,
}: {
  goths: {
    tokenData: any;
    metadata: any;
    mint: string;
  }[];
}) {
  const [hashes, setHashes] = useState<string[]>([]);
  const { publicKey, signMessage } = useWallet();
  const unusedGoths = useMemo(() => {
    return goths.filter((g) => {
      const mintHash = md5(g.mint || "");
      return !hashes.includes(mintHash);
    });
  }, [goths, hashes]);
  const hasBooked = useMemo(() => !unusedGoths.length, [unusedGoths]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const sned = useCallback(
    async ({ name, email }: { name: string; email: string }) => {
      if (!signMessage) {
        return alert("Wallet not supported!");
      }
      const message = `Please sign this message so we know you are you.`;
      const encodedMessage = new TextEncoder().encode(message);
      const signedMessage = await signMessage!(encodedMessage);
      const emailRes = await fetch(`/api/send-mail`, {
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          gig: "hmas",
          signedMessage: serializeUint8Array(signedMessage),
          publicKey: serializeUint8Array(publicKey!.toBytes()),
        }),
      });
      if (emailRes.status !== 200) {
        return alert(`An error occured!`);
      }
      const mintHash = md5(unusedGoths[0].mint);
      const setCounterRes = await fetch("/api/set-counter", {
        method: "POST",
        body: JSON.stringify({
          addyHash: mintHash,
          gig: "hmas",
          name,
        }),
      });

      if (setCounterRes.status !== 200) {
        return alert(`An error occured!`);
      }

      const { id } = await setCounterRes.json();

      alert(`We received your details!. Check email for confirmation!

(ID: ${id})`);
      setHashes([...hashes, mintHash]);
      setValue("name", "");
      setValue("email", "");
    },
    [hashes, goths]
  );

  const handleEmailValidation = (email: string) => {
    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };

  useEffect(() => {
    (async () => {
      const { hashes: fetchedHashes } = await fetch(
        `/api/get-counter?event=hmas`
      ).then((res) => res.json());
      setHashes(fetchedHashes || []);
    })();
  }, []);

  return (
    <>
      <div className="mb-6">
        <Image
          src="/hmas.jpg"
          width={1638 / 4}
          height={2048 / 4}
          alt="Heavy Music Awards"
        />
      </div>
      <div className="hidden grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4"></div>
      <h2 className="my-3 text-2xl">
        Get 2 tickets for the Heavy Music Awards
      </h2>
      <h2 className="my-3 text-2xl">June 5th</h2>
      <form
        style={{
          display: "grid",
          gridAutoColumns: "1fr",
          gap: "0.5rem",
          minWidth: 300,
        }}
        onSubmit={handleSubmit(sned)}
      >
        <label htmlFor="name">Pseudonym/Alias</label>
        <input
          className="pl-3"
          disabled={hasBooked || hashes.length >= 20}
          type="name"
          {...register("name", {
            required: true,
          })}
        />
        <label htmlFor="email">Email</label>
        <input
          className="pl-3"
          disabled={hasBooked || hashes.length >= 20}
          type="email"
          {...register("email", {
            required: true,
            validate: handleEmailValidation,
          })}
        />
        {errors.email && <div className="error">Need dis!</div>}
        <button disabled={hasBooked || hashes.length >= 20} type="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
}
function SlamDunkForm({ goths }: { goths: any }) {
  const [counter, setCounter] = useState<Record<string, string[]>>({
    "slam-dunk-3-6": [],
    "slam-dunk-4-6": [],
  });
  const { publicKey, signMessage } = useWallet();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const unusedGoths = useMemo(() => {
    return goths.filter((g: any) => {
      const mintHash = md5(g.mint);
      return !(counter[getValues()?.gig] || "").includes(mintHash);
    });
  }, [goths, counter, getValues]);

  useEffect(() => {
    (async () => {
      const updatedObj = { ...counter };
      const events = Object.keys(counter);
      for (const event of events) {
        const { hashes: fetchedHashes } = await fetch(
          `/api/get-counter?event=${event}`
        ).then((res) => res.json());
        updatedObj[event] = fetchedHashes || [];
      }
      setCounter(updatedObj);
    })();
  }, []);

  const sned = useCallback(
    async ({
      name,
      gig,
      email,
    }: {
      name: string;
      gig: string;
      email: string;
    }) => {
      if (!signMessage) {
        return alert("Wallet not supported!");
      }
      const message = `Please sign this message so we know you are you.`;
      const encodedMessage = new TextEncoder().encode(message);
      const signedMessage = await signMessage!(encodedMessage);
      const emailRes = await fetch(`/api/send-mail`, {
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          gig,
          signedMessage: JSON.stringify(new Array(...signedMessage)),
          publicKey: JSON.stringify(new Array(...publicKey!.toBytes())),
        }),
      });
      if (emailRes.status !== 200) {
        return alert(`An error occured!`);
      }

      const hash = md5(unusedGoths[0].mint);

      const setCounterRes = await fetch("/api/set-counter", {
        method: "POST",
        body: JSON.stringify({
          addyHash: hash,
          gig,
          name,
        }),
      });
      if (setCounterRes.status !== 200) {
        return alert(`An error occured!`);
      }

      const { id } = await setCounterRes.json();
      setValue("email", "");
      setValue("name", "");
      alert(`We received your details!. Check email for confirmation!

(ID: ${id})`);

      counter![gig].push(hash);
      setCounter({
        ...counter,
      });
    },
    [counter]
  );

  const handleEmailValidation = (email: string) => {
    return isValidEmail(email);
  };

  const hasBooked = useMemo(() => !unusedGoths.length, [unusedGoths]);
  return (
    <>
      <div className="mb-6">
        <Image
          src="/slamdunk.jpeg"
          width={1080 / 3}
          height={1350 / 3}
          alt="Slam Dunk"
        />
      </div>
      <div className="hidden grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4"></div>
      <h2 className="my-3 text-2xl">Get tickets for the Slam Dunk Festival</h2>
      {counter["slam-dunk-3-6"].length >= 30 &&
        counter["slam-dunk-4-6"].length >= 30 && (
          <div>
            <h2 className="my-3 text-3xl">All Taken!</h2>
          </div>
        )}
      <form
        style={{
          display: "grid",
          gridAutoColumns: "1fr",
          gap: "0.5rem",
          minWidth: 300,
        }}
        onSubmit={handleSubmit(sned)}
      >
        <label htmlFor={"gig"}>Select the gig</label>
        <select disabled={hasBooked} className="pl-3" {...register("gig")}>
          {[
            ["slam-dunk-3-6", "Slam Dunk Festival North - 3rd June"],
            ["slam-dunk-4-6", "Slam Dunk Festival South - 4th June"],
          ].map(([e, g]) => (
            <option disabled={counter[e].length >= 30} key={e} value={e}>
              {counter[e].length >= 30 ? `ALL TAKEN - ${g}` : g}
            </option>
          ))}
        </select>
        <label htmlFor="name">Pseudonym/Alias</label>
        <input
          className="pl-3"
          disabled={hasBooked}
          type="name"
          {...register("name", {
            required: true,
          })}
        />
        <label htmlFor="email">Email</label>
        <input
          className="pl-3"
          disabled={hasBooked}
          type="email"
          {...register("email", {
            required: true,
            validate: handleEmailValidation,
          })}
        />
        {errors.email && <div className="error">Need dis!</div>}
        <button disabled={hasBooked} type="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
}

function ExclusiveContent() {
  const { connection } = useCandyMachine();
  const { publicKey, connected } = useWallet();
  const [loading, setLoading] = useState(false);
  const [goths, setGoths] = useState<
    {
      tokenData: any;
      metadata: any;
      mint: string;
    }[]
  >([]);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   setValue,
  // } = useForm();

  // useEffect(() => {
  //   (async () => {
  //     const gigRef = collection(db, "gigs");
  //     const gigs_: string[] = [];
  //     (await getDocs(gigRef)).forEach((g) => {
  //       gigs_.push(g.data().name);
  //     });
  //     setGigs(gigs_);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      // Add a new document in collection "cities"
      if (publicKey && connection) {
        setLoading(true);
        const d = await metagrab.getAllUserTokens(publicKey, {
          connection: connection,
        });

        const data = await Promise.all(
          d.map((e) => getMeta(`${e.mint}`, connection))
        ).then((res) => res.flat().filter((f) => f));
        setGoths(data as any);
        setLoading(false);
      }
    })();
  }, [connection, publicKey]);

  return (
    <div className={styles.background}>
      <div className={styles.container} style={{ minHeight: 500 }}>
        {!connected && <WalletMultiButton />}
        {loading ? (
          "Fetching Metadata, please wait"
        ) : goths.length ? (
          <>
            <div
              style={{
                transform: "scaleY(-1)",
                padding: "25px",
                position: "relative",
              }}
            >
              <Image
                className={styles.image}
                width={320}
                height={90}
                src="/div.png"
                alt="divider"
              />
            </div>

            <SlamDunkForm goths={goths} />

            <div
              style={{
                padding: "25px",
                position: "relative",
              }}
            >
              <Image
                className={styles.image}
                width={320}
                height={90}
                src="/div.png"
                alt="divider"
              />
            </div>
            <div
              style={{
                transform: "scaleY(-1)",
                padding: "25px",
                position: "relative",
              }}
            >
              <Image
                className={styles.image}
                width={320}
                height={90}
                src="/div.png"
                alt="divider"
              />
            </div>

            <HMAsForm goths={goths} />

            <div
              style={{
                padding: "25px",
                position: "relative",
              }}
            >
              <Image
                className={styles.image}
                width={320}
                height={90}
                src="/div.png"
                alt="divider"
              />
            </div>
          </>
        ) : (
          connected && (
            <>
              <span>
                {" "}
                To access this you must own a Goth GF. Sadly we couldn&apos;t
                find one in your wallet.
              </span>{" "}
              <br />
              You can however mint one to gain access!
            </>
          )
        )}
      </div>
    </div>
  );
}

export default ExclusiveContent;
