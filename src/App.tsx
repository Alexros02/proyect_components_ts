import { useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

const App = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { index: true, element: <HomePage /> },
            ],
        },
        //{ path: "*", element: <NotFound /> }, // Página 404
    ]);

    return routes;
};

export default App;
