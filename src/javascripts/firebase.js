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
    database.ref('/orders').on('value',(snap)=>{
        console.log(snap.val())
    });
}

export const createOrder = () => {
    
}