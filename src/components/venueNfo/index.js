import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

import pic1 from '../../resources/images/pic1.jpg';


const VunueNfo = () => {
  return (
    <div 
      className="bck_black"
      style={{
        background:`#ffffe3`
      }}
    >
      <div className="center_wrapper">
        <div className="vn_wrapper">

          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div 
                    className="vn_icon"
                    style={{
                      background:`url(${icon_calendar})`
                    }}
                  ></div>
                  <div className="vn_desc">
                    <ul>
                      <li>築年月：2009年６月（築10年）</li>
                      <li>建物階建：地上３階</li>
                      <li>総戸数：１８戸</li>
                      <li>建物構造：RC(鉄筋コンクリート)</li>
                      <li>物件種別：マンション</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div 
                    className="vn_icon"
                    style={{
                      background:`url(${icon_location})`
                    }}
                  ></div>
                  <div className="vn_desc">
                    <ul>
                      <li>間取り：2LDK</li>
                      <li>賃料：5.8万円 ～ 6.2万円</li>
                      <li>管理費等：2,000円</li>
                      <li>敷金 / 礼金：１ヶ月 / 無</li>
                      <li>保証金：ー</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>


        </div>
      </div>
    </div>
  );
};

export default VunueNfo;