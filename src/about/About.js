import React, { Component } from 'react';

import './About.css';

class About extends Component {
    constructor(props) {
        super(props);
   }

    render() {
        return (
            <div className="about">
                <div className="about-container">
                    <div className="about-container__header">
                        About
                    </div>
                    <hr className="faded"/>
                    <div className="about-container__content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet mi sed enim porttitor, ut aliquam turpis feugiat. Ut gravida consectetur molestie. Mauris eu molestie massa, dictum facilisis erat. Nunc vel fringilla tortor. Nam in neque id nulla lacinia consectetur. Vivamus cursus semper quam nec feugiat. Aenean mattis fringilla velit a malesuada. Duis volutpat nibh neque, vel pretium odio porttitor in. Donec molestie erat at velit consequat, at pretium urna gravida. Nam vitae sagittis sem. Sed laoreet erat dui, at eleifend nulla viverra ac.
                    </div>
                </div>
            </div>
        );
    }
}

export default About;