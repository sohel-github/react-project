import { FaTwitter, FaFacebookF, FaInstagramSquare, FaYoutube } from "react-icons/fa";

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home'
    },
    {
        id: 2,
        url: '/about',
        text: 'about us'
    },
    {
        id: 3,
        url: '/service',
        text: 'our services'
    },
    {
        id: 4,
        url: '/portfolio',
        text: 'our portfolio'
    },
    {
        id: 5,
        url: '/contact',
        text: 'our contact'
    }
];

export const social = [
    {
        id: 1,
        url: 'http://facebook.com',
        icon: <FaFacebookF />
    },
    {
        id: 2,
        url: 'http://twitter.com',
        icon: <FaTwitter />
    },
    {
        id: 3,
        url: 'http://instagram.com',
        icon: <FaInstagramSquare />
    },
    {
        id: 4,
        url: 'http://youtube.com',
        icon: <FaYoutube />
    }
]