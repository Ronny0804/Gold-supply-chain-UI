import React from 'react'
import '../styles/Hero.css'
const Hero = () => {
  return (
    <>
  <section id="hero" className="d-flex align-items-center justify-content-center">
  <div className="container" data-aos="fade-up">
    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={150}>
      <div className="col-xl-6 col-lg-8">
        <h1>Powerful Digital Solutions With Goldiam<span>.</span></h1>
        <h2>We are team of talented digital marketers</h2>
      </div>
    </div>
    <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay={250}>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-store-line" />
          <h3><a href>Lorem Ipsum</a></h3>
        </div>
      </div>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-bar-chart-box-line" />
          <h3><a href>Dolor Sitema</a></h3>
        </div>
      </div>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-calendar-todo-line" />
          <h3><a href>Sedare Perspiciatis</a></h3>
        </div>
      </div>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-paint-brush-line" />
          <h3><a href>Magni Dolores</a></h3>
        </div>
      </div>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-database-2-line" />
          <h3><a href>Nemos Enimade</a></h3>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Hero