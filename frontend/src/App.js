import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import NewTicket from './pages/NewTicket';
import PrivateRoute from './components/PrivateRoute'
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';

//We need people to be logged in to access NewTicket. It works without logging in and the backend is save becuase it only receives request from loggen in users but we still do not want guest users on the new ticket page.

function App() {
  return (
    <>
    <Router>
      <div className="container">
        < Header />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/login' element={< Login />} />
          <Route path='/register' element={< Register />} />
          <Route path='/new-ticket' element={< PrivateRoute />}>
            <Route  path='/new-ticket' element={<NewTicket />} />
          </Route> 
          <Route path='/tickets' element={< PrivateRoute />}>
            <Route  path='/tickets' element={<Tickets />} />
          </Route> 
          <Route path='/ticket/:ticketId' element={< PrivateRoute />}>
            <Route  path='/ticket/:ticketId' element={<Ticket />} />
          </Route> 
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
