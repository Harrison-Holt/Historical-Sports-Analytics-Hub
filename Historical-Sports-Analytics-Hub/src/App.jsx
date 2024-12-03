import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import Register from './Frontend/Register'

function App() {
  <Router>
    <Routes>
      <Route path="/" element={<Register/>} />
    </Routes>
  </Router>
}

export default App
