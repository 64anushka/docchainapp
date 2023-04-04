import "../css/Upload.css";
import {useState} from "react";
import React from "react";
import axios from "axios";


const Upload = ({contract, account, provider}) => {
    const [showGif, setShowGif] = React.useState(false);

    const handleClick = () => {
        setShowGif(!showGif);
        setTimeout(() => setShowGif(false), 11000);
    }
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No image selected");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);
                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: `b2e3a82cf3f882bc0aeb`,
                        pinata_secret_api_key: `7a2aff56b95a1db24887b2e9ae2ccc2379ea662ac0fbc324a851839a4edb86f2`,
                        "Content-Type": "multipart/form-data"
                    }
                });
                const ImgHash = `${
                    resFile.data.IpfsHash
                }`;
                console.log(ImgHash);
                const signer = contract.connect(provider.getSigner());
                signer.add(account, ImgHash);

            
                    document.getElementById("result").innerHTML = "Uploaded Successfully!";
                

            } catch (e) {
                document.getElementById("result").innerHTML = "Unsuccessfully!";
            }
        }
        setFileName("No image selected");
        setFile(null);

    };
    const retrieveFile = (e) => {
        const data = e.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend = () => {
            setFile(e.target.files[0]);
        };
        setFileName(e.target.files[0].name);
        e.preventDefault();
    };
    return (
        <center>
            <div className="top">
                <form className="form"
                    onSubmit={handleSubmit}>
                    <input disabled={
                            !account
                        }
                        type="file"
                        id="file-upload"
                        name="data"
                        className="upload-files"
                        onChange={retrieveFile}/>
                    <button type="submit" className="upload"
                        disabled={
                            !file
                        }
                        onClick={handleClick}>
                        Upload File
                    </button>
                    <Spinner showGif={showGif}/>
                </form>
                <div id="result"></div>
            </div>

        </center>

    );
};
export default Upload;