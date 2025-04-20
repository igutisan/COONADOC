'use client'

import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Carousel() {
  useEffect(() => {
     // @ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner rounded">
        <div className="carousel-item active">
          <img src="/images/image1.png" className="d-block w-100 carousel-img" alt="Imagen 1" />
        </div>
        <div className="carousel-item">
          <img src="/images/image2.png" className="d-block w-100 carousel-img" alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src="/images/image3.png" className="d-block w-100 carousel-img" alt="Imagen 3" />
        </div>
        <div className="carousel-item">
          <img src="/images/image4.png" className="d-block w-100 carousel-img" alt="Imagen 4" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  )
};
