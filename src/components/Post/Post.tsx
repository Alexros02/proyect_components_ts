/*import { Link } from "react-router-dom";*/

interface PostCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    location: string;
}

const Post = ({ /*id,*/ title, description, image, location }: PostCardProps) => {
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 w-96 h-1/5">
            <figure className="h-1/4 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-secondary">{title}</h2>
                <p className="text-sm text-gray-500 italic">{location}</p>
                <p className="line-clamp-3">{description}</p>
                {/*<div className="card-actions justify-end">
                    <Link to={`/post/${id}`} className="btn btn-outline btn-primary btn-sm">
                        Ver más
                    </Link>
                </div>*/}
            </div>
        </div>
    );
};

export default Post;
