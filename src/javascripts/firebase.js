import * as firebase from 'firebase';
let database;

export const init = () => {
    var config = {
        apiKey: "AIzaSyBP48W31HLmu-dh0EGmhjpBd8sVMrHPVYM",
        authDomain: "smiss-firebase-oleg.firebaseapp.com",
        databaseURL: "https://smiss-firebase-oleg.firebaseio.com",
        projectId: "smiss-firebase-oleg",
        storageBucket: "smiss-firebase-oleg.appspot.com",
        messagingSenderId: "478421274522"
    };
    firebase.initializeApp(config);
    database = firebase.database();
    
}

export const getOrders = () => {
    return database.ref('/orders').once('value').then(res => res.val());
}

export const createOrder = (newOrder) => {
    database.ref('/orders').push(newOrder);
}

export const deleteOrder = () => {
    database.ref('/orders').remove()
}