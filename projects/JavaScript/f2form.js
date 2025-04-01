document.getElementById('myform').addEventListener('submit',function(event) {
    event.preventDefault();
    alert("Form Submitted");
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const region = document.getElementById('region').value;
    
    if (!fname || !lname || !email) {
        alert("You need to fill the first 3 information. First Name, Last Name, and Email.");
        return;
    }

    if (!phone || phone < 8080000000) {
        alert("You need to have the right regional phone. The acceptable ones are those above 808")
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
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myform").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert("Error Submitting Form");
        }
    };

    xhr.send(JSON.stringify(formData))
    console.log(formData);
});