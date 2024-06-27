import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, createContext } from 'react';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { Profile } from './pages/Profile';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Murphy");
  return (
    <div className="App">
    <AppContext.Provider value={{username, setUsername}}>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>

    </div>
  );
}

export default App;
