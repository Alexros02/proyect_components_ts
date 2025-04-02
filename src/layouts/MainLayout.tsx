import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-1 p-4">
                <Outlet /> {/* Renderiza las páginas */}
            </main>
            {/*<footer className="bg-neutral text-center p-4">&copy; 2025 Battle Trails</footer>*/}
        </div>
    );
};

export default MainLayout;