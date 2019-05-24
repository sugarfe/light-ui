import Button from './Button.vue'

Button.install = (Vue) => {
    Vue.component(Button.name, Button)
}

export default Button