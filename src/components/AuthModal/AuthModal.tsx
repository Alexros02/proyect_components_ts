import { useState, useRef } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig"; // Ajusta esta ruta
import ToastAlert from "../ToastAlert";

const AuthModal = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [mode, setMode] = useState<"login" | "register">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toast, setToast] = useState<{ type: string; message: string } | null>(null);

    const openModal = () => {
        dialogRef.current?.showModal();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (mode === "login") {
                await signInWithEmailAndPassword(auth, email, password);
                setToast({ type: "success", message: "Has iniciado sesión correctamente." });
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                setToast({ type: "success", message: "Cuenta creada correctamente." });
            }
            dialogRef.current?.close();
        } catch (error: unknown) {
            console.error("Error de autenticación:", error);
            setToast({ type: "error",message: "Error de autenticación." });
        }
    };

    return (
        <>
            <button className="btn" onClick={openModal}>
                {mode === "login" ? "Iniciar sesión" : "Registrarse"}
            </button>

            {toast && (
                <ToastAlert
                    type={toast.type as  "success" | "error"}
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}

            <dialog className="modal" ref={dialogRef}>
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <h3 className="font-bold text-lg mb-4">
                            {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
                        </h3>

                        <input
                            type="email"
                            required
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full mb-2"
                        />

                        <input
                            type="password"
                            required
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full mb-4"
                        />

                        <button type="submit" className="btn btn-primary w-full">
                            {mode === "login" ? "Entrar" : "Registrarse"}
                        </button>

                        <p className="mt-4 text-sm text-center">
                            {mode === "login" ? (
                                <>
                                    ¿No tienes cuenta?{" "}
                                    <span
                                        onClick={() => setMode("register")}
                                        className="text-blue-500 cursor-pointer"
                                    >
                    Regístrate
                  </span>
                                </>
                            ) : (
                                <>
                                    ¿Ya tienes cuenta?{" "}
                                    <span
                                        onClick={() => setMode("login")}
                                        className="text-blue-500 cursor-pointer"
                                    >
                    Inicia sesión
                  </span>
                                </>
                            )}
                        </p>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default AuthModal;
