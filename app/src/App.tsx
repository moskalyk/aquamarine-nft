import React, { useState, useEffect } from 'react';
import './App.css';
import {Fluence} from '@fluencelabs/js-client'
import {readMetadata, writeMetadata} from './main'
import {sequence} from '0xsequence'
import {ethers} from 'ethers'
import {abi} from './abi'

const nodes = [
  {
    "peerId": "12D3KooWNFrMydPiNpL9FrTUV5Z36LrUHQzqdiLqkQhSHjZiFEep",
    "multiaddr": "/ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWNFrMydPiNpL9FrTUV5Z36LrUHQzqdiLqkQhSHjZiFEep"
  },
  // {
  //   "peerId": "12D3KooWFnXCcE9Vq5KUdaWu3VeTEKpntxZXnC5odtmuYjMPPvbX",
  //   "multiaddr": "/ip4/127.0.0.1/tcp/9992/ws/p2p/12D3KooWFnXCcE9Vq5KUdaWu3VeTEKpntxZXnC5odtmuYjMPPvbX"
  // },
  // {
  //   "peerId": "12D3KooWHWRFse55AWmDQt2Baec8ENibysAremvgzyLrGryxiFRi",
  //   "multiaddr": "/ip4/127.0.0.1/tcp/9993/ws/p2p/12D3KooWHWRFse55AWmDQt2Baec8ENibysAremvgzyLrGryxiFRi"
  // }
]

function App() {

  sequence.initWallet('AQAAAAAAAAmDjjBXoGqed7V3Z136m0AXSK4', {defaultNetwork: 'sepolia'})

  useEffect(() => {
    setTimeout(async () => {
      await Fluence.connect(nodes[0].multiaddr)
    }, 0)
  }, [])
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [img, setImage] = useState<any>(null);
  const [loggedIn, setLoggedin] = useState<any>(false);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const reader = new FileReader();

    reader.onload = async function(event: any) {
        const arrayBuffer = event.target.result;
        const uint8Array = new Uint8Array(arrayBuffer);
        console.log(uint8Array)
        await writeMetadata(Array.from(uint8Array))
    };

    reader.readAsArrayBuffer(selectedFile);

    if (selectedFile) {
      console.log("Uploading:", selectedFile.name);
    }
  };

  const handleRead = async () => {
    const wallet = sequence.getWallet()

    const signer = wallet.getSigner(11155111)

    // Craft your transaction
    const erc721Interface = new ethers.utils.Interface(abi)

    const data = erc721Interface.encodeFunctionData(
      'mint', [await wallet.getAddress(), 1]
    )

    const txn = {
      to: '0x7fa3e1306aa27642c650ff2ece54642b5d0198e0',
      data
    }

    // // Send the transaction
    const txnResponse = await signer.sendTransaction(txn)
    console.log(txnResponse)

    const provider = new ethers.providers.JsonRpcProvider('https://nodes.sequence.app/sepolia/AQAAAAAAAAmDjjBXoGqed7V3Z136m0AXSK4');

    // Replace with the ERC-721 contract address and ABI
    const contractAddress = '0x7fa3e1306aa27642c650ff2ece54642b5d0198e0';
    const contractABI = abi

    async function getTokenURI(contractAddress: any, tokenId: any) {
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        try {
          console.log(contract)
            const tokenURI = await contract.tokenURI(tokenId);
            console.log(`Token URI for token ID ${tokenId}: ${tokenURI}`);
            await Fluence.connect(tokenURI.slice(0,tokenURI.length-2))
            console.log('connected', await Fluence.getClient().getPeerId())
        
            const uint8Array = await readMetadata()
            const blob = new Blob([new Uint8Array(uint8Array[0])], { type: 'image/jpeg' }); // Adjust the MIME type as necessary
        
            // Create a URL for the Blob and set it as the src of an img element
            const imageUrl = URL.createObjectURL(blob);
        
            setImage(imageUrl)
            return tokenURI;
        } catch (error) {
            console.error(`Failed to fetch token URI: ${error}`);
        }
    }

    // Example usage: Get the token URI for token ID 0
    getTokenURI(contractAddress, 0);

  }

  const connect = async () => {
    const wallet = sequence.getWallet()
    const details = await wallet.connect({app: 'marine nfts'})
    if(details.connected){
      setLoggedin(true)
    }
  }

  return (
    <div className="App">
      <h1>marine nfts</h1>
      {
        loggedIn ? <>
            <input id="input-file" type="file" onChange={handleFileChange} />
            <button type="submit" onClick={handleUpload}>
                  set
            </button>
            <img src={img} />
            <button type="submit" onClick={handleRead}>
                  mint
            </button>
        </> : <>
          <button onClick={() => connect()}>connect</button>
        </>
      }
      <br/>
      
    </div>
  );
}

export default App;
