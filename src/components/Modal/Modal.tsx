import { useRef } from "react";

const Modal = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
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
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descripción</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                name="description"
                                required
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
                                required
                            />
                        </div>

                        <div className="flex justify-end gap-2 pt-2">
                            <button type="submit" className="btn btn-primary">
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
