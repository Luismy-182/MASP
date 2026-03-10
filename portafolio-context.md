Estoy desarrollando mi portafolio profesional como desarrollador **Full-Stack Web** utilizando **React + TailwindCSS**.

Actualmente estoy construyendo la sección **“Selected Work”**, donde muestro tres proyectos principales dentro de cards con layout alternado (imagen-texto / texto-imagen).
Cada card incluye:

• Screenshot del proyecto (más adelante será un **slider con Swiper**)
• Título del proyecto
• Descripción clara del sistema
• Stack tecnológico utilizado
• Botones: “Ver proyecto” y “Ver código”

El componente actual se llama **SelectWorkCard.jsx** y está hecho con React + Tailwind.

Los tres proyectos destacados son:

**1. Fresh Coffee — Sistema de pedidos para quiosco de comida**
Aplicación full-stack donde los usuarios pueden registrarse, iniciar sesión, navegar un catálogo de productos y crear pedidos.
El sistema calcula automáticamente el total del pedido y cuenta con autenticación y rutas protegidas.
Incluye un panel administrativo para gestionar productos y visualizar pedidos.

Stack:
Laravel · React · REST API · Context API · SWR · TailwindCSS

---

**2. APV — Sistema de gestión de pacientes veterinarios (MERN)**
Aplicación web para clínicas veterinarias donde cada veterinario puede registrarse y administrar sus propios pacientes.

Características principales:
• Registro de usuarios (veterinarios)
• Login con autenticación JWT
• Recuperación de contraseña mediante email con token
• Panel privado para cada veterinario
• CRUD completo de pacientes
• Formularios que se rellenan automáticamente al editar registros
• Validaciones en tiempo real
• Cada veterinario solo puede ver y gestionar sus propios pacientes

Stack:
MongoDB · Express · React · Node.js · JWT · Context API · Mongoose · TailwindCSS

---

**3. DevJobs — Plataforma de publicación y gestión de empleos**
Aplicación desarrollada con Laravel para publicar y administrar vacantes laborales desde una plataforma tipo portal de empleo.

Incluye:
• Autenticación de usuarios
• Gestión de roles
• Panel administrativo
• CRUD de ofertas de empleo

Stack:
Laravel · Livewire · TailwindCSS · Laravel Breeze · Eloquent ORM

---

La sección “Selected Work” ya tiene el layout implementado con Tailwind, cards con sombra, bordes suaves y contenedores para imágenes.

El siguiente paso del desarrollo es **integrar un slider de screenshots usando Swiper dentro de cada card**, creando un componente reutilizable llamado **ProjectSlider.jsx** que reciba las imágenes de cada proyecto.

Quiero que el slider sea limpio, profesional y responsive, no me des código, se mi mentor.




Continuemos desde la parte donde vamos a crear el componente ProjectSlider con Swiper.