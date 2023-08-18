 import React from "react";

 function Discover(){
    return(
        
    <div>
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/para.jpg" className="d-block w-100" height={550} alt="..."/>  
      <div className="carousel-caption d-none d-md-block">
      <h4>Traveling is not about Exploring Places.</h4>
        <h4>It's About Exploring Yourself. </h4>
       
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://c.pxhere.com/images/d7/3b/2023f089c1125af2616970ec65dd-1446199.jpg!d" className="d-block w-100"height={550}width={1200} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h4>Traveling is the biggest therapy</h4>
        <h4>It heals all pain,Brings Immense Happiness</h4>
      </div>
      
    </div>
    <div className="carousel-item">
      <img src="https://i.imgur.com/P6JYkcc.jpg" className="d-block w-100"height={550}width={1200} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h4>Explore the World</h4>
        <h4>Discover the value of travel</h4>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    )
 }
export default Discover;