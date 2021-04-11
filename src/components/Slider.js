import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'

export default class Slider extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {});
        });
    }

    render() {
        return (
            <div className="container">
                <div className="carousel">
                    <h2>Asortiman</h2>
                    <a className="carousel-item" href="#one!"><img src="https://www.zecanka.com/img/kategorije/trpezarije.jpg" /></a>
                    <a className="carousel-item" href="#two!"><img src="https://www.zecanka.com/img/kategorije/trpezarije.jpg" /></a>
                    <a className="carousel-item" href="#three!"><img src="https://www.zecanka.com/img/kategorije/trpezarije.jpg" /></a>
                    <a className="carousel-item" href="#four!"><img src="https://www.zecanka.com/img/kategorije/trpezarije.jpg" /></a>
                    <a className="carousel-item" href="#five!"><img src="https://www.zecanka.com/img/kategorije/trpezarije.jpg" /></a>
                </div>
            </div >
        )
    }
}
