import React from 'react';
import Slider from "react-slick";
import './ClientsCarousel.css'; // For custom styling if needed

const ClientsCarousel = () => {
  const clients = [
    {
      name: "ABC Consulting Ltd",
      sector: "Business Consultancy",
      image: "/client1.jpg", // Assuming placed in public/images
      testimonial: "London Times Accountancy has helped us streamline our finances seamlessly."
    },
    {
      name: "XYZ Creatives",
      sector: "Media & Entertainment",
      image: "/client2.jpg",
      testimonial: "Their professional advice has been invaluable for our growth."
    },
    {
      name: "LMN Construction",
      sector: "Construction",
      image: "/client3.jpg",
      testimonial: "We rely on them for all our tax and compliance needs."
    }
  ];

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: false, // ensures slides align to edges
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

  return (
    <section className="clients-carousel-section">
      <h2>Our Clients</h2>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <img src={client.image} alt={client.name} className="client-image"/>
            <h3>{client.name}</h3>
            <p className="client-sector">{client.sector}</p>
            <p className="client-testimonial">"{client.testimonial}"</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClientsCarousel;
