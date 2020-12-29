import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import FrontPageNews from './pages/FrontPage';
import EntertainmentPage from './pages/EntertainmentPage';

const App = () => {
  return (
    <Router>
    <Navbar />
    <main className="py-3">
      <div className="container">
        <Route path="/" component={Home} exact />
        <Route path="/topnews" component={FrontPageNews} />
        <Route path="/entertainment" component={EntertainmentPage} />
      </div>
    </main>
    
  </Router>
  );
};

export default App;
