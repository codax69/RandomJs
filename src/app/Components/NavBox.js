import React from "react";
import NavLink from "./NavLink";

const NavBox = (props) => {
  return (
    <>
      <div className="font-bold text-base tracking-tight text-slate-900 lg:font-lg">
        {props.Head}
        <ul className="flex flex-col">
          <li>
            <NavLink url={props.url1} NavName={props.navLink1} />
          </li>
          <li>
            {" "}
            <NavLink url={props.url2} NavName={props.navLink2} />
          </li>
          <li>
            <NavLink url={props.url3} NavName={props.navLink3} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBox;
