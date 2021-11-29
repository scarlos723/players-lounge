import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout.jsx';
import Home from '../pages/Home.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;