// Initialize Firebase

var config = {
    apiKey: "AIzaSyCEzjdoJh9ucU6fX_cndgi1_k1R3uDJK3g",
    authDomain: "lucasduete-github-io.firebaseapp.com",
    databaseURL: "https://lucasduete-github-io.firebaseio.com",
    projectId: "lucasduete-github-io",
    storageBucket: "lucasduete-github-io.appspot.com",
    messagingSenderId: "174683107857"
};

if(firebase.initializeApp(config)){
    alert("Deu Certo")
} else{
    alert("Fail")
}