import React from 'react';
import Slider from "react-slick";
import './ClientsCarousel.css';

const ClientsCarousel = () => {
  const clients = [
    {
      name: "JK Movements and detailing ltd",
      sector: "Business Consultancy",
      image: `${process.env.PUBLIC_URL}/images/client4.jpg`,
      testimonial: "London Times Accountancy has helped us streamline our finances seamlessly."
    },
    {
      name: "Maz Landscaping",
      sector: "Media & Entertainment",
      image: `${process.env.PUBLIC_URL}/images/client6.jpg`,
      testimonial: "Their professional advice has been invaluable for our growth."
    },
    {
      name: "J&R Consultancy",
      sector: "Construction",
      image: `${process.env.PUBLIC_URL}/images/client7.jpg`,
      testimonial: "We rely on them for all our tax and compliance needs."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/120?text=No+Image";
  };

  return (
    <section className="clients-carousel-section">
      <h2 className="carousel-heading">Our Clients</h2>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <div className="image-wrapper">
              <img
                src={client.image}
                onError={handleImageError}
                alt={client.name}
                className="client-image"
              />
            </div>
            <h3 className="client-name">{client.name}</h3>
            <p className="client-sector">{client.sector}</p>
            <p className="client-testimonial">"{client.testimonial}"</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClientsCarousel;
