const rutaAPV = '/img/projects/apv/';
const rutaDevjobs = '/img/projects/devjobs/';
const rutaFreshCoffe = '/img/projects/fresh-coffee/';

const freshCoffee = {
    id: 'freshCoffee',
    title: 'Fresh Coffee — Sistema de pedidos para quiosco de comida',
    description: 'Aplicación full-stack para la gestión de pedidos en un quiosco de comida.Los usuarios pueden registrarse, explorar un catálogo de bebidas y platillos, crear pedidos y calcular automáticamente el total de la orden. Incluye autenticación de usuarios, protección de rutas y un panel administrativo para gestionar productos y visualizar pedidos en tiempo real.',
    tags: ['Laravel', 'React', 'REST API', 'Context API', 'SWR', 'TailwindCSS'],
    images: [`${rutaFreshCoffe}1-login.png`, `${rutaFreshCoffe}2-dashboard.png`, `${rutaFreshCoffe}3-pedido.png`, `${rutaFreshCoffe}4-pedidos.png`, `${rutaFreshCoffe}5-agotar.png`],
    backend: 'https://github.com/Luismy-182/fresh-coffee-backend',
    frontend: 'https://github.com/Luismy-182/fresh-coffee-frontend'
}

const apv = {
    id: 'apv',
    title: 'APV — Sistema de gestión de pacientes veterinarios',
    description: 'Aplicación web desarrollada con el stack MERN para la gestión de pacientes en clínicas veterinarias.Permite a los veterinarios registrarse, autenticarse y administrar el registro de sus propios pacientes mediante un panel privado. El sistema incluye recuperación de contraseña por correo electrónico, validaciones en tiempo real y control de acceso para garantizar que cada usuario gestione únicamente su propia información.',
    tags: ['MongoDB', 'Express', 'React', 'Nodejs', 'JWT', 'Context API', 'Mongoose', 'TailwindCSS'],
    images: [`${rutaAPV}1-login.png`, `${rutaAPV}2-form.png`, `${rutaAPV}3-created.png`, `${rutaAPV}4-edit.png`],
    backend: 'https://github.com/Luismy-182/apv-backend',
    frontend: 'https://github.com/Luismy-182/apv-frontend.git'

}
const devJobs = {
    id: 'devJobs',
    title: 'DevJobs — Plataforma de publicación y gestión de empleos',
    description: 'Aplicación web desarrollada con Laravel que permite publicar y gestionar vacantes laborales desde una plataforma similar a un portal de empleo. Incluye autenticación de usuarios, gestión de roles y panel administrativo para administrar ofertas de trabajo.',
    tags: ['Laravel', 'Livewire', 'TailwindCSS', 'Laravel Breeze', 'Eloquent ORM'],
    images: [`${rutaDevjobs}1-dashboard.png`, `${rutaDevjobs}2-vacantes.png`, `${rutaDevjobs}3-vacante.png`, `${rutaDevjobs}4-admin.png`, `${rutaDevjobs}5-publicar.png`],
    backend:'https://github.com/Luismy-182/devjobs-platform'
}

export {
    apv,
    devJobs,
    freshCoffee
}