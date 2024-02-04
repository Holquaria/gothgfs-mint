// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PublicKey } from "@solana/web3.js";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import nacl from "tweetnacl";

type Data = string;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "goth@gothgfs.com",
    serviceClient: "116070530804557629308",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqdzgdmMtNMznz\nUNlNKWUO40Q/LIWQzW4pDnzzunMLarNPcXvEC/0yZro64cJqjVWsleySFDDuUq5D\nqrolKN6JWsi/wQd6+flp30guDMiT8mblEO22e/uMbQc+RrcwXAdplExfVJCut7V1\nBR3CNo8au5eyFdXn+KL/GAq1LPINZv8vTePnyJM+BO0/jz5j+en4swCA20MfPowg\n59XxEy+FcaZ9dvj1lzi/moAZKHLIE3sZVuG3rFlIBHy+Bxb9Ki3AvLUadp+bFen8\nwFn2KRTk9f59LBSIW4LP0/jNw8VW09yl1FBXE22Kc/NJt43nYcidTXkSI/Sv61py\nH21FB2pXAgMBAAECggEAOeb3C66b1+Q/mfNrbHdUGWN/CgpgcBgnhBCkxtEdRNKA\nh8qfZK9B2P3l4hxPQowxfscKLXBoUnuJL/js87RXKsbIi8HQfagtXRX32ZSECST8\naHCAnkys3D0oibHRhb6s0eMKshLydjZ2j4ImYpLPtx/jXh1mpD3jd8y9zl6u9Xfp\nZZqMtVy73FnMbaARkOqOv9lraWAVxRCewC+kleja5+BH91fWvzCS4IZaPPWnxJ+X\n/XAC00CTvqkkl3Xk3PTWxaP+3NmLaZYICLccvSUl5kpra4Fs1bGt6ErYAVHc3+5K\nwIyojejmtJ8KsY8evWaYUuWpltD26lpbU3pCLZ2zSQKBgQDjeoc2VXycL46vkDod\n4sYR4KUaDVeiX9qB3ceIqiCdcifgW1GUxLNTJWoeiWbxnBIkM6jyEHso+D4eHbT/\nTeDNfHypCmVplEwVfDWloXB4yKyyDHqAL/8h4VP8h171FBVDIVesJ2mEIf573J1j\nTd4wbmrZe8TFa8joROSZGxwsawKBgQC/1rl49dXHFtxZ9VahmmW/BPlV14jtfxcV\nrCCmRM2xRCkmhMWPt8fe63HjL2khd1wxf8Fp/IFpi0bd8lI0K/jqBM7HS4F1eFtM\nDu6rCTmyL3EIwKGo3wTnOmnyumgZqstDxp5HB7sQBNCZkASlhygDHYgxnplyRcmU\nBdva0tq0xQKBgQDc/48ZNFhJjNJ8sgwkOMrhV3RPKSM4dxNcE9DkbxQcomknSNCr\nTaZCYxkD7c17cXsWfLHn6icdGH+Q1p+fYVPDjuu1door1o1MWk3sSjlwvtU4bXMd\n0oN1sOndbs7MHuTBQUVh1TBn1HbecujdLytrtfpMrDfw7NRVA4lrTbFDXQKBgHMD\nzddTrIPclOfqS7I/21iXJtXsj0+0rqZzuG93OMtazkElwTzVNqPUDUfkGOfTpBaZ\nPeDJXt1kf2x56AcXhfjoQQEDp+5B5prHKRiqQ0ktYFubAlE4xLvNLdA1KkyZNZzA\n7Awx+lk0ScyHqAGF8ttLTWhSajU02hJBIPslB7LxAoGAEEznYf6Y2opqJku8rjvI\nVXzizv6HJrcsDhNCERUxozgQNlx3ckJOiacjI0mSYRK0gGCYppZoBt1s7XU93QdS\ndGAc7XKPd6rEvfSMWrmrcMnGlzAnJZdEUjtFPTZ81Xw4xfV3ZlISoFew3ki4Z1JD\nyBtlt0krpoefx6OGYQ5/8gE=\n-----END PRIVATE KEY-----\n",
  },
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { email, name, gig, signedMessage, publicKey } = JSON.parse(req.body);
    const encoder = new TextEncoder();
    const parsedKey = new Uint8Array(JSON.parse(publicKey as string));
    const isVerified = nacl.sign.detached.verify(
      encoder.encode(`Please sign this message so we know you are you.`),
      new Uint8Array(JSON.parse(signedMessage as string)),
      parsedKey
    );
    if (
      (process.env.VERCEL_ENV === "production" &&
        req.headers.host !== "gothgfs.io" &&
        req.headers.referer !== "https://gothgfs.io") ||
      !isVerified
    ) {
      return res.status(401).send("Unauthoruzed");
    }
    const gigCopy =
      gig === "hmas" ? "Heavy Music Awards" : "Slam Dunk Festival";
    await transporter.sendMail({
      from: "Goth GFs <goth@gothgfs.com>",
      to: email,
      subject: "Concert Submission received!",
      text: `Your submission for the ${gigCopy} has been received, you will receive confirmation shortly`,
    });
    await transporter.sendMail({
      from: "Goth GFs <goth@gothgfs.com>",
      to: "goth@gothgfs.com",
      subject: "Concert Submission received!",
      cc: "goth@gothgfs.com",
      text: `${name} registered ticket for ${gig} with ${email} and address ${new PublicKey(
        parsedKey
      ).toBase58()}`,
    });
    res.status(200).send("success");
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
}
