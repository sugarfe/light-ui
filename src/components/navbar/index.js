import Navbar from './Navbar.vue'

Navbar.install = Vue => {
	Vue.component(Navbar.name, Navbar)
}

export default Navbar
