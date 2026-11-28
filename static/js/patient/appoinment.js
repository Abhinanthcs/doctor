```javascript
// ===============================
// APPOINTMENT FILTER
// ===============================

const filterButtons = document.querySelectorAll(".appointment-tab");
const appointmentCards = document.querySelectorAll(".appointment-list-card");
const emptyMessage = document.getElementById("noAppointments");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to selected button
        this.classList.add("active");

        const filter = this.dataset.filter;
        let visibleCount = 0;

        appointmentCards.forEach(card => {

            const status = card.dataset.status;

            if (filter === "all" || filter === status) {
                card.style.display = "grid";
                visibleCount++;
            } else {
                card.style.display = "none";
            }

        });

        // Show empty message if no cards
        if (emptyMessage) {
            emptyMessage.style.display =
                visibleCount === 0 ? "block" : "none";
        }

    });

});


// ===============================
// VIEW APPOINTMENT
// ===============================

function viewAppointmentDetails(doctorName) {
    alert("Appointment details for " + doctorName);
}


// ===============================
// CANCEL APPOINTMENT DEMO
// ===============================

function cancelAppointment(button) {

    const card = button.closest(".appointment-list-card");

    const confirmed = confirm("Are you sure you want to cancel this appointment?");

    if (!confirmed) {
        return;
    }

    card.dataset.status = "cancelled";

    const statusBadge = card.querySelector(".status");

    if (statusBadge) {
        statusBadge.textContent = "Cancelled";
        statusBadge.className = "status cancelled";
    }

    // Remove the cancel button
    button.remove();

    // Refresh the current filter
    const activeFilter = document.querySelector(".appointment-tab.active");

    if (activeFilter) {
        activeFilter.click();
    }

    alert("Appointment cancelled (demo only).");
}
```