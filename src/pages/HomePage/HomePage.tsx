    /*
    import styles from "./HomePage.module.css";
    */
    import Post from "../../components/Post/Post.tsx"

    const HomePage = () => {
    return (
        <div className="w-full flex justify-center h-full flex-wrap gap-4 p-2">
            <Post
                id="123"
                title="Ruta por Normandía"
                description="Una ruta histórica por las playas del desembarco de Normandía durante la Segunda Guerra Mundial..."
                image="https://via.placeholder.com/400x200"
                location="Normandía, Francia"
            />
        </div>

    );
    };

    export default HomePage;
