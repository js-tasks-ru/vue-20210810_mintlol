import { createApp } from './vendor/vue.esm-browser.js';

const Root = {
    data() {
        return {
            first_num: 0,
            second_num: 0,
            operator: 'sum',
        }
    },
    computed: {
        result() {
            if (this.operator == 'sum') {
                return this.first_num + this.second_num
            }
            else if (this.operator == 'subtract') {
                return this.first_num - this.second_num
            }

            else if (this.operator == 'multiply') {
                return this.first_num * this.second_num
            }

            else if (this.operator == 'divide') {
                return (this.first_num/this.second_num)
            }
        }
    }
}

const app = createApp(Root);

const vm = app.mount('#app');

window.vm = vm;

// Создайте Vue приложение
