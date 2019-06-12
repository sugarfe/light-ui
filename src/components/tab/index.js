import Tab from './Tab.vue'
import TabItem from './TabItem.vue'
console.log(Tab.name)
Tab.install = Vue => {
	Vue.component(Tab.name, Tab)
}

TabItem.install = Vue => {
	Vue.component(TabItem.name, TabItem)
}
export { Tab, TabItem }
