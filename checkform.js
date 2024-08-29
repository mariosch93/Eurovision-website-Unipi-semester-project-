document.addEventListener("DOMContentLoaded",function(){
function checkMe() {
    messagesError = []
    messagesAcepted = []

    firstname=document.getElementById("firstname").value;
        if (/^[\u0370-\u03FF\u1F00-\u1FFF]+$/.test(firstname) ) {
        messagesAcepted.push("Επιτυχής καταχώρηση ονόματος\n"); 
        document.getElementById("firstname").style="border:2px solid green;";
        }
        else {
        messagesError.push("Παρακαλώ ελέγξτε το πεδίο του ονόματος να περιέχει μόνο ελληνικά\n");
        document.getElementById("firstname").style="border:2px solid red;";
        document.getElementById("errors").innerText +="Το πεδίο του ονόματος είναι λάθος. \n";
        }

    address1=document.getElementById("address1").value;
        if (/^[\u0370-\u03FF\u1F00-\u1FFF]+[\u0020]+[0-9]+$/.test(address1) ) {
        messagesAcepted.push("Επιτυχής καταχώρηση της Διεύθυνσης\n"); 
        document.getElementById("address1").style="border:2px solid green;";
        }
        else {
        messagesError.push("H Διεύθυνση πρέπει να είναι της μορφής [Διεύθυνση Αριθμός]\n");
        document.getElementById("address1").style="border:2px solid red;";
        document.getElementById("errors").innerText +="Το πεδίο της διεύθυνσης είναι λανθασμένο.\n";
        }

    zip=document.getElementById("zip").value;
        if ( /^[0-9]{5}/.test(zip) ) {
        messagesAcepted.push("Επιτυχής καταχώρηση ταχυδρομικού κώδικα\n");
        document.getElementById("zip").style="border:2px solid green;";
        } 
        else {
        messagesError.push("Το πεδίο του ταχ. κωδικού πρέπει να περιέχει 5 αριθμούς\n");
        document.getElementById("errors").innerText +="Το πεδίο τουταχ. κωδικού είναι λάθος\n";
        document.getElementById("zip").style="border:2px solid red;";
        }   

    phonenumber=document.getElementById("phonenumber").value;
        if ( /^[\u002B]+[30210]+[0-9]{7}/.test(phonenumber) ) {
        messagesAcepted.push("Επιτυχής καταχώρηση σταθερού τηλεφώνου\n");
        document.getElementById("phonenumber").style="border:2px solid green;";
        } 
        else {
        messagesError.push("Το τηλέφωνο δεν είναι έγκυρο\n");
        document.getElementById("errors").innerText +="Το πεδίο τηλέφωνο είναι λάθος. \n";
        document.getElementById("phonenumber").style="border:2px solid red;";
        }

    email=document.getElementById("email").value;
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email) ) {
        messagesAcepted.push("Επιτυχής καταχώρηση ηλεκτρονικού ταχυδρομείου.\n");
        document.getElementById("email").style="border:2px solid green;";
        } 
        else {
        messagesError.push("To email πρέπει να είναι της μορφής example@mail.com\n");
        document.getElementById("errors").innerText +="Μη έγκυρη διεύθυνση email\n";
        document.getElementById("email").style="border:2px solid red;";
        } 
    
    if (messagesError.length > 0) {
        alert(messagesError.join("\n"));
    }
    else{
        alert(messagesAcepted.join("\n"))
    }

    setTimeout(function(){
        document.getElementById("errors").innerHTML = "";} , 10000);
}
    document.getElementById("checkform").addEventListener("click", function() {checkMe()});

});