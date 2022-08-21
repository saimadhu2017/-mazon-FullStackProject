import './App.css';
import Header from '../Components/Common/Header/Header.Component';
import Footer from '../Components/Common/Footer/Footer.Component';
import AssocSignInSignUp from '../Components/Associations/AssocSignInSignUp/AssocSignInSignUp';

function App() {
  return (
    <div className="page">
      <Header className="header" />
      <AssocSignInSignUp />
      <Footer className="footer" />
    </div>
  );
}

export default App;
