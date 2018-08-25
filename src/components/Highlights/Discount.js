import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component{

  state = {
    discountStart: 0,
    discountEnd:80
  }

  porcentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage()
    }, 20)
  }



  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

          <Fade
            onReveal={() => this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>稼働率</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>口コミ</h3>
              <p>利便性もよく素晴らしい物件だと思います。住んでいて楽しく、毎日を送れそうです。私の理想とする家です！</p>

              <MyButton
                text="ご入居予定の方はこちらから"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />

            </div>
          </Slide>


        </div>
      </div>
    );
  }
}

export default Discount;