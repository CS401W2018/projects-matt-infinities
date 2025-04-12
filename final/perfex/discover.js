document.getElementById('myform').addEventListener('submit',function(event) {
    event.preventDefault();
    alert("Form Submitted and Ready for Initial Verificaiton. We will send you an email after we finish the assessment. This will take around 3 to 4 business days. I assure to give you the recommended perfume combination. Thank you!");
    const bday = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const weather = document.getElementById('favWeather').value;
    const activity = document.getElementById('activity').value;
    const duration = document.getElementById('duration').value;
    
    if (weather === "blank" || activity === "blank" || duration === "blank") {
        alert("ERROR! You need to all 3 information. Weather, Activity, and Duration.");
        return;
    }

    if (!phone || phone < 8080000000) {
        alert("ERROR! You need to have the right regional phone. The acceptable ones are those above 808")
        return;
    }

    const formData = {
        Birthdate: bday,
        Email: email,
        Phone: phone,
        Weather: weather,
        Activity: activity,
        Duration: duration,
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