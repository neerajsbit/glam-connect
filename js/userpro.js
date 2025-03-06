
// Function to show My Requests section
function showMyRequests() {
    var requestsContainer = document.getElementById("myRequests");
    requestsContainer.style.display = "block";
}

// Function to hide My Requests section
function hideMyRequests() {
    var requestsContainer = document.getElementById("myRequests");
    requestsContainer.style.display = "none";
}

// Event listener for My Requests button click
document.getElementById("myRequestsButton").addEventListener("click", function() {
    showMyRequests();
});

// Close My Requests section if clicked outside
window.addEventListener("click", function(event) {
    var requestsContainer = document.getElementById("myRequests");
    if (event.target != requestsContainer && event.target != document.getElementById("myRequestsButton")) {
        hideMyRequests();
    }
});

// Function to show My Bookings section
function showMyBookings() {
    var bookingsContainer = document.getElementById("myBookings");
    bookingsContainer.style.display = "block";
}

// Function to hide My Bookings section
function hideMyBookings() {
    var bookingsContainer = document.getElementById("myBookings");
    bookingsContainer.style.display = "none";
}

// Event listener for My Bookings button click
document.getElementById("myBookingsButton").addEventListener("click", function() {
    showMyBookings();
});

// Close My Bookings section if clicked outside
window.addEventListener("click", function(event) {
    var bookingsContainer = document.getElementById("myBookings");
    if (event.target != bookingsContainer && event.target != document.getElementById("myBookingsButton")) {
        hideMyBookings();
    }
});

// Function to show My Bookings section
function showpersonaldetails() {
    var postyourrequirement = document.getElementById("personaldetails");
    postyourrequirement.style.display = "block";
}

// Function to hide My Bookings section
function hidepersonaldetails() {
    var postyourrequirement = document.getElementById("personaldetails");
    postyourrequirement.style.display = "none";
}

// Event listener for My Bookings button click
document.getElementById("personaldetailsButton").addEventListener("click", function() {
    showpersonaldetails();
});

// Close My Bookings section if clicked outside
window.addEventListener("click", function(event) {
    var postyourrequirement = document.getElementById("personaldetails");
    if (event.target != postyourrequirement && event.target != document.getElementById("personaldetailsButton")) {
        hidepersonaldetails();
    }
});

document.getElementById('postInput').addEventListener('click', () => {
    document.getElementById('postModal').classList.remove('hidden');
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('postModal').classList.add('hidden');
});

myButton.addEventListener(
"click",
function () {
  myPopup.classList.add("show");
}
);
closePopup.addEventListener(
"click",
function () {
  myPopup.classList.remove(
      "show"
  );
}
);
window.addEventListener(
"click",
function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove(
          "show"
      );
  }
}
);
