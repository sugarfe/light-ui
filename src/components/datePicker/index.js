import { Picker } from "../picker/index.js";
import { generateData } from "./help.js"
class DatePicker {
    constructor({ scope = 1, max, min } = {}) {
        this.option = {
            scope,
            max,
            min
        };
        this.init();
    }
    init() {
        this.data = generateData(this.option);
        let pickerInstance = new Picker({
            data: this.data,
            onOk: (...a) => {
                console.log(a)
            }
        })
        // console.log(pickerInstance.popup.instance.$children[0].$children[0])
    }
}

export default {
    name: "DatePicker",
    component: DatePicker,
    install(Vue, option) {
        DatePicker.prototype.$vue = Vue;
        DatePicker.prototype.$option = option;
        !Picker.prototype.$vue && (Picker.prototype.$vue = Vue);
    }
}