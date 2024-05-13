import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../firebaseConfig";

function Login () {

    const [email,setEmail] = useState('')
    const [password,setPasword] = useState('')
    const [erroMessage, setErrorMesagge] = useState('')

    //function the registre 
    const handleLogin = async () => {
        try {
            const auth = getAuth (firebaseApp)
            await signInWithEmailAndPassword (auth,email,password) 
            console.log('User login')
            setErrorMesagge('The user joined the website')
        } catch (error) {
            console.log('Error, The user did not enter the website',error.message)
            setErrorMesagge(error.message)
        }
    }
    return(
        <div className="Login">
            <h1>Login</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPasword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {erroMessage && <p>{erroMessage}</p>}
        </div>
    )
}
export default Login