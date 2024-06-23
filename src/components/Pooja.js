import React from 'react';
import BadrinathTemple from '../assets/navgraha-image.jpg';
import ganapathiImage from '../assets/ganapathi-image.jpg';
import KedarnathTemple from '../assets/durga-image.jpg';

import GoldenTemplee from '../assets/popular12.jpg';
import AkshardhamTemple from '../assets/popular10.jpg';
import SaiBaba from '../assets/popular11.jpg';

const Pooja = () => {
  return (
    <section className="pooja" id="pooja">
      <h3>With God, all things are possible</h3>
      <p>Popular Religious  in India</p>
      <div className="pooja-cards">
        <div className="card">
          <img src={BadrinathTemple} alt="Navgraha Pooja" />
          <h3>Badrinath Temple</h3>
          <p>Chamoli, Uttarakhand</p>
        </div>
        <div className="card">
          <img src={ganapathiImage} alt="Ganapathi Homam" />
          <h3>Ganapathi Homam</h3>
          <p>
          Mumbai, Maharashtra</p>
        </div>
        <div className="card">
          <img src={KedarnathTemple} alt="Durga Pooja" />
          <h3>Kedarnath Temple</h3>
          <p>Rudraprayag, Uttarakhand</p>
        </div>


        <div className="card">
          <img src={GoldenTemplee} alt="Golden Templee" />
          <h3>Golden Templee</h3>
          <p>Amritsar, Punjab</p>
        </div>

        <div className="card">
          <img src={AkshardhamTemple} alt="Akshardham Temple" />
          <h3>Akshardham Temple</h3>
          <p>Delhi</p>
        </div>

        <div className="card">
          <img src={SaiBaba} alt="Shirdi Sai Baba Temple" />
          <h3>Shirdi Sai Baba Temple</h3>
          <p>Shirdi, Maharashtra</p>
        </div>
      </div>
    </section>
  );
};

export default Pooja;
