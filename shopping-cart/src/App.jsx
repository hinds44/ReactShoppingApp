import reactLogo from './assets/react.svg'
import './App.css'
import NavBarComponent from './components/NavBarComponent'
import { Route, Routes } from 'react-router-dom';
import CartComponent from './components/CartComponent';
import NotFoundComponent from './components/NotFoundComponent';
import GetProductsComponent from './components/GetProductsComponent';
import IntroComponent from './components/IntroComponent';

function App() {

    return (
        <div>
            <NavBarComponent />

            <div className="container">
                <p className="h4">&nbsp;</p>

            <Routes>
                <Route path="/" element={<IntroComponent />} />
                <Route path="/products" element={<GetProductsComponent />} />
                    <Route path="/cart" element={<CartComponent />} />
                <Route path="/*" element={<NotFoundComponent />} />
            </Routes>
            </div>
        </div>
    )
}

export default App
