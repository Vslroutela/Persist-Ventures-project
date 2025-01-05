import React from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar"; 
import Sidebar from "./components/Sidebar"; // Importing the Sidebar component
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Login from "./components/Login"; // Importing the Login component
import Signup from "./components/Signup"; // Importing the Signup component
import { router } from "./config/config";
import Search from "./components/Search/Search";
import PayoutCalculator from './components/PayoutCalculatorFinal';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar /> {/* Adding the NavBar component */}
        <Sidebar /> {/* Adding the Sidebar component */}
        <div className="news-container">
          <Routes>
            {router.map((path) => (
              <Route
                exact
                key={uuidv4()}
                path={path.path}
                element={
                  <News
                    key={path.key}
                    newscategory={path.category}
                    country={path.country}
                  />
                }
              />
            ))}
            <Route path="/search/:query" element={<Search />} />
            <Route path="/payout-calculator" element={<PayoutCalculator />} /> {/* Adding route for PayoutCalculator */}
            <Route path="/login" element={<Login />} /> {/* Adding route for Login */} 
            <Route path="/signup" element={<Signup />} /> {/* Adding route for Signup */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;