export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: '10ktoCAF',
    subtitle: 'Necesita 10k para certificar en CAF',
    description: 'Solo 10k nos separan de la inscripcion al maraton CAF',
    image: {
        src: '/public/Maraton-CAF-2023.jpg',
        alt: 'Certificacion para CAF'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Articulos',
            href: '/projects'
        },
        {
            text: 'Participante',
            href: '/participante'
        },
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Solo 10K separan a muchos corredores poder registrarse en la CAF',
        text: "Estamos juntando mas de **100** personas para hacer un chequeo de 10K validado para la CAF, conocemos varias personas y algunos amigos que les falta un registro 10K para poderse inscribir en esta carrera. Asi puedas registrarte <a href='https://www.caf.com/es/especiales/maraton/'>#MARATON-CAF</a>.",
        image: {
            src: '/Maraton-CAF-2023.jpg',
            alt: 'tu medalla para la caf'
        },
        actions: [
            {
                text: 'Registrase',
                href: '/participante'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
