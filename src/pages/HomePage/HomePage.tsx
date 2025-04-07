    /*
    import styles from "./HomePage.module.css";
    */
    import Post from "../../components/Post/Post.tsx";
    import Modal from "../../components/Modal";

    import {PostData} from "../../types/post.ts";
    import {useEffect, useState} from "react";
    import {getPosts} from "../../firebase/firebaseService.ts";

    interface PostWithId extends PostData {
        id: string;
    }

    const HomePage = () => {
        const [posts, setPosts] = useState<PostWithId []>([]);

        useEffect(() => {
            const fetchPosts = async () => {
                const data = await getPosts();
                setPosts(data as PostWithId[]);
            };
            fetchPosts();
        })
    return (
        <div className="w-full flex justify-center h-full flex-wrap gap-4 p-2">
            {posts.map((post) => (<Post key={post.id} {...post}></Post>))}
            <Modal/>
        </div>

    );
    };

    export default HomePage;
