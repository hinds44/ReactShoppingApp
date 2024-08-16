import reactLogo from './assets/react.svg'
import './App.css'
import NavBarComponent from './components/NavBarComponent'
import { Route, Routes } from 'react-router-dom';
import ProductListComponent from './components/ProductListComponent';
import NotFoundComponent from './components/NotFoundComponent';

function App() {

    return (
    <NavBarComponent>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Learn React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
          </div>

          <Routes>
              <Route path='/' element={<ProductListComponent />} />
              <Route path="*" element={<NotFoundComponent />} />
          </Routes>
    </NavBarComponent>
  )
}

export default App
