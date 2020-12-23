import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from './pages/Home';


const App=() => {
  return (
<Router>
<NavBar/>
<main className="py-3">
        <div className="container">
          <Route path="/" component={Home} exact/>
        
        </div>
      </main>
</Router>
  );
}

export default App;
