const rutaAPV = '/img/projects/apv/';
const rutaDevjobs = '/img/projects/devjobs/';
const rutaFreshCoffe = '/img/projects/fresh-coffee/';

const freshCoffee = {
    id: 'freshCoffee',
    title: 'Fresh Coffee — Sistema de pedidos para quiosco de comida',
    heroTitle: 'Fresh Coffee',
    subtitle: 'Sistema de pedidos en línea para quioscos de comida, con gestión en tiempo real y panel administrativo.',
    heroImage: `${rutaFreshCoffe}2-dashboard.png`,
    description: 'Aplicación full-stack para la gestión de pedidos en un quiosco de comida.Los usuarios pueden registrarse, explorar un catálogo de bebidas y platillos, crear pedidos y calcular automáticamente el total de la orden. Incluye autenticación de usuarios, protección de rutas y un panel administrativo para gestionar productos y visualizar pedidos en tiempo real.',
    longDescription: 'Fresh Coffee es una aplicación full-stack orientada a la gestión de pedidos en un quiosco de comida, diseñada para ofrecer una experiencia fluida tanto para el usuario final como para el administrador del sistema. Desde el lado del cliente, los usuarios pueden registrarse, autenticarse y explorar un catálogo de productos organizado por categorías. La aplicación permite construir pedidos dinámicos, calcular automáticamente el total en tiempo real y dar seguimiento a cada orden dentro de un flujo controlado. Todo esto con validaciones en frontend que garantizan una interacción rápida y consistente. A nivel administrativo, el sistema permite gestionar productos y pedidos en tiempo real. Los administradores pueden habilitar o deshabilitar platillos según la disponibilidad de ingredientes, manteniendo el catálogo actualizado sin afectar la experiencia del usuario. El backend fue desarrollado con Laravel siguiendo el patrón MVC, implementando controladores, modelos con Eloquent ORM, migraciones y seeders para estructurar la base de datos. La autenticación se maneja mediante Personal Access Tokens, junto con políticas y middlewares personalizados para proteger rutas y controlar el acceso. En el frontend, se utilizó React con Context API para la gestión del estado global, junto con hooks como useState y useEffect para el manejo de la lógica del lado del cliente. El consumo de la API se realiza mediante Axios y la sincronización de datos del servidor se optimiza utilizando SWR. Este proyecto refleja un enfoque claro en la separación de responsabilidades entre frontend y backend, así como en la construcción de una arquitectura mantenible y escalable.',
    tags: ['Laravel', 'React', 'REST API', 'Context API', 'SWR', 'TailwindCSS'],
    images: [`${rutaFreshCoffe}1-login.png`, `${rutaFreshCoffe}2-dashboard.png`, `${rutaFreshCoffe}3-pedido.png`, `${rutaFreshCoffe}4-pedidos.png`, `${rutaFreshCoffe}5-agotar.png`],
    trouble: 'Los negocios pequeños que manejan pedidos manualmente dependen de menús físicos y procesos informales, lo que genera errores en pedidos, información desactualizada y falta de control sobre las órdenes activas.',
    context: 'Este sistema está pensado para quioscos de comida o cafeterías con alta rotación de pedidos, donde la rapidez, claridad en el menú y control de órdenes son fundamentales para la operación diaria.',
    impact: ['Los precios y productos no se actualizaban en tiempo real.', 'No existía un seguimiento claro de los pedidos.', 'Se generaban errores al tomar órdenes.', 'Los clientes recibían información incorrecta sobre disponibilidad.', 'Mala experiencia tanto para el cliente como para el negocio.'],
    backend: 'https://github.com/Luismy-182/fresh-coffee-backend',
    frontend: 'https://github.com/Luismy-182/fresh-coffee-frontend',
    solution: ['Se desarrolló un sistema de pedidos digital que permite a los clientes explorar un menú actualizado en tiempo real, crear órdenes dinámicas y recibir confirmación inmediata. ', 'El sistema elimina la dependencia de menús físicos y procesos manuales integrando un panel administrativo donde se pueden gestionar productos ', 'Disponibilidad y pedidos activos de forma centralizada. '],
    results: ['Creación de pedidos en tiempo real ', 'Panel,administrativo para gestión de productos ', 'Actualización dinámica de disponibilidad ', 'Seguimiento de órdenes activas '],
    features: [
        {
            title: "Gestión de pedidos en tiempo real",
            description: "Permite crear órdenes dinámicamente con actualización instantánea del estado.",
            icon: "shopping-cart"
        },
        {
            title: "Autenticación y control de acceso",
            description: "Protección de rutas mediante tokens y validación de usuarios.",
            icon: "shield-check"
        },
        {
            title: "Panel administrativo dinámico",
            description: "Gestión de productos y pedidos desde una interfaz centralizada.",
            icon: "layout-dashboard"
        },
        {
            title: "Sincronización eficiente de datos",
            description: "Actualización automática de información usando SWR para mejorar rendimiento.",
            icon: "refresh-cw"
        },
        {
            title: "Gestión de estado global",
            description: "Uso de Context API para centralizar y optimizar el flujo de datos.",
            icon: "brain"
        },
        {
            title: "Interfaz adaptable (responsive)",
            description: "Diseño optimizado para dispositivos móviles y escritorio.",
            icon: "smartphone"
        }
    ]
}

const apv = {
    id: 'apv',
    title: 'APV — Sistema de gestión de pacientes veterinarios',
    heroTitle: 'APV',
    subtitle: 'Gestión de pacientes con autenticación segura y arquitectura MERN.',
    heroImage: `${rutaAPV}2-form.png`,
    description: 'Aplicación web desarrollada con el stack MERN para la gestión de pacientes en clínicas veterinarias.Permite a los veterinarios registrarse, autenticarse y administrar el registro de sus propios pacientes mediante un panel privado. El sistema incluye recuperación de contraseña por correo electrónico, validaciones en tiempo real y control de acceso para garantizar que cada usuario gestione únicamente su propia información.',
    longDescription: 'APV es una aplicación web construida con el stack MERN enfocada en la gestión de pacientes dentro de clínicas veterinarias, donde cada usuario (veterinario) administra de forma privada su propia información. El sistema permite el registro y autenticación de usuarios mediante JWT, incorporando un flujo completo de verificación de cuenta por correo electrónico. Durante el registro, se genera un token único que se almacena en la base de datos y se envía al usuario mediante un enlace de activación. Al acceder a este enlace, el sistema valida el token utilizando parámetros dinámicos en la URL, permitiendo activar la cuenta únicamente si el token coincide. Una vez utilizado, el token se invalida, evitando reutilización y reduciendo registros falsos. Además, se implementa recuperación de contraseña mediante un flujo similar basado en tokens de un solo uso enviados por correo electrónico, garantizando seguridad en el proceso de restablecimiento. Cada veterinario tiene acceso a un panel protegido donde puede gestionar el ciclo completo de vida de sus pacientes. La aplicación implementa un CRUD completo, permitiendo crear, editar, consultar y eliminar registros. Al editar un paciente, los formularios se autocompletan con la información previamente registrada, mejorando la experiencia de usuario y reduciendo errores. Todas las operaciones están alineadas con los verbos HTTP (GET, POST, PUT, DELETE), manteniendo una estructura clara y consistente en la API. A nivel de backend, se utilizó Node.js con Express siguiendo una arquitectura MVC. La base de datos está gestionada con MongoDB y Mongoose como ORM, permitiendo modelar la información de forma eficiente. Se implementaron rutas protegidas, middlewares personalizados y validaciones constantes para garantizar la integridad de los datos y el control de acceso por usuario. En el frontend, React maneja la interfaz mediante componentes reutilizables. El estado global se gestiona con Context API, mientras que hooks como useState y useEffect controlan la lógica del ciclo de vida. La comunicación con el backend se realiza mediante Axios, manteniendo sincronización constante de los datos. Este proyecto demuestra la implementación de autenticación robusta, verificación de usuarios por correo electrónico y control de acceso seguro en una aplicación real.',
    tags: ['MongoDB', 'Express', 'React', 'Nodejs', 'JWT', 'Context API', 'Mongoose', 'TailwindCSS'],
    images: [`${rutaAPV}1-login.png`, `${rutaAPV}2-form.png`, `${rutaAPV}3-created.png`, `${rutaAPV}4-edit.png`],
    backend: 'https://github.com/Luismy-182/apv-backend',
    frontend: 'https://github.com/Luismy-182/apv-frontend.git',
    trouble: 'Las clínicas veterinarias pequeñas suelen gestionar la información de pacientes de forma manual o con herramientas no centralizadas, lo que provoca pérdida de datos, dificultad para dar seguimiento a historiales médicos y falta de control sobre la información de cada cliente.',
    context: 'El sistema está pensado para veterinarios que necesitan administrar múltiples pacientes de forma privada, segura y organizada, manteniendo control total sobre su información sin compartir datos con otros usuarios.',
    impact: [
        'Pérdida o duplicación de información de pacientes.',
        'Dificultad para consultar historiales médicos.',
        'Falta de control sobre qué usuario accede a los datos.',
        'Procesos manuales que consumen tiempo.',
        'Riesgos de seguridad al no tener autenticación robusta.'
    ],
    solution: [
        'Se desarrolló una aplicación web con autenticación basada en JWT que permite a cada veterinario gestionar su propia información de forma privada.',
        'Se implementó un sistema de verificación de cuentas por correo electrónico mediante tokens únicos, garantizando que solo usuarios válidos accedan al sistema.',
        'Se construyó un panel protegido donde cada usuario puede realizar operaciones CRUD completas sobre sus pacientes, con validaciones y control de acceso en cada petición.'
    ],
    results: [
        'Gestión centralizada de pacientes por usuario.',
        'Autenticación segura con verificación por correo electrónico.',
        'Recuperación de contraseña mediante tokens de un solo uso.',
        'Control de acceso que garantiza privacidad de datos.',
        'Flujo completo CRUD optimizado para la gestión diaria.'
    ],
    features: [
        {
            title: "Autenticación con JWT",
            description: "Sistema seguro de autenticación basado en tokens para proteger rutas y sesiones de usuario.",
            icon: "shield-check"
        },
        {
            title: "Verificación de cuenta por email",
            description: "Activación de cuentas mediante tokens únicos enviados al correo del usuario.",
            icon: "refresh-cw"
        },
        {
            title: "Recuperación de contraseña segura",
            description: "Flujo de recuperación con tokens de un solo uso para garantizar seguridad.",
            icon: "shield-check"
        },
        {
            title: "CRUD de pacientes",
            description: "Gestión completa de pacientes con creación, edición, consulta y eliminación de registros.",
            icon: "layout-dashboard"
        },
        {
            title: "Arquitectura MERN",
            description: "Backend con Node y Express, base de datos MongoDB y frontend en React.",
            icon: "brain"
        },
        {
            title: "Panel privado por usuario",
            description: "Cada veterinario accede únicamente a su propia información mediante control de acceso.",
            icon: "smartphone"
        }
    ]


}
const devJobs = {
    id: 'devJobs',
    title: 'DevJobs — Plataforma de publicación y gestión de empleos',
    heroTitle: 'DevJobs',
    subtitle: 'Gestión de vacantes con roles y autenticación en Laravel.',
    heroImage: `${rutaDevjobs}1-dashboard.png`,
    description: 'Aplicación web desarrollada con Laravel que permite publicar y gestionar vacantes laborales desde una plataforma similar a un portal de empleo. Incluye autenticación de usuarios, gestión de roles y panel administrativo para administrar ofertas de trabajo.',
    longDescription: 'DevJobs es una aplicación web monolítica desarrollada con Laravel que simula el funcionamiento de una plataforma de publicación y gestión de empleos, similar a un portal de reclutamiento. El sistema incluye un flujo completo de autenticación de usuarios utilizando Laravel Breeze, incorporando registro, inicio de sesión, recuperación de contraseña y verificación de cuenta por correo electrónico. Durante el registro, se genera un token único que se almacena en la base de datos y se envía al usuario mediante un enlace de activación. Al acceder a este enlace, el sistema valida el token y activa la cuenta únicamente si coincide, invalidándolo posteriormente para evitar reutilización y mejorar la seguridad del sistema. También se implementa recuperación de contraseña mediante tokens de un solo uso enviados por correo electrónico, asegurando un proceso controlado y seguro. La aplicación incorpora un sistema de roles que diferencia entre reclutadores y candidatos, definiendo permisos específicos para cada tipo de usuario. Los reclutadores pueden crear, editar y eliminar vacantes, mientras que los candidatos pueden explorar ofertas disponibles y postularse. El sistema está construido siguiendo el patrón MVC, utilizando controladores, modelos con Eloquent ORM y relaciones entre entidades para estructurar correctamente la lógica del negocio. Se integró Livewire para la construcción de componentes dinámicos sin necesidad de recargar la página, mejorando la experiencia de usuario dentro de una arquitectura monolítica. Además, se implementan políticas (policies) y middlewares para controlar el acceso a las diferentes funcionalidades del sistema. El proyecto incluye migraciones, seeders y rutas amigables que optimizan la navegación. DevJobs representa una aplicación completa del lado del servidor, donde se prioriza la seguridad en autenticación, la organización del código y la implementación de funcionalidades reales de un producto.',
    tags: ['Laravel', 'Livewire', 'TailwindCSS', 'Laravel Breeze', 'Eloquent ORM'],
    images: [`${rutaDevjobs}1-dashboard.png`, `${rutaDevjobs}2-vacantes.png`, `${rutaDevjobs}3-vacante.png`, `${rutaDevjobs}4-admin.png`, `${rutaDevjobs}5-publicar.png`],
    backend: 'https://github.com/Luismy-182/devjobs-platform',
    trouble: 'Las empresas pequeñas y reclutadores independientes carecen de una plataforma centralizada para publicar y gestionar vacantes, lo que dificulta la organización de postulaciones y el control del proceso de contratación.',
    context: 'El sistema está enfocado en plataformas de empleo donde existen distintos tipos de usuarios (reclutadores y candidatos), cada uno con permisos y funcionalidades específicas dentro del flujo de contratación.',
    impact: [
        'Publicación desorganizada de vacantes.',
        'Falta de control sobre quién puede editar ofertas.',
        'Dificultad para gestionar postulaciones.',
        'Procesos manuales en la selección de candidatos.',
        'Experiencia poco clara para usuarios.'
    ],
    solution: [
        'Se desarrolló una plataforma web basada en Laravel que permite la gestión completa de vacantes con autenticación y control de roles.',
        'Se implementó un sistema de roles que diferencia entre reclutadores y candidatos, definiendo permisos específicos para cada uno.',
        'Se integró Livewire para construir interfaces dinámicas sin recargas, mejorando la experiencia de usuario dentro de una arquitectura monolítica.'
    ],
    results: [
        'Publicación y gestión de vacantes en un solo sistema.',
        'Control de acceso basado en roles de usuario.',
        'Experiencia dinámica sin recargas con Livewire.',
        'Flujo completo de autenticación y verificación.',
        'Organización clara del proceso de contratación.'
    ],
    features: [
        {
            title: "Sistema de roles",
            description: "Diferenciación entre reclutadores y candidatos con permisos específicos.",
            icon: "shield-check"
        },
        {
            title: "Gestión de vacantes",
            description: "Creación, edición y eliminación de ofertas laborales desde el panel.",
            icon: "layout-dashboard"
        },
        {
            title: "Autenticación completa",
            description: "Registro, login, verificación de cuenta y recuperación de contraseña.",
            icon: "refresh-cw"
        },
        {
            title: "Componentes dinámicos con Livewire",
            description: "Interacciones en tiempo real sin recargar la página.",
            icon: "brain"
        },
        {
            title: "Arquitectura MVC",
            description: "Estructura organizada utilizando controladores, modelos y rutas.",
            icon: "layout-dashboard"
        },
        {
            title: "Interfaz responsive",
            description: "Diseño adaptable para dispositivos móviles y escritorio.",
            icon: "smartphone"
        }
    ]
}

export const listaProyectos = [freshCoffee, apv, devJobs];
