import React, { useState } from "react";
import { assets } from "../../assets/assets.js";
import "./Sidebar.css";

const Sidebar = () => {

    const [extended,setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=> setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
         {extended?<p>Yeni sohbet</p>:null} 
        </div>
        {extended
        ?<div className="recent">
        <p className="recent-title">En son</p>
        <div className="recent-entry">
          <img src={assets.message_icon} alt="" />
          <p>Türkiye'nin başkenti...</p>
        </div>
        <div className="recent-entry">
          <img src={assets.message_icon} alt="" />
          <p>React js nedir?</p>
        </div>
      </div>
      :null
        }
        
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
         {extended?<p>Yardım</p>:null} 
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended?<p>Etkinlik</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
         {extended?<p>Ayarlar</p> :null} 
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
