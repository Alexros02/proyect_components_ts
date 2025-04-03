    /*
    import styles from "./HomePage.module.css";
    */
    import Post from "../../components/Post/Post.tsx";
    import Modal from "../../components/Modal";
    import img from "../../Assets/img.jpg";

    const HomePage = () => {
    return (
        <div className="w-full flex justify-center h-full flex-wrap gap-4 p-2">
            <Post
                id="123"
                title="Ruta por Normandía"
                description="Una ruta histórica por las playas del desembarco de Normandía durante la Segunda Guerra Mundial..."
                image={img}
                location="Normandía, Francia"
            />
            <Modal/>
        </div>

    );
    };

    export default HomePage;
