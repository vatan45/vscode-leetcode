
import './App.css'
import { Landing } from './assets/components/Landing'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Signin } from './assets/components/Signin';

const firebaseConfig = {
  apiKey: "AIzaSyDAKQnTHdEp08x65M2MQXNwdxMKqfXqsnA",
  authDomain: "leetcodeclone-63463.firebaseapp.com",
  projectId: "leetcodeclone-63463",
  storageBucket: "leetcodeclone-63463.appspot.com",
  messagingSenderId: "572371213126",
  appId: "1:572371213126:web:ff683624e56bf0231f6347",
  measurementId: "G-NN3X4YZ0WZ"
};


const app = initializeApp(firebaseConfig);


function App() {
  

  return (
    <>
      <div>
        <Signin />
      </div>
      
    </>
  )
}

export default App
