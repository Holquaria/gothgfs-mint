// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

type Data =
  | {
      id: string;
    }
  | string;

const firebaseConfig = {
  apiKey: "AIzaSyBLHQKKobRerPBA9cC1EJ8vx0AwMhUOTbw",
  authDomain: "gothgfs-2466f.firebaseapp.com",
  projectId: "gothgfs-2466f",
  storageBucket: "gothgfs-2466f.appspot.com",
  messagingSenderId: "690322262391",
  appId: "1:690322262391:web:ab294aa8506ee997fc3972",
};

const ids = ["hmas", "slam-dunk-3-6", "slam-dunk-4-6"];

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (
      process.env.VERCEL_ENV === "production" &&
      req.headers.host !== "gothgfs.io" &&
      req.headers.referer !== "https://gothgfs.io"
    ) {
      return res.status(401).send("Unauthorized");
    }
    const { addyHash, gig, name } = JSON.parse(req.body);
    const gigRef = collection(db, gig as string);
    const docs = await getDocs(gigRef);
    const hashes = docs?.docs?.map((d) => d.data()?.addyHash) || [];
    const limit = gig === "hmas" ? 20 : 30;

    if (hashes.length >= limit) {
      return res.status(400).send("All taken!");
    }
    if (hashes.includes(addyHash)) {
      return res.status(400).send("Ayo I saw that!");
    }

    if (gig === "slam-dunk-3-6" || gig === "slam-dunk-4-6") {
      const otherGig =
        gig === "slam-dunk-3-6" ? 'slam-dunk-4-6' : "slam-dunk-3-6";
      const otherGigDocs = await getDocs(collection(db, otherGig as string));
      const otherHashes =
        otherGigDocs?.docs?.map((d) => d.data()?.addyHash) || [];
      if (otherHashes.includes(addyHash)) {
        return res.status(400).send("Ayo I saw that!");
      }
    }
    const { id } = await addDoc(gigRef, {
      name,
      addyHash,
    });
    res.status(200).send({ id });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
