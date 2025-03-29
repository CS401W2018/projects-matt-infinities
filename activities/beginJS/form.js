document.getElementById('myform').addEventListener('submit',function(event) {
    event.preventDefault();
    alert("Form Submitted");
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const region = document.getElementById('region').value;
    
    if (!fname || !email) {
        alert("You need a first name and email.");
        return;
    }

    if (!phone || phone < 8080000000) {
        alert("You need to have the right regional phone")
        return;
    }

    const formData = {
        Firstname: fname,
        Lastname: lname,
        Email: email,
        Phone: phone,
        Password: password,
        Region: region
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form Submitted Successfully");
        } else if (xhr.readyState === 4) {
            alert("Error Submitting Form");
        }
    };

    xhr.send(JSON.stringify(formData))
    console.log(formData);
});