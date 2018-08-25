import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: ['水道', '電気', 'ガス'],
    positions: ['○○株式会社', '○○株式会社', '○○株式会社'],
    desc: [
      '【住所】xxxxxxxx',
      '【住所】yyyyyyyy',
      '【住所】zzzzzzzz'
    ],
    timer: [
      '【営業時間】10:00~17:00',
      '【営業時間】24時間対応',
      '【営業時間】9:00~19:00'
    ],
    linkto:['http://sales/b','http://sales/m','http://sales/s'],
    delay: [500, 0, 500]
  }

  showBoxes = () => (
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.desc[i]}<br/>
              {this.state.timer[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="お問い合わせ"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )



  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>管理会社</h2>

          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>



        </div>
        
      </div>
    );
  }
}

export default Pricing;