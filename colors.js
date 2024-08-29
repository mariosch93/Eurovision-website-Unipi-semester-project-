// As tableRows will return object .addEventListener will not work with it, so looping them and use will. stackoverflow
document.addEventListener("DOMContentLoaded",function(){

    var tableRows = document.getElementsByTagName('tr');
    for (var i = 0; i < tableRows.length; i += 1) {
    tableRows[i].addEventListener('mouseover', function(){
    this.style.backgroundColor="lightblue";})
    }

    var tableRows = document.getElementsByTagName('tr');
    for (var i = 0; i < tableRows.length; i += 1) {
    tableRows[i].addEventListener('mouseout', function(){
    this.style.backgroundColor="transparent";})
    };

    document.querySelectorAll('input').forEach(function(input){
        input.addEventListener('mouseover', function hover() {
            this.style.backgroundColor = '#51cba8';})}
        );

    document.querySelectorAll('input').forEach(function(input){
        input.addEventListener('mouseout', function hover() {
            this.style.backgroundColor = 'white';})}
        );
        
    document.getElementById('formColor').onchange = function() {
        document.querySelector('#form').style.backgroundColor = this.value;}
});