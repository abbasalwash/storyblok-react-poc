import React from "react";
import { useLocation } from "react-router-dom";

const Project = () => {
    const location = useLocation();

    return (
        <div>
            <h1>Project</h1>
            <p>Huidig Pad: {location.pathname}</p>
        </div>
    );
}

export default Project;