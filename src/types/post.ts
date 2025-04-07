export interface PostData {
    userId: string;
    title: string;
    description: string;
    images: string[]; // URLs de imágenes
    location: string; // Solo texto por ahora
}
