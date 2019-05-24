import GridItem from "./GridItem.vue"

GridItem.install = (Vue) => {
    Vue.component(GridItem.name, GridItem)
}

export default GridItem