<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs4></v-flex>
      <v-flex xs4>
        <v-btn block depressed color="blue-grey" class="white--text" @click="smsLogin">
          Login With Phone
          <v-icon right dark>phone_android</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs4></v-flex>
    </v-layout>

    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      {{ snackbar.text }}
      <v-btn dark flat @click="snackbar.show = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      snackbar: {
        show: false,
        color: 'error',
        timeout: 5000,
        text: ''
      },
      creds: {
        fbAppEventsEnabled: true,
        redirect: 'http://localhost:8080',
        display: 'popup',
        debug: true
      }
    }
  },
  methods: {
    AccountKit_OnInteractive() {
      AccountKit.init(this.creds);
    },
    loginCallback(response) {
      console.log('loginCallback: ', response);
      if (response.status === "PARTIALLY_AUTHENTICATED") {
        this.doLogin(response.code, response.state);
      }
      else if (response.status === "NOT_AUTHENTICATED") {
        this.snackbar.show = true;
        this.snackbar.text = 'NOT_AUTHENTICATED';
      }
      else if (response.status === "BAD_PARAMS") {
        this.snackbar.show = true;
        this.snackbar.text = 'BAD_PARAMS';
      }
    },
    smsLogin() {
      AccountKit.login(
        'PHONE', 
        { countryCode: '+880', phoneNumber: '' }, // will use default values if not specified
        this.loginCallback
      );
    },
    async doLogin(code, state) {
      try {
        const response = await this.$http.post('/api/otp/success', { code, state });
        console.log('dologin: ', response);

        this.snackbar.show = true;
        this.snackbar.color = 'success';
        this.snackbar.text = `You are verified with phone ${response.data.phone}`;
      }
      catch (err) {
        console.log(err.response || err);
        this.snackbar.show = true;
        this.snackbar.text = err.response.data;
      }
    },
    async getSession() {
      try {
        const response = await this.$http.get(`/api/otp/session`);
        console.log('response: ', response);
        this.creds.state = response.data.csrf;
        this.creds.appId = response.data.appId;
        this.creds.version = response.data.version;
        this.loadAccountkitApi();
      }
      catch (err) {
        console.log(err);
        this.snackbar.show = true;
        this.snackbar.text = err.response;
      }
    },
    async loadAccountkitApi() {
      const accountkitScript = document.createElement('script');
      accountkitScript.setAttribute('src',`https://sdk.accountkit.com/en_US/sdk.js`);
      accountkitScript.setAttribute('async', '');
      accountkitScript.onload = () => {
        console.log('accountkit loaded');
        window.AccountKit_OnInteractive = this.AccountKit_OnInteractive;
      };
      document.head.appendChild(accountkitScript);
    }
  },
  mounted() {
    this.getSession();
  }
}
</script>
