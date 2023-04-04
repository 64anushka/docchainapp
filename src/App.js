import './App.css';
import Navbar from './components/pages/navbar';
import Upload from './components/pages/Upload';
import Display from './components/pages/Display';
import Exporter from './components/pages/exporter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import HomePage from './components/pages/home';


function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [network, setNetwork] = useState(null);
  const [contract_upload, setContractUpload] = useState(null);
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        // const bal = await address.getBalance();
        // setBalance(bal);
        let contractAddress = "0x93ced2F262A4959fC16133f11F0d82282AB203AD";
        const abi = [
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_exporter",
                "type": "address"
              }
            ],
            "name": "addExporter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_imageHash",
                "type": "string"
              }
            ],
            "name": "addImage",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "admin",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "exporters",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "name": "images",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_exporter",
                "type": "address"
              }
            ],
            "name": "removeExporter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_imageHash",
                "type": "string"
              }
            ],
            "name": "verifyImage",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ]
        const contract = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );

        let contractAddress_upload = "0x49221DE4fbDF1B40D17b70b2Fcfe310b5f7fE7aE";
        const abi_upload=[
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_user",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "url",
                "type": "string"
              }
            ],
            "name": "add",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "user",
                "type": "address"
              }
            ],
            "name": "allow",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "user",
                "type": "address"
              }
            ],
            "name": "disallow",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_user",
                "type": "address"
              }
            ],
            "name": "display",
            "outputs": [
              {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "shareAccess",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "access",
                    "type": "bool"
                  }
                ],
                "internalType": "struct Upload.Access[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ]
        const contract_upload = new ethers.Contract(
          contractAddress_upload,
          abi_upload,
          signer
        );
        setContractUpload(contract_upload);
        //console.log(contract);
        //console.log(provider._network.name);
        setNetwork(provider._network.name);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return ( 
    <>
    
      <Router>
        <Navbar title="TextUtils" />
        <div>
          <Routes>
            <Route exact path="/navbar" element={<Navbar />}>
            </Route>
            <Route exact path="/" element={<HomePage />}>
            </Route>
            <Route exact path="/home" element={<HomePage />}>
            </Route>
            <Route exact path="/upload" element={<Upload
      account={account}
      provider={provider}
      contract={contract_upload}
      ></Upload> }>
            </Route>
            <Route exact path="/display" element={<Display 
      contract={contract_upload} 
      account={account}
      ></Display>}>
            </Route>
            <Route exact path="/exporter"></Route>
            <Route exact path="/admin" element={<Exporter
          account={account}
          provider={provider}
          contract={contract}
        ></Exporter>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;