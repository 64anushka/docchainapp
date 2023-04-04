import "../css/Upload.css";

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
export default Upload;