// You can name MobileMenu or whatever after import syntax

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($("#about"), "70%");
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".contact"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
