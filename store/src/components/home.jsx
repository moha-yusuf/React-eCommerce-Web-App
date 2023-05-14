import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  const backgroundImageUrl = "https://source.unsplash.com/1600x900/?nature,landscape";
  const jumbotronStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    height: 'calc(100vh - 56px)', // subtract the navbar height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="container-fluid px-0">
      <div className="jumbotron jumbotron-fluid m-0 p-0" style={jumbotronStyle}>
        <div className="container text-center">
          <h1 className="text-light font-weight-bold">Shop-Ease</h1>
          <p className="lead text-light">Your one-stop shop for all your shopping needs</p>
          <Link className="btn btn-primary mt-3" to="/products">Start Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
