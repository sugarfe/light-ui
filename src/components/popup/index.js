import PopupView from './Popup.vue'
class Popup {
    constructor(component = {}, option = {}) {
        this.popupViewOptionScope = [
            "position",
            "isMaskClose",
            "isMask",
            "size",
            "distance",
            "onPopupClose",
            'onMaskClose',
            'onAfterLeave',
            'onAfterEnter'
        ];
        this.option = this.initOption(option);
        this.init(component, this.option);
    }
    init(component, option) {
        for (let o in this.$option.dependence) {
            component[o] = this.$option.dependence[o]
        }

        this.instance = new this.$vue(
            {
                el: document.createElement('div'),
                render(h) {
                    return h(
                        PopupView, option.popupOption,
                        [
                            h(
                                component,
                                option.componentOption,
                                this.$slots.default
                            )
                        ]
                    )
                }
            }
        )
        this.componentInstance = this.instance.$children[0];
        document.body.appendChild(this.instance.$el);
    }
    initOption(option) {
        let popupOption = {}, componentOption = {};
        for (let o in option) {
            this.popupViewOptionScope.includes(o) ?
                popupOption[o] = option[o] :
                componentOption[o] = option[o];
        }
        function sorting(data) {
            let props = {}
            let on = {}
            Object.keys(data).forEach((key, index) => {
                key.substr(0, 2) === "on" ? on[key] = data[key] : props[key] = data[key];
            })
            return {
                props,
                on
            }
        }
        popupOption = sorting(popupOption);
        componentOption = sorting(componentOption);
        componentOption.on["popup-close"] = () => {
            this.close();
        };
        return {
            popupOption,
            componentOption
        }
    }
    close() {
        this.componentInstance && this.componentInstance.close();
    }
}


export default {
    name: "Popup",
    component: Popup,
    install(Vue, option) {
        Popup.prototype.$vue = Vue;
        Popup.prototype.$option = option;
    }
}