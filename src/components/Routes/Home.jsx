/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import TEST_DATA from './../Assets/data.json';
import SalesTable from './SalesTable';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(false);
      setData(TEST_DATA[0]);
      setLoading(true);
      console.log(TEST_DATA[0]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(true);
    }
  }, []);
  return (
    <>
      <div className="home-container">
        <div className='left-panel'>
          <img className="product-image" src={data.image}></img>
          <div className='title'>{data.title}</div>
          <div className='subtitle'>{data.subtitle}</div>
           {loading ?
               (
<div className='tag-container'>
          {TEST_DATA[0].tags.map((tag) => {
              return (
                <div className="tag" key={tag}>
                  <div>{tag}</div>
                </div>
              )
            })}
          </div>
              ) : (<></>)
          }

        </div>
        <div className="right-panel">

            <div className='graph'>
            <SalesTable sales={TEST_DATA[0].sales} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
