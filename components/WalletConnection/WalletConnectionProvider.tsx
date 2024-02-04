import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
PhantomWalletAdapter,
SlopeWalletAdapter,
SolflareWalletAdapter,
LedgerWalletAdapter,
SolletWalletAdapter,
SolletExtensionWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { FC, useMemo } from "react";

const WalletConnectionProvider: FC = ({ children }) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

  const endpoint = useMemo(() => 'https://ssc-dao.genesygo.net', [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider
      endpoint={endpoint}
      config={{
        confirmTransactionInitialTimeout: 180000,
      }}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionProvider;
