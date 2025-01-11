import { useWallet } from '@solana/wallet-adapter-react';

export function usePubkey() {
    const { publicKey } = useWallet();

    return publicKey ? publicKey.toBase58() : null;
}
