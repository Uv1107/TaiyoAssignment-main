import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css'
const Sidebar = () => {
  return (
    <div
      className="w-1/5 border-4 border-blue-500/75 bg-gray-200
    h-screen fixed flex-grow flex flex-col items-center justify-center sidebar-container"
    >
      <Link to="/" className="bg-blue-400 text-slate-50 p-2 rounded-full m-5">
        Contacts
      </Link>
      <Link to="/map" className="bg-blue-400 text-slate-50 p-2 rounded-full m-5">
        Charts and Maps
      </Link>
    </div>
  );
};

export default Sidebar;
