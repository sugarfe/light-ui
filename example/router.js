import Index from "./pages/Index.vue";
import componentExamplePages from "@example/assets/component.router.json"
let pages = componentExamplePages.reduce((a, b) => {
    return a.concat(b.items)
}, [])

export default [
    {
        "path": "/",
        component: Index
    },
    ...pages.map((item) => {
        return {
            "path": `/${item}`,
            component: () => import(`./pages/${item}/${item.replace(/^\S/, function (s) { return s.toUpperCase() })}.vue`)
        }
    })
]