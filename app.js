document.getElementById("step2").style.display = "none"
document.getElementById("step3").style.display = "none"
document.getElementById("signInForm").style.display = "none"
document.getElementById("loginForm").style.display = "none"
document.getElementById("welcome").style.display = "none"

document.getElementById("next1").addEventListener("click", function() {
    document.getElementById("step1").style.display = "none"
    document.getElementById("step2").style.display = "block"
})

document.getElementById("next2").addEventListener("click", function() {
    document.getElementById("step2").style.display = "none"
    document.getElementById("step3").style.display = "block"
})

document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("step3").style.display = "none"
    document.getElementById("loginForm").style.display = "block"
})

document.getElementById("signinBtn").addEventListener("click", function() {
    document.getElementById("step3").style.display = "none"
    document.getElementById("signInForm").style.display = "block"
})

document.getElementById("loginSubmit").addEventListener("click", function() {
    let username = document.getElementById("loginUsername").value
    let password = document.getElementById("loginPassword").value

    if (username === "" || password === "") {
        alert("Please fill in all fields!")
    } else {
        document.getElementById("loginForm").style.display = "none"
        document.getElementById("welcome").style.display = "block"
        document.getElementById("welcomeMessage").textContent = "Hello, " + username + "! Ready to play? 🎮"
    }
})

document.getElementById("createBtn").addEventListener("click", function() {
    let name = document.getElementById("fullname").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if (name === "" || username === "" || password === "") {
        alert("Please fill in all fields!")
    } else {
        document.getElementById("signInForm").style.display = "none"
        document.getElementById("welcome").style.display = "block"
        document.getElementById("welcomeMessage").textContent = "Welcome, " + name + "! Ready to play? 🎮"
    }
})