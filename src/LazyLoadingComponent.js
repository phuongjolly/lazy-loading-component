import React from "react";
import trackWindowScroll from "./TrackWindowScroll";

class LazyLoadingComponent extends React.Component{
    state = {
        visible: false
    }

    componentDidMount() {
        this.updateVisibility();
    }

    componentDidUpdate() {
        this.updateVisibility();
    }


    updateVisibility(){
        if(!this.state.visible && this.isComponentInViewPort()) {
            this.setState({visible: true});
        }
    }

    getComponentBounding(scrollPosition = this.props.scrollPosition) {
        const boundingRect = this.placeholder.getBoundingClientRect();
        return {
            bottom: scrollPosition.y + boundingRect.bottom ,
            left: scrollPosition.x + boundingRect.left,
            right: scrollPosition.x + boundingRect.right,
            top: scrollPosition.y + boundingRect.top
        };
    }

    isComponentInViewPort() {
        if(!this.placeholder) {
            return false;
        }

        const {scrollPosition} = this.props;
        const boundingBox = this.getComponentBounding(scrollPosition);
        const viewport = {
            bottom: scrollPosition.y + window.innerHeight,
            left: scrollPosition.x,
            right: scrollPosition.x + window.innerWidth,
            top: scrollPosition.y
        };

        return (viewport.top - 30 <= boundingBox.bottom &&
            viewport.bottom + 30 >= boundingBox.top &&
            viewport.left - 30 <= boundingBox.right &&
            viewport.right + 30 >= boundingBox.left);
    }

    render() {
        return (
            <div ref={item => this.placeholder = item}
                 className={this.state.visible ? "fadeInUp" : "invisible"}>
                {this.props.children}
            </div>
        )
    }
}

export default trackWindowScroll(LazyLoadingComponent);