import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import EmptyLayout from "../components/layouts/EmptyLayout";
import error404 from "../assets/error404.webp";

const NotFound = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  return (
    <EmptyLayout>
      <div className="flex flex-col flex-grow justify-center items-center pt-10">
        <img src={error404} alt="error-404" width={360} height={327} />
        <h1 className="text-dark text-3xl font-semibold mb-5 text-center">
          ...Oops Page Not Found
        </h1>
        <p className="text-lg text-grey-5 font-semibold mb-5 text-center">
          The requested URL{" "}
          <span className="text-grey-1"> {location.pathname} </span>
          was not found on this server.
        </p>
        <Link
          className="text-white bg-primary px-4 py-2 rounded-xl text-lg 
          hover:bg-primary-2 active:bg-blue transition duration-300"
          to={backLinkHref.current}
        >
          Go back
        </Link>
      </div>
    </EmptyLayout>
  );
};

export default NotFound;
