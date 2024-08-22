import { useLocation } from "react-router-dom";

const Page = ({ id }: { id: string }) => {
  const location = useLocation();

  return (
    <div>
      <h1>Story id: {id}</h1>
      <p>Huidig Pad: {location.pathname}</p>
    </div>
  );
};

export default Page;
