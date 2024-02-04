import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { WalletBalanceProvider } from "../hooks/useWalletBalance";
import { CrossMintProvider } from "@crossmint/client-sdk-react-ui";

require("@solana/wallet-adapter-react-ui/styles.css");
require("@crossmint/client-sdk-react-ui/styles.css");
const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnection/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
    // <WalletConnectionProvider>
      // {/* <CrossMintProvider clientId="7vo78mfDbFkomsW6j4QywtKeVh1MDAV7dNiRJ96kwXeC"> */}
      //   {/* <WalletBalanceProvider> */}
      //   {/* </WalletBalanceProvider> */}
      // {/* </CrossMintProvider> */}
    // {/* </WalletConnectionProvider> */}
  );
}
export default MyApp;
