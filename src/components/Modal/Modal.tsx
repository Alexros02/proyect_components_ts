import {useRef, useState} from "react";
import {PostData} from "../../types/post.ts";
import {createPost} from "../../firebase/firebaseService.ts";

interface ModalProps {
    onPostCreated: () => void;
}

const Modal = ({ onPostCreated }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");

    const openModal = () => {
        dialogRef.current?.showModal();
    };

    const handleSubmit = async () => {
        const newPost: PostData = {
            userId: "userId123",
            title,
            description,
            images: [image],
            location
        };

        try {
            await createPost(newPost);
            setTitle("");
            setDescription("");
            setLocation("");
            setImage("");

            dialogRef.current?.close();
            onPostCreated(); // 👈 Avisamos al padre (HomePage)
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <>
            <button className="btn fixed bottom-6 right-6" onClick={openModal}>
                Crear publicación
            </button>

            <dialog id="my_modal_3" className="modal" ref={dialogRef}>
                <div className="modal-box w-full max-w-xl p-6 relative">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-2xl font-semibold mb-4">Nueva Publicación</h3>

                    <div className="flex flex-col gap-4">
                        {/* Inputs */}
                        <input className="input input-bordered" placeholder="Título"
                               value={title} onChange={(e) => setTitle(e.target.value)} />
                        <textarea className="textarea textarea-bordered" placeholder="Descripción"
                                  value={description} onChange={(e) => setDescription(e.target.value)} />
                        <input className="input input-bordered" placeholder="Ubicación"
                               value={location} onChange={(e) => setLocation(e.target.value)} />
                        <input className="input input-bordered" placeholder="URL de imagen"
                               value={image} onChange={(e) => setImage(e.target.value)} />

                        <div className="flex justify-end pt-2">
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
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
