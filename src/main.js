import './style.css'
import { fade,sideSwap,dropDown,menu } from "./menu";

const nav = document.querySelector('.main-menu ul');
const navToggler = document.querySelector('.main-menu .menu-toggler');
const nav2 = document.querySelector('.main-menu2 ul');
const navToggler2 = document.querySelector('.main-menu2 .menu-toggler');
const nav3 = document.querySelector('.main-menu3 ul');
const navToggler3 = document.querySelector('.main-menu3 .menu-toggler');


menu(nav,fade,navToggler);
menu(nav2,sideSwap,navToggler2);
menu(nav3,dropDown,navToggler3);