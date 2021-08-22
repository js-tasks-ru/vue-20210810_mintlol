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

  watch: {
    checked: {
      immediate: true,
      handler(NewChecked) {
        fetchMeetupById(NewChecked).then((meetup) => {
          this.meetup = meetup;
        });
      }
    }
    // checked(checked) {
    //   fetchMeetupById(checked).then((meetup) => {
    //     this.meetup = meetup;
    //   });
    // },
  },
};
const app = createApp(Root);
const vm = app.mount('#app');
window.vm = vm;
// Требуется создать Vue приложение
