import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const Root = {
  data() {
    return {
      meetup: '',
      checked: 1,
    };
  },
  created() {
    fetchMeetupById(1).then((meetup) => {
      this.meetup = meetup;
    });
  },
  watch: {
    checked(newValue) {
      fetchMeetupById(newValue).then((meetup) => {
        this.meetup = meetup;
      });
    },
  },
};
const app = createApp(Root);
const vm = app.mount('#app');
window.vm = vm;
// Требуется создать Vue приложение
