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
                        <img src="http://streaming1.danviet.vn/upload/2-2018/images/2018-04-01/1-1522590195-width500height333.jpg" alt='lazy-load'/>
                    </LazyLoadingComponent>
                    </li>
                    <li>
                        <LazyLoadingComponent>
                            <img alt="test" src="https://kenh14cdn.com/2018/3/4/img2233-1520150367226920646658.jpg" />
                        </LazyLoadingComponent>
                    </li>
                    <li>
                        <LazyLoadingComponent>
                            <img alt={"test"} src="http://2sao.vietnamnetjsc.vn//2015/12/24/07/21/jun-vu-duoc-hang-loat-trang-bao-trung-quoc-dua-tin-vi-qua-giong-angela-baby_6.jpg" />
                        </LazyLoadingComponent>
                    </li>
                    <li>
                        <LazyLoadingComponent>
                            <img alt={"test"} src="http://media.we25.vn/images/26952472_1713091282086303_4057977799851170173_o.jpg"/>
                        </LazyLoadingComponent>
                    </li>
                    <li>
                        <LazyLoadingComponent>
                            <img alt={"test"} src="http://img.yeah1.com/upload/news/24112015/1448346057_jun-3.jpg"/>
                        </LazyLoadingComponent>
                    </li>
                    <li>
                        <LazyLoadingComponent>
                            <img alt={"test"} src="http://vietdaily.vn/wp-content/uploads/2018/03/Jun-Vu-7_preview-Copy.jpeg" />
                        </LazyLoadingComponent>
                    </li>
                </ul>
            </div>
        );
    }

}

export default LazyLoading;