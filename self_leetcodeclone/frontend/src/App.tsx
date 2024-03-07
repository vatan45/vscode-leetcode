import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Signin } from './assets/components/Signin';
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil'; // Added import statements
import { userAtom } from './assets/components/store/atoms/user'; // Corrected import

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  return (
    <RecoilRoot>
      <StoreApp />
    </RecoilRoot>
  );
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom); // Corrected atom name
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email
          }
        });
        console.log("this is the user: -", user);
      } else {
        setUser({
          loading: false
        });
        console.log("there is no logged in user");
      }
    });
    return () => unsubscribe();
  }, [setUser]); // Added setUser to dependency array

  if (user.loading) {
    return <div>loading...</div>;
  }
  if (!user.user) {
    return <Signin />;
  }
  return (
    <>
      You are logged in as {user.user.email}
    </>
  ); 
}

export default App;
