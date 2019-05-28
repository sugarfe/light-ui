import components from './components/component.js'
const dynamicCallComponent = ["Popup", "Toast", "Dialog", "Picker", "ActionSheet", "Loading", "DatePicker"]
// import Style from "./style/index.scss";
export default {
    install: (Vue, option = {}) => {
        components.map((module) => {
            if (!!module.mark && !!option[module.mark]) {
                let obj = option[module.mark];
                for (let o in obj) {
                    module.props[o].default = () => {
                        return obj[o];
                    };
                }
            }
            if (dynamicCallComponent.includes(module.name)) {
                let componentOption = option[module.name.toLowerCase()] || {};
                module.install(Vue, {
                    ...componentOption,
                    dependence: {
                        ...(option.dependence || {})
                    }
                });
                Vue.prototype[`$Run${module.name}`] = module.component;
            } else {
                Vue.component(module.name, module);
            }
        })
    }
}