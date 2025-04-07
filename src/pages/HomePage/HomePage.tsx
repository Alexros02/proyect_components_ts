    /*
    import styles from "./HomePage.module.css";
    */
    import Post from "../../components/Post/Post.tsx";
    import Modal from "../../components/Modal";
    import ToastAlert from "../../components/ToastAlert";
    import {PostData} from "../../types/post.ts";
    import {useEffect, useState} from "react";
    import {getPosts} from "../../firebase/firebaseService.ts";

    interface PostWithId extends PostData {
        id: string;
    }

    const HomePage = () => {
        const [posts, setPosts] = useState<PostWithId []>([]);
        const [toast, setToast] = useState<{ type: string; message: string } | null>(null);

        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data as PostWithId[]);
        };

        useEffect(() => {
            fetchPosts();
        }, []);

        const handlePostCreated = () => {
            setToast({ type: "success", message: "¡Publicación creada correctamente!" });
            fetchPosts(); // ✅ recarga los posts
        };

        return (
       <>
           <div className="relative">
                {toast && (
                    <ToastAlert
                        type={toast.type as "success" | "error"}
                        message={toast.message}
                        onClose={() => setToast(null)}
                        duration={3000}
                    />
                )}
           </div>
           <Modal onPostCreated={handlePostCreated} />
           <div className="w-full flex justify-center h-full flex-wrap gap-4 p-2">
               {posts.map((post) => (<Post key={post.id} {...post}></Post>))}

           </div>
       </>


    );
    };

    export default HomePage;
