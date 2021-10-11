import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    }
  },

  data() {
    return {
      meetup: undefined,
      meetupLoaded: false,
      meetupError: undefined,
    }
  },

  watch: {
    meetupId: {
      immediate: true,
      handler(newValue) {
        this.updateMeetup(newValue)
      },
    }
  },

  methods: {
    updateMeetup(newValue) {
      this.meetupLoaded = false;

      fetchMeetupById(newValue)
        .then((meetup) => {
        this.meetup = meetup;
        this.meetupLoaded = true;
        this.meetupError = undefined;
        })
        .catch((e) => {
          this.meetupLoaded = false;
          this.meetupError = e.message;
        })
    }
  },

  template: `
    <div class="page-meetup">
      <meetup-view v-if="meetupLoaded" :meetup="meetup"></meetup-view>

      <ui-container v-if="!meetupLoaded && !meetupError">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="meetupError">
        <ui-alert> {{meetupError}} </ui-alert>
      </ui-container>
    </div>`,
});
