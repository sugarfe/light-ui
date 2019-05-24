import PickerTemplate from "./Picker.vue";


class Picker {
    constructor(option = {}) {
        this.option = option;
        this.init(option);
    }
    init() {
        let popup = new this.$vue.prototype.$RunPopup(PickerTemplate, {
            position: "bottom",
            size: "200px",
            ...this.option,
            onOk: ({ values, text, selectedIndex }) => {
                typeof this.option.onOk === "function" && this.option.onOk([...values], [...text], [...selectedIndex]);
                popup.close();
            }
        });
    }
    install() { }
}


export default {
    name: "Picker",
    component: Picker,
    install(Vue, option) {
        Picker.prototype.$vue = Vue;
    }
};