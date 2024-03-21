import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {  client1, client2,lapi6, lapi2, lapi4, lapi7 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];


export const statistics = [
    { value: '200k+', label: 'Customers' },
    { value: '100k+', label: 'Products' },
    { value: '50k+', label: 'Shops' },
];

export const products = [
    {
        imgURL: lapi4,
        name: "Lenovo Thickpad",
        price: "ksh20000",
    },
    {
        imgURL: lapi7,
        name: "Dell",
        price: "ksh24000",
    },
    {
        imgURL: lapi2,
        name: "HP",
        price: "ksh28500",
    },
    {
        imgURL: lapi6,
        name: "Apple",
        price: "ksh32000",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy amazing shopping with our complimentary shipping service."
    },
    {
        imgURL: support,
        label: "Love to serve you",
        subtext: "Our team is here to assist you every step of the way."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
];

export const reviews = [
    {
        imgURL: client1,
        customerName: 'Clive Ouma',
        rating: 4.5,
        feedback: "I am very fortunate to buy products from you,it exceeded my expectation. Strongly recommended!"
    },
    {
        imgURL: client2,
        customerName: 'Bill Mark',
        rating: 4.8,
        feedback: "The products are very awesome looking forward to buy more from you. A greatful customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "HP", link: "/" },
            { name: "Dell", link: "/" },
            { name: "Lenovo Thickpad", link: "/" },
            { name: "Apple", link: "/" },
            { name: "Toshiba", link: "/" },
            { name: "Elite HP", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "cliveouma5@gmail.com", link: "mailto:cliveouma5@gmail.com" },
            { name: "+254740719423", link: "tel:+254740719423" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];