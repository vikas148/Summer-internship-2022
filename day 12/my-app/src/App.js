import React, { useState } from 'react'
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

function App() {
  const [image, setImage] = useState([])

  const Getimage = () => {
    axios.get("https://api.unsplash.com/search/photos?page=1&query=plane&client_id=mtpY0NRCgNOcpVVUK4NyFIVsgncFbazHWeYSTP2twaU")
      .then((response) => {
        // console.log(response);
        setImage(response.data.results)
      })
  }
  return (
    <>
      <div className="container my-2" >
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={Getimage} > Get images </button>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            image.map((value, index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{width: "18rem"}}>
                    <img src={value.urls.small} className="card-img-top" alt="image" />

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
