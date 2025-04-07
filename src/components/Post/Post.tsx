import { FC } from "react";
import { PostData } from "../../types/post";



const Post: FC<PostData> = ({ title, description, images, location }) => {

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 w-96 h-1/5 overflow-hidden">
            {images[0] && <img src={images[0]} alt={title} className="w-full h-48 object-cover" />}
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="text-sm  mt-2">{location}</div>
            </div>
        </div>
    );
};

export default Post;
