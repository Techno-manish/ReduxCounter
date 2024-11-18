import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './views/HomePage';
import CounterPage from './views/CounterPage';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </>
  )
}

export default App;
