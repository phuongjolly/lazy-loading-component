//follow lazy-loading-component
//from: https://github.com/Aljullu/react-lazy-load-image-component
//with improvement method

import React from "react";

const trackWindowScroll = (BaseComponent) => {
    class TrackWindowScrollComponent extends React.Component {
        state = {
            scrollPosition: {
                x: window.scrollX || window.pageXOffset,
                y: window.scrollY || window.pageYOffset
            }
        }

        constructor(props) {
            super(props);
        }


        componentDidMount() {
            window.addEventListener('scroll', () => this.onChangeScroll());
        }

        componentWillUnmount() {
            window.removeEventListener('scroll',() => this.onChangeScroll());
        }

        onChangeScroll() {
            console.log("on change scroll");
            this.setState({
                scrollPosition: {
                    x: window.scrollX || window.pageXOffset,
                    y: window.scrollY || window.pageYOffset
                }
            });
        }

        render() {
            return (
                <BaseComponent scrollPosition={this.state.scrollPosition}
                               {...this.props} />
            );

        }
    }

    return TrackWindowScrollComponent;
}

export default trackWindowScroll;