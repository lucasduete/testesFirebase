// Initialize Firebase

var config = {
    apiKey: "AIzaSyCBkWxff2pjutFR0UUCR_6FL4Cs5PBBnP8",
    authDomain: "teste-8b6aa.firebaseapp.com",
    databaseURL: "https://teste-8b6aa.firebaseio.com",
    projectId: "teste-8b6aa",
    storageBucket: "teste-8b6aa.appspot.com",
    messagingSenderId: "224602109843"
};

if(firebase.initializeApp(config)){
    alert("Deu Certo")
} else{
    alert("Fail")
}