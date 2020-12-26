import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from "./Header";
import Login from './Login';
import Sidebar from "./Sidebar";
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }));
      } else {
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">

      {!user ? (
        <Login/>
      ) : (
        <>
          <Header/>
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
      
    </div>
  );
}

export default App;
