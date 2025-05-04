// Toggle Menu for Mobile View
function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('active');
}

// Handle User Login
function handleLogin(e) {
  e.preventDefault();
  // Simulate successful login
  alert("Logged in successfully (mock)");
  window.location.href = "dashboard.html"; // Redirect to dashboard
  return false;
}

// Handle User Registration
function handleRegistration(e) {
  e.preventDefault();
  // Simulate successful registration
  alert("Registration successful!");
  window.location.href = "login.html"; // Redirect to login page
  return false;
}

// Resume AI Analysis
function analyzeResume() {
  const responses = [
    "Try adding more technical skills.",
    "Consider quantifying your achievements.",
    "Great use of action verbs!"
  ];
  const random = Math.floor(Math.random() * responses.length);
  document.getElementById('aiResult').innerText = responses[random];
}

// Start Quiz (Aptitude/Logic/Verbal)
function startQuiz() {
  const questions = [
    { q: "What is 5 + 3?", a: "8" },
    { q: "Which is a prime number: 9, 11, 15?", a: "11" }
  ];
  let quizHTML = "";
  questions.forEach((q, i) => {
    quizHTML += `<p>${q.q}</p><input type='text' id='q${i}' />`;
  });
  quizHTML += `<button onclick='submitQuiz()'>Submit</button>`;
  document.getElementById("quiz").innerHTML = quizHTML;
}

function submitQuiz() {
  alert("Quiz submitted. This is a placeholder.");
}

// Apply for Job
function applyForJob(jobId) {
  alert(`Successfully applied for Job ID: ${jobId}`);
  // Redirect to Job Dashboard (or stay on the page)
}

// Validate Job Application Form
function validateJobApplication(e) {
  e.preventDefault();
  const name = document.querySelector("#applicantName").value;
  const email = document.querySelector("#applicantEmail").value;
  const resume = document.querySelector("#applicantResume").files.length;

  if (name && email && resume) {
    alert("Application submitted successfully.");
    // Send application data to backend
  } else {
    alert("Please fill in all the fields and upload your resume.");
  }
}

// Admin: Handle Job Deletion
function deleteJob(jobId) {
  if (confirm(`Are you sure you want to delete Job ID: ${jobId}?`)) {
    alert(`Job ID: ${jobId} deleted successfully.`);
    // Send a request to backend to delete the job
  }
}

// Admin: Handle User Deletion
function deleteUser(userId) {
  if (confirm(`Are you sure you want to delete User ID: ${userId}?`)) {
    alert(`User ID: ${userId} deleted successfully.`);
    // Send a request to backend to delete the user
  }
}

// Certificate: Track Certificate Earned
function trackCertificate(certificateId) {
  alert(`Tracking Certificate ID: ${certificateId}`);
  // Fetch certificate details from the backend
}

// JobBoard: Display Job Details
function viewJobDetails(jobId) {
  alert(`Displaying details for Job ID: ${jobId}`);
  // Fetch job details from the backend
}

// Learn: Display Learning Resources
function loadLearningResources() {
  const resources = [
    { title: "Intro to Python", url: "#python" },
    { title: "Advanced Data Structures", url: "#data-structures" }
  ];
  let resourceHTML = "";
  resources.forEach(res => {
    resourceHTML += `<p><a href="${res.url}">${res.title}</a></p>`;
  });
  document.getElementById("learningResources").innerHTML = resourceHTML;
}

// Profile: Edit Profile
function editProfile() {
  const bio = document.getElementById("bioInput").value;
  const skills = document.getElementById("skillsInput").value;
  alert(`Profile updated! Bio: ${bio}, Skills: ${skills}`);
  // Send updated profile data to the backend
}

// Skills: Display Skills Quiz
function loadSkillsQuiz() {
  const questions = [
    { q: "What is the time complexity of binary search?", a: "O(log n)" },
    { q: "What does HTML stand for?", a: "HyperText Markup Language" }
  ];
  let quizHTML = "";
  questions.forEach((q, i) => {
    quizHTML += `<p>${q.q}</p><input type='text' id='skillsQuizQ${i}' />`;
  });
  quizHTML += `<button onclick='submitSkillsQuiz()'>Submit</button>`;
  document.getElementById("skillsQuiz").innerHTML = quizHTML;
}

function submitSkillsQuiz() {
  alert("Skills Quiz submitted. This is a placeholder.");
}

// Job Application: Show Job Application Form
function showJobApplicationForm() {
  document.getElementById('jobApplicationForm').style.display = 'block';
}

// Search Jobs by Category
function searchJobsByCategory(category) {
  alert(`Searching jobs in category: ${category}`);
  // Filter jobs by category and display results
}

// Jobboard: Filter Jobs by Location
function filterJobsByLocation(location) {
  alert(`Filtering jobs in location: ${location}`);
  // Filter jobs by location and display results
}
