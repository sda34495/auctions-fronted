import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auctions from './pages/Auctions'
import CreateAuction from './pages/CreateAuction'
import PrivateRoute from './components/PrivateRoute'
import Logout from './components/Logout'

function App() {

  return (



    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auctions" element={<PrivateRoute><Auctions /></PrivateRoute>} />
        <Route path="/create-auction" element={<PrivateRoute><CreateAuction /></PrivateRoute>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
