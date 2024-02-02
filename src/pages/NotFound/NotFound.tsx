import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center pt-20 mb-10 text-2xl">Looks like you're Lost!!!</div>
      <div className="flex justify-center text-l underline">
				<NavLink to="/">Back to Home</NavLink>
			</div>
    </>
  );
};

export default NotFound;
