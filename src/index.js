import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AddToHomeScreen from 'a2hs.js'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

AddToHomeScreen();

/* Notification service worker check */
const check = () => {
    if (!("serviceWorker" in navigator)) {
      throw new Error("No Service Worker support!");
    }
    if (!("PushManager" in window)) {
      throw new Error("No Push API Support!");
    }
  };
  
  const registerServiceWorker = async () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    console.log("swUrl", swUrl);
  
    const swRegistration = await navigator.serviceWorker.register(swUrl, {
      scope: "/worker/"
    });
    return swRegistration;
  };
  
  const requestNotificationPermission = async () => {
    //const permission = await window.Notification.requestPermission();
  
    Notification.requestPermission(status => {
      console.log("Notification permission status:", status);
    });
  
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request.
  
    // if (permission !== "granted") {
    //   throw new Error("Permission not granted for Notification");
    // }
  };
  
  const main = async () => {
    check();
    const swRegistration = await registerServiceWorker();
    const permission = await requestNotificationPermission();
    const options = {
        body: 'Opened Successfully',
        icon: './demoIcon.ico',
        tag: 'New Notification',
        badge: './demoIcon.ico',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
    }
  
    console.log("swReg", swRegistration);
  
    if (Notification.permission === "granted") {
      navigator.serviceWorker.getRegistration("/worker/").then(reg => {
        console.log("About to show notification", reg);
        reg.showNotification("Push Notification", options);
      });
  
      // navigator.serviceWorker.ready.then(function(reg) {
      //   new Notification("Helo");
      // });
    }
  };
  
  main();
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();