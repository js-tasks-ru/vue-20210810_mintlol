import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupDescription',
  props: {
    description: {
      required: false,
      default: 0
    }
  },

  template: `<p class="meetup-description">{{description}}</p>`,
});
