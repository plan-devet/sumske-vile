// Import our custom CSS
import '../scss/styles.scss';

// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover, Tooltip, Collapse } from 'bootstrap';

// Init tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))

// Close navbar on click when in collapsed mode
// ref: https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new Collapse(menuToggle, {toggle: false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
      if (bsCollapse._isShown()) {
        bsCollapse.hide();
      }
    })
})
