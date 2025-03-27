import React from "react";
import image1 from "../assets/Angelina.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ConatctDetails = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <div className="text-center mt-4 font-bold  text-2xl ">
        <h1>Conatct Details</h1>
      </div>
      <div className="flex flex-row justify-center mt-4">
        <img
          src={image1}
          alt="Vite logo"
          className="rounded-full mr-8 w-50 h-60"
        />
        <div className="mt-10 font-serif text-2xl">
          <div className="mb-6">{location.state.contact.name}</div>
          <div>{location.state.contact.email}</div>
        </div>
      </div>
      <Link to={"/"}>
        <button
          className="cursor-pointer rounded-full bg-blue-800 w-40 ml-130
 mt-8        "
        >
          Go back to contacts
        </button>
      </Link>
    </div>
  );
};

export default ConatctDetails;
