import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage";
import EditInvoicePage from './pages/EditInvoicePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/edit/:id" element={<EditInvoicePage/>}/>
      </Routes>
    </Router>
  )
}

export default App