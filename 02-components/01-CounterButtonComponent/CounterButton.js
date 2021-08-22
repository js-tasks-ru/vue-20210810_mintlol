import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр

  props: {
    count: {
      type: Number,
      default: 0,
    }
  },
  // emits: ['update:count'],

  methods: {
    update() {
      this.$emit('update:count', this.count + 1)
    }
  },
  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="update">{{count}}</button>`,
});
