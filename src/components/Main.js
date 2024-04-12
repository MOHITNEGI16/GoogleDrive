import "../Css/Main.css";
import { LuInfo } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import { FaFile } from "react-icons/fa";
import { db } from "./firebase";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("drivefiles").onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <main className="main">
        <div className="welcomeNote">
          <span>Welcome to Drive</span>
          <LuInfo style={{ fontSize: "1.5rem" }} />
        </div>

        <div className="main_myDrive">
          <div>
            <span>My Drive</span>
            <IoMdArrowDropdown style={{ fontSize: "1.3rem" }} />
          </div>
          <div className="main_listGrid">
            <span className="main_listGrid_first">
              <FaList />
            </span>
            <span>
              <LuLayoutGrid />
            </span>
          </div>
        </div>

        <div className="main_list">
          <p>Name</p>
          <p>Reason Suggested</p>
          <p>Owner</p>
          <p>Size</p>
        </div>
        <hr />

        {data.map((ele) => {
          return (
            <>


              <ul className="main_list_items">
                
                <li style={{display:"flex", justifyContent:"left"}}>
                <a style={{textDecoration:"none",color:'inherit'}} href={ele.data.url}>
                  <FaFile style={{ marginRight: "0.6rem" }} />

                  <span>{ele.data.name}</span>
                </a>

                </li>
                <li style={{display:"flex", justifyContent:"center"}}>
                  <span>
                    {new Date(ele.data.time?.seconds * 1000).toUTCString()}
                  </span>
                </li>
                <li>
                  <span style={{display:"flex", justifyContent:"right"}}>Owner</span>
                </li>
                <li>
                  <span>{ele.data.size}  kb</span>
                </li>
              </ul>
            </>
          );
        })}

        {/* import { FaFile } from "react-icons/fa";// */}
      </main>
    </>
  );
}

export default Main;
