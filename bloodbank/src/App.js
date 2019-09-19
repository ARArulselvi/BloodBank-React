import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.react';
import Footer from './Footer/Footer.react';
import Content from './Content/Content.react';
import opos from './opos.jpg';
import Navigation from './Navigation/Navigation.react';
import ShowProfile from './ShowProfile/ShowProfile.react';
import FetchData from './FetchData/FetchData.react';


function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Navigation></Navigation> */}

      <FetchData></FetchData>
     
      
    </div>
    
  );
}

export default App;
