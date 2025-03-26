
# Dentics
Prueba técnica

## Características

- **Crear citas**: Los usuarios pueden seleccionar un doctor, ingresar su información de contacto y agendar una cita.
- **Suscripción al newsletter**: Los usuarios pueden suscribirse al newsletter con su correo electrónico.
- **Autenticación de token**: Utiliza un sistema de **token de acceso** para autenticar las solicitudes a las APIs.

## Tecnologías

- **Frontend**: React.js con **Tailwind CSS** para los estilos.
- **Estado global**: Context API para manejar el **token** de autenticación.
- **API**: Axios para las solicitudes HTTP hacia las APIs externas (obtener doctores, crear citas, suscripción al newsletter).
- **Variables de entorno**: Las claves de autenticación y configuraciones sensibles se manejan a través de **`.env`**.

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/mapper895/dentics.git
   ```

2. **Instala las dependencias**:

   Asegúrate de tener **Node.js** y **npm** instalados en tu máquina. Luego ejecuta:

   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:

   Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

   ```env
   REACT_APP_ORD_PROYECTO=your_project_key_here
   ```

   Esto es necesario para enviar el **`ordProyecto`** en las solicitudes a las APIs.

4. **Inicia el servidor de desarrollo**:

   ```bash
   npm start
   ```

   La aplicación se ejecutará en [http://localhost:3000](http://localhost:3000).

## Uso

### Crear Cita

1. Dirígete al formulario de **Crear Cita** en la aplicación.
2. Ingresa tu **nombre**, **teléfono**, **fecha de cita**, **doctor** y un **mensaje**.
3. Haz clic en **Confirm Appointment** para enviar la solicitud.
4. La cita será registrada en la API correspondiente si todo está correcto.

### Suscripción al Newsletter

1. Dirígete al formulario de **Newsletter**.
2. Ingresa tu **nombre** y **correo electrónico**.
3. Haz clic en **Subscribe Now** para enviar la solicitud.
4. El correo se registrará en la API de newsletter si todo está correcto.

## Estructura del Proyecto

```
src/
  ├── components/               # Componentes de la aplicación (Formulario de cita, Newsletter, etc.)
  ├── context/                  # Manejo del estado global (TokenContext)
  ├── services/                 # Servicios para consumir las APIs (appointmentService, newsletterService)
  ├── assets/                   # Archivos estáticos (imágenes, íconos)
  ├── App.js                    # Componente principal de la aplicación
  ├── index.js                  # Punto de entrada de la aplicación
  ├── .env                      # Variables de entorno
  └── package.json               # Dependencias y configuraciones del proyecto
```

## Funcionalidades

### **`TokenContext.js`**

Este contexto se encarga de almacenar y proporcionar el **token** a lo largo de toda la aplicación. El token se obtiene desde la API al momento de la autenticación y se utiliza para autorizar solicitudes a los endpoints protegidos.

### **`appointmentService.js`**

En este archivo se encuentra la lógica para interactuar con la API que maneja las **citas médicas**. El servicio realiza solicitudes **POST** para crear nuevas citas, enviando los datos del formulario (nombre, teléfono, fecha, doctor, mensaje) y los headers necesarios como el **`ordProyecto`** y **`ordCandidato`**.

### **`newsletterService.js`**

Este archivo contiene la lógica para suscribir a los usuarios al **newsletter**. Realiza una solicitud **POST** para registrar un nuevo correo, enviando tanto el **nombre** como el **correo electrónico** del usuario.
