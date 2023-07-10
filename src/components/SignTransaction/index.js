import {ethers} from "ethers";

const SignTransaction = () => {
  const sign = async ()=> {
    try {
      const requestAccountAccess = async () => {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
          console.error('Error requesting account access:', error);
        }
      };

      await requestAccountAccess();

      const provider = new ethers.BrowserProvider(window.ethereum);
     
      // Get the current account address
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      // Create a message to be signed
      const message = 'Hello, Ai-Blockchain!';

      // Sign the message
      const signature = await signer.signMessage(message);

      // Handle the signed message (e.g., send it to a server, process it, etc.)
      console.log('Signed message:', signature);
    
      const tx = await signer.sendTransaction({
        to: address,
        data: signature
      });
      console.log('Transaction made:', tx);

    } catch (error) {
    console.error('Error occurred during the sign process:', error);
    }}
 sign();
};

SignTransaction.displayName = "SignTransaction";
export default SignTransaction;
