import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets.js";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="Herhangi bir adam" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Merhaba, Herhangi bir adam</span>
          </p>
          <p>Nasıl yardımcı olabilirim?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Türkiye'de seyahat edilebilicek güzel yerler</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Makale konusu hakkında fikir</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>YKS sınavı için günlük çalışma programı</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>React js ile Angular js arasında kıyaslama</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Gemini'a sorun..." />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini, kişiler de dahil olmak üzere yanlış bilgiler
            görüntüleyebilir, bu nedenle yanıtlarını iki kez kontrol edin.
            Gizliliğiniz ve Gemini Uygulamaları
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
