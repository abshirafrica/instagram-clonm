
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";

import Header from "./components/Header";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="max-w-5xl mx-auto p-5">
        <Router>
           <Header />
           <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/profile" element={<Profile />} />
                
           </Routes>
        
        </Router>
   
    </div>
  );
}

export default App;
