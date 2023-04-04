import "../css/exporter.css"
    return (
        <center>
            <div className="top">
                <input disabled={
                        !account
                    }
                    type="text"
                    id="add-exporter-address"
                    name="data"
                    placeholder="Exporter Address"
                    className="textField"/><br></br>
                <input disabled={
                        !account
                    }
                    type="text"
                    id="add-exporter-name"
                    name="data-name"
                    placeholder="Exporter Name"
                    className="textField"/><br></br>
                <button type="submit" className="button"
                    onClick={handleSubmit}>
                    Add Exporter
                </button>
                <button type="submit" className="button"
                    onClick={deleteExporter}>
                    Delete Exporter
                </button>
                <div id="result">

                </div>
                {/* <p>
                {message}
                </p> */}
            </div>
        </center>
    );
export default Exporter;