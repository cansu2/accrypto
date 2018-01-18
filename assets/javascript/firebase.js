// Initialize Firebase
var config = {
    apiKey: "AIzaSyDZQGa83IiumelIE__jceO_zEwoDZXbDw8",
    authDomain: "accrypto-af254.firebaseapp.com",
    databaseURL: "https://accrypto-af254.firebaseio.com",
    projectId: "accrypto-af254",
    storageBucket: "accrypto-af254.appspot.com",
    messagingSenderId: "590295681869"
  };
  firebase.initializeApp(config);

  const database = firebase.database();


$(document).on('click', '#submit2', function(){

    let firstName = $('#textinputFirst').val().trim();
    let lastName = $('#textinputLast').val().trim();
    let email = $('#textinputEmail').val().trim();
    let password = $('#textinputPassword').val().trim();

    var ref = database.ref();
    var data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    console.log(firstName);
    ref.push(data);

    

});