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
import HomePage from './components/pages/Home';


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
        let contractAddress = "0x07bd6278Fb9e5851fC381e18EC551470E28002d0";
        const abi = [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_address",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
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
            "inputs": [
              {
                "internalType": "address",
                "name": "_address",
                "type": "address"
              }
            ],
            "name": "deleteExporter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_address",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              }
            ],
            "name": "editExporter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
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
            "inputs": [],
            "name": "documentCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
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
                "name": "exists",
                "type": "bool"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getDocumentCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
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

        let contractAddress_upload = "0xd3d56Fe44BE205Ad2ee43ACD87926c4657e4CB5f";
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
        console.log(contract);
        console.log(provider._network.name);
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