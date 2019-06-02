import PickerTemplate from "./Picker.vue";


class Picker {
    popup = undefined;
    constructor(option = {}) {
        option.data = option.data.map((item) => {
            if (item.length > 0 && typeof item[0] !== "object") {
                item = item.map((o) => {
                    return {
                        text: o,
                        value: o
                    }
                })
            }
            return item;
        })
        this.option = option;
        this.init(option);
    }
    init() {
        this.popup = new this.$vue.prototype.$RunPopup(PickerTemplate, {
            position: "bottom",
            size: "200px",
            ...this.option,
            onFinish: () => {

            },
            onOk: ({ values, text, selectedIndex }) => {
                typeof this.option.onOk === "function" && this.option.onOk([...values], [...text], [...selectedIndex]);
                this.popup.close();
            }
        });
    }
}


export default {
    name: "Picker",
    component: Picker,
    install(Vue, option) {
        !Picker.prototype.$vue && (Picker.prototype.$vue = Vue);
    }
};
export {
    Picker
}