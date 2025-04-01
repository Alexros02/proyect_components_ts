import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const MainLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet /> {/* Aquí se renderizarán las páginas */}
            </main>
            {/*<Footer />*/}
        </div>
    );
};

export default MainLayout;
