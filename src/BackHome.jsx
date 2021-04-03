import React from "react";
import { Link} from "react-router-dom";

function BackHome() {
  

    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "35px",
                }}
            >
                <Link to="/">
                    <h1 className="btn btn-primary">HOME</h1>
                </Link>
            </div>
        </>
    );
}

export default BackHome;