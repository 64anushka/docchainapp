import React from "react";
import "../css/Verify.css";

return (
    <center>
        <div className="top">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    disabled={!account}
                    type="file"
                    id="file-upload"
                    name="data"
                    className="upload-files"
                    onChange={retrieveFile}
                />
                <button type="submit" className="upload" disabled={!file}>
                    Verify File
                </button>

            </form>
            <div id="result">

            </div>
        </div>
    </center>

);
