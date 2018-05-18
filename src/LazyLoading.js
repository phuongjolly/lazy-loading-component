import React from "react";
import "./LazyLoading.css"
import LazyLoadingComponent from "./LazyLoadingComponent";

class LazyLoading extends React.Component{

    render() {
        return (
            <div>
                <ul>
                    <li>
                    <LazyLoadingComponent>
                        <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt='lazy-load'/>
                    </LazyLoadingComponent>
                    </li>
                    <li>
                        <LazyLoadingComponent>
                            <img alt="test" src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" />
                        </LazyLoadingComponent>
                    </li>
                    <li>
                        <LazyLoadingComponent>
                            <img alt={"test"} src="https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426" />
                        </LazyLoadingComponent>
                    </li>
                    <li>
                        <LazyLoadingComponent>
                            <img alt={"test"} src="https://wallpaperbrowse.com/media/images/beautiful-sunset-images-196063.jpg"/>
                        </LazyLoadingComponent>
                    </li>
                    <li>
                        <LazyLoadingComponent>
                            <img alt={"test"} src="https://www.w3schools.com/w3css/img_lights.jpg"/>
                        </LazyLoadingComponent>
                    </li>
                    <li>
                        <LazyLoadingComponent>
                            <img alt={"test"} src="https://wallpaperbrowse.com/media/images/beautiful-sunset-images-196063.jpg" />
                        </LazyLoadingComponent>
                    </li>
                </ul>
            </div>
        );
    }

}

export default LazyLoading;