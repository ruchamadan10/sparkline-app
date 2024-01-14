import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Routes/Home';

import './App.scss';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <>
                <div className="shared-header">
                  <div className='logo'>
                     <span className="title">Stackline</span>
                  </div>
                </div>
              </>
            </Layout>
          }
        >
          {['/'].map((path) => (
            <Route index path={path} element={<Home />} key={path} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
