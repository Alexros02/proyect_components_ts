import { FC, useEffect, useState } from "react";

interface ToastAlertProps {
    type?: "info" | "success" | "warning" | "error";
    message: string;
    duration?: number;
    onClose: () => void;
}

const ToastAlert: FC<ToastAlertProps> = ({ type = "info", message, duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false); // 👉 activa salida animada
            // Espera a que termine la transición antes de desmontar
            setTimeout(() => {
                onClose();
            }, 300); // debe coincidir con la duración del fade-out
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div
            className={`
        alert alert-${type} alert-soft fixed top-20 right-4 shadow-lg z-50 max-w-sm
        transition-opacity duration-300 ease-in-out
        ${visible ? "opacity-100" : "opacity-0"}
      `}
            role="alert"
        >
            <span>{message}</span>
        </div>
    );
};

export default ToastAlert;
