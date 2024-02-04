// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

type Data =
  | {
      hashes: string[];
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
    const { event } = req.query;
    const gigRef = collection(db, event as string);
    const docs = await getDocs(gigRef);
    const hashes = docs?.docs?.map((d) => d.data()?.addyHash) || [];
    res.status(200).send({ hashes });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
