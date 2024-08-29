document.addEventListener("DOMContentLoaded",function() {


    const now = new Date();
    const limit = new Date('2024-10-01');
    if (now > limit) {
        document.getElementById("votesubmit").disabled = true;
    }
});