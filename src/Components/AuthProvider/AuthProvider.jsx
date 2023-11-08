import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import axios from "axios";

export const AuthContext  = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
//createUser 
const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

}

const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

}

const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)

}

const signInWithGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)

}


const logOut = () => {
    setLoading(true)
return signOut(auth)
}

const  UserUpdate= (name,photo) => {
  return  updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
}





useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email: userEmail}

        setUser(currentUser)
        setLoading(false)
        if(currentUser){
            axios.post('https://restuarent-management.vercel.app/api/v1/jwt',loggedUser, {withCredentials: true})
            .then(res =>{
                console.log("token response",res.data);
            })
        }else{
            axios.post('https://restuarent-management.vercel.app/api/v1/logout', loggedUser,{withCredentials:true})
            .then(res => {
                console.log("token response", res.data);
            })
        }
    })
    return ()=> {
        return unSubscribe()
    }
},[user])

    const authInfo = {
        
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        user,
        logOut,
        UserUpdate,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;