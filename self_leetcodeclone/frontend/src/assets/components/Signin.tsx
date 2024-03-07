import { useState } from 'react';
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const actionCodeSettings = {
    url: 'https://localhost:3000',
    handleCodeInApp: true,
};

export const Signin = () => {
    const auth = getAuth();
    const [email, setEmail] = useState(""); // Fixed typo: setemail -> setEmail

    async function onSignin() {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
                alert("sent email");
            })
            .catch((error) => {
                alert("email not sent");
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div>
            <input type="text" placeholder="email" onChange={(e) => {
                setEmail(e.target.value); 
            }} />
            <button onClick={() => {
                onSignin();
            }}>
                SignUp
            </button>
        </div>
    );
}
