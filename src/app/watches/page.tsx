import React from 'react';

const Page = () => {
  return (
    <div className="watches-container">
      <div className="watches-item">
        <img className="watches" src="citizen.jpg" alt="Citizen Watch" />
        <h2>Citizen Watch</h2>
        <h3>$148</h3>
        <p className="buy-now">Buy Now</p>
      </div>
      <div className="watches-item">
        <img className="watches" src="tissot.jpg" alt="Tissot Watch" />
        <h2>Tissot Watch</h2>
        <h3>$320</h3>
        <p className="buy-now">Buy Now</p>
      </div>
      <div className="watches-item">
        <img className="watches" src="omega.jpg" alt="Omega Watch" />
        <h2>Omega Watch</h2>
        <h3>$550</h3>
        <p className="buy-now">Buy Now</p>
      </div>
      <div className="watches-item">
        <img className="watches" src="patek.jpg" alt="Patek Watch" />
        <h2>Patek Watch</h2>
        <h3>$750</h3>
        <p className="buy-now">Buy Now</p>
      </div>
      <div className="watches-item">
        <img className="watches" src="rolex.jpg" alt="Rolex Watch" />
        <h2>Rolex Watch</h2>
        <h3>$1200</h3>
        <p className="buy-now">Buy Now</p>
      </div>
      <div className="watches-item">
        <img className="watches" src="seiko.jpg" alt="Seiko Watch" />
        <h2>Seiko Watch</h2>
        <h3>$100</h3>
        <p className="buy-now">Buy Now</p>
      </div>
    </div>
  );
};

export default Page;
