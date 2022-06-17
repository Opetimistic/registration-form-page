window.onload = function () {
    let submit_button = document.getElementById("submit");
    submit_button.addEventListener("click", function (e) {
        var re = /\S+@\S+\.\S+/;
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (fname.trim() == ""||
            lname.trim() =="" ||
            password.trim() =="" ||
            re.test(email.trim()) == false
        ) {
            document.getElementById("form-id-second").className = "invalid-check";
        }
    });
};