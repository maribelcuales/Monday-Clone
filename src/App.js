import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import TicketPage from './pages/TicketPage.js';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<TicketPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

