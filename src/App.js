import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter >
      <Route path="/home" component={Home} />
      <Link>
      <Route path="/signUp" component={SignUp} />
      <Route exact path="/signIn" component={SignIn} />
      </Link>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
