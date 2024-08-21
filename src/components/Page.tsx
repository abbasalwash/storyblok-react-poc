import { useLocation } from "react-router-dom";

const Page = () => {
    const location = useLocation();

    return (
        <div>
            <h1>Project</h1>
            <p>Huidig Pad: {location.pathname}</p>
        </div>
    );
}

export default Page;