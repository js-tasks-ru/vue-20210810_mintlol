import { createApp } from './vendor/vue.esm-browser.js';

const Root = {
  name: 'Root',

  data() {
    return {
      counter: 0,
    };
  },
};

const app = createApp(Root);

const vm = app.mount('#app');

// Создайте Vue приложение
