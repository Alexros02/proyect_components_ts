import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import Header from "./components/Header"; // Asegúrate de importar aquí los estilos

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
