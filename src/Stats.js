import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Stats.css';

const Stats = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // triggers when 30% visible
  });

  return (
    <section className="stats-section" data-aos="fade-up" ref={ref}>
      <h2>Our Achievements</h2>
      <div className="stats-container">
        <div className="stat">
          <div className="stat-icon">👥</div>
          <div className="stat-number">
            <img 
              src="https://hitwebcounter.com/counter/counter.php?page=21140853&style=0001&nbdigits=5&type=page&initCount=0" 
              alt="Visitor Count" 
              className="visitor-counter"
            />
          </div>
          <div className="stat-label">Visitors</div>
        </div>

        <div className="stat">
          <div className="stat-icon">💼</div>
          <div className="stat-number">
            {inView && <CountUp start={1} end={47} duration={2} />}
          </div>
          <div className="stat-label">Successful Projects</div>
        </div>

        <div className="stat">
          <div className="stat-icon">👍</div>
          <div className="stat-number">
            {inView && <CountUp start={1} end={35} duration={2} />}
          </div>
          <div className="stat-label">Happy Clients</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
