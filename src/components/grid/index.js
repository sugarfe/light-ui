import Grid from "./Grid.vue"

Grid.install = (Vue) => {
    Vue.component(Grid.name, Grid)
}

export default Grid