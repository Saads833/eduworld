document.getElementById("step2").style.display = "none"
document.getElementById("step3").style.display = "none"
document.getElementById("signInForm").style.display = "none"
document.getElementById("loginForm").style.display = "none"
document.getElementById("welcome").style.display = "none"
document.getElementById("homeScreen").style.display = "none"
document.getElementById("mathScreen").style.display = "none"

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

document.getElementById("createBtn").addEventListener("click", async function() {
    let name = document.getElementById("fullname").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if (name === "" || username === "" || password === "") {
        alert("Please fill in all fields!")
    } else {
        try {
            await window.createUser(window.firebaseAuth, username, password)
            document.getElementById("signInForm").style.display = "none"
            document.getElementById("homeScreen").style.display = "flex"
        } catch (error) {
            alert("Error: " + error.message)
        }
    }
})

document.getElementById("loginSubmit").addEventListener("click", async function() {
    let username = document.getElementById("loginUsername").value
    let password = document.getElementById("loginPassword").value

    if (username === "" || username === "" || password === "") {
        alert("Please fill in all fields!")
    } else {
        try {
            await window.signInUser(window.firebaseAuth, username, password)
            document.getElementById("loginForm").style.display = "none"
            document.getElementById("homeScreen").style.display = "flex"
        } catch (error) {
            alert("Error: " + error.message)
        }
    }
})

document.getElementById("menuBtn").addEventListener("click", function() {
    let menu = document.getElementById("dropMenu")
    let content = document.getElementById("mainContent")
    if (menu.style.display === "flex") {
        menu.style.display = "none"
        content.style.display = "block"
    } else {
        menu.style.display = "flex"
        content.style.display = "none"
    }
})

document.getElementById("logoutBtn").addEventListener("click", function() {
    document.getElementById("homeScreen").style.display = "none"
    document.getElementById("dropMenu").style.display = "none"
    document.getElementById("mainContent").style.display = "block"
    document.getElementById("step3").style.display = "block"
})

document.getElementById("exitBtn").addEventListener("click", function() {
    window.close()
})

document.querySelectorAll(".gameCard").forEach(function(card) {
    card.addEventListener("click", function() {
        let subject = this.textContent.trim()
        if (subject.includes("Math")) {
            document.getElementById("homeScreen").style.display = "none"
            document.getElementById("mathScreen").style.display = "flex"
        }
    })
})

document.getElementById("backHomeBtn").addEventListener("click", function() {
    document.getElementById("mathScreen").style.display = "none"
    document.getElementById("homeScreen").style.display = "flex"
})

document.getElementById("startMathBtn").addEventListener("click", function() {
    let questions = [
        "What is 12 × 7?",
        "What is 144 ÷ 12?",
        "What is 25% of 200?",
        "What is 15²?",
        "If a train travels 60 km/h for 2.5 hours, how far does it go?"
    ]

    let random = questions[Math.floor(Math.random() * questions.length)]

    document.getElementById("mathStatus").textContent = "Answer this question! 🧠"
    document.getElementById("questionText").textContent = random
    document.getElementById("questionBox").style.display = "block"
    document.getElementById("startMathBtn").style.display = "none"

    let timeLeft = 30
    document.getElementById("timerText").textContent = "⏱️ " + timeLeft

    let timer = setInterval(function() {
        timeLeft--
        document.getElementById("timerText").textContent = "⏱️ " + timeLeft

        if (timeLeft <= 10) {
            document.getElementById("timerText").style.color = "red"
        }

        if (timeLeft <= 0) {
            clearInterval(timer)
            document.getElementById("feedback").textContent = "⏰ Time's up!"
            document.getElementById("feedback").style.color = "red"
            document.getElementById("submitAnswer").style.display = "none"
        }
    }, 1000)
})

document.getElementById("submitAnswer").addEventListener("click", function() {
    let answer = document.getElementById("answerInput").value.trim()
    let question = document.getElementById("questionText").textContent

    if (answer === "") {
        document.getElementById("feedback").textContent = "Please write your answer! ✏️"
        return
    }

    let correct = false

    if (question.includes("12 × 7") && answer === "84") correct = true
    if (question.includes("144 ÷ 12") && answer === "12") correct = true
    if (question.includes("25%") && answer === "50") correct = true
    if (question.includes("15²") && answer === "225") correct = true
    if (question.includes("train") && answer === "150") correct = true

    if (correct) {
        document.getElementById("feedback").textContent = "✅ Correct! +10 points! 🏆"
        document.getElementById("feedback").style.color = "lightgreen"
    } else {
        document.getElementById("feedback").textContent = "❌ Wrong! Try again!"
        document.getElementById("feedback").style.color = "red"
    }
})