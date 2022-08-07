import './App.css';
import Header from '../Components/Common/Header/Header.Component';
import SignUp from '../Components/Pages/SignUp/SignUp.Component';
import Describe from '../Components/Common/Describe/Describe.Component'
import React from 'react';
import Footer from '../Components/Common/Footer/Footer.Component';

function App() {
  return (
    <div className="page">
      <Header className="header" />
      <div className="pageContainer">
        <Describe />
        <SignUp />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
