import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../firebaseConfig";

function Register () {

    const [email,setEmail] = useState('')
    const [password,setPasword] = useState('')
    const [erroMessage, setErrorMesagge] = useState('')

    //function the registre 
    const handleRegistre = async () => {
        try {
            const auth = getAuth (firebaseApp)
            await createUserWithEmailAndPassword (auth,email,password) 
            console.log('Use created')
            setErrorMesagge('The user was successfully registered')
        } catch (error) {
            console.log('Error, The user was not registered',error.message)
            setErrorMesagge(error.message)
        }
    }
    return(
        <div className="register">
            <h1>Register</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPasword(e.target.value)} />
            <button onClick={handleRegistre}>Register</button>
            {erroMessage && <p>{erroMessage}</p>}
        </div>
    )

}

export default Register