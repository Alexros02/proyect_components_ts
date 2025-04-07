import {useRef, useState} from "react";
import {PostData} from "../../types/post.ts";
import {createPost} from "../../firebase/firebaseService.ts";

const Modal = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");

    const openModal = () => {
            dialogRef.current?.showModal();
    };

    const handleSubmit= async ()=>{
        const newPost : PostData = {
            userId:"userId123",
            title: title,
            description: description,
            images: [image],
            location: location
        };

        try {
            await createPost(newPost);
            setTitle("");
            setDescription("");
            setLocation("");
            setImage("");
            dialogRef.current?.close();
        } catch (error) {
            console.error("Error creating post:", error);
        }

    }

    return (
        <>
            <button className="btn fixed bottom-6 right-6" onClick={openModal}>
                Crear publicación
            </button>

            <dialog id="my_modal_3" className="modal" ref={dialogRef}>
                <div className="modal-box w-full max-w-xl p-6 relative">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="text-2xl font-semibold mb-4">Nueva Publicación</h3>

                    <div className="flex flex-col gap-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Título de la ruta</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descripción</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ubicación</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="location"
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">URL de la imagen</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="image"
                                placeholder="https://miimagen.com/foto.jpg"
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-end gap-2 pt-2">
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                                Publicar
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Modal;
