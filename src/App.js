import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { BrowserRouter, Route, Link } from "react-router-dom";
import OurServices from './Components/OurServices';
import OurStaff from './Components/OurStaff';
import ContactUs from './Components/ContactUs';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter >
      <Route path="/home" component={Home} />
      <Link>
      <Route path="/signUp" component={SignUp} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/ourServices" component={OurServices} />
      <Route exact path="/ourStaff" component={OurStaff} />
      <Route exact path="/contactUs" component={ContactUs} />
      </Link>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
