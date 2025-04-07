# Proyecto de Prueba: Google Maps API Optimization

Este es un proyecto de prueba desarrollado en **React** para integrar la API de Google Maps y optimizar el uso de los datos de localizaciones. El objetivo de este proyecto es experimentar con la integración de Google Maps, Firestore, y probar la optimización de rutas y la visualización de localizaciones.

## Tecnologías utilizadas

- **React** (v18+)
- **Tailwind CSS** (v4.x)
- **Firebase** (Firestore, Authentication)
- **Google Maps API** (JavaScript API)
- **Axios** (para realizar solicitudes HTTP)
- **DaisyUI** (para componentes de UI preestilizados)

## Características

- **Integración con Google Maps**: Carga de mapas interactivos con puntos de interés.
- **Uso de Google Places API**: Obtención de imágenes y detalles de localizaciones desde la API de Google Places.
- **Firestore**: Almacenamiento de publicaciones y rutas de usuarios.
- **Autenticación con Firebase**: Login y gestión de usuarios.
- **Optimización de rutas**: Implementación de rutas personalizadas entre puntos de interés.
- **Modo Oscuro**: Soporte para un tema oscuro en la interfaz de usuario.

## Instalación

Para instalar y ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio:
    ```bash
    git clone https://github.com/Alexros02/proyect_components_ts.git
    ```
2. Navega a la carpeta del proyecto:
    ```bash
    cd proyect_components_ts
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Crea un archivo `.env` en la raíz del proyecto con las credenciales de Firebase y la clave de API de Google:
    ```bash
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
    ```
5. Ejecuta el proyecto:
    ```bash
    npm run dev
    ```

El proyecto debería abrirse automáticamente en tu navegador predeterminado en `http://localhost:5173`.

## Funcionalidades

### Mapa interactivo
El proyecto carga un mapa de Google Maps donde los usuarios pueden ver puntos históricos. Los usuarios pueden agregar sus propias rutas entre estos puntos, creando un recorrido personalizado.

### Autenticación de usuarios
Los usuarios pueden iniciar sesión con Firebase Auth y gestionar su cuenta, lo que les permite guardar y compartir rutas históricas.

### Filtros de publicaciones
Se pueden filtrar las publicaciones según diferentes criterios, como el tipo de lugar, la época histórica y la ubicación.


