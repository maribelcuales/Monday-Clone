import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav.js';
import Dashboard from './pages/Dashboard.js';
import TicketPage from './pages/TicketPage.js';


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<TicketPage />} />
          <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

