import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBVR3G2yJroO8JkcTZKUa0bzKJHxntPAa8",
  authDomain: "vue-chat-b2608.firebaseapp.com",
  databaseURL: "https://vue-chat-b2608.firebaseio.com",
  projectId: "vue-chat-b2608",
  storageBucket: "vue-chat-b2608.appspot.com",
};
firebase.initializeApp(config);

export default firebase;