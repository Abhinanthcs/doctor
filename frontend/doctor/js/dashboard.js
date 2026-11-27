
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");
const menuToggle = document.getElementById("menuToggle");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("sidebarOverlay");

// Toggle sidebar
menuToggle.addEventListener("click", () => {

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("mobile-open");
        overlay.classList.toggle("show");
    } else {
        sidebar.classList.toggle("collapsed");
        mainContent.classList.toggle("expanded");
    }

});

// Close sidebar on mobile
function closeMobileSidebar() {
    sidebar.classList.remove("mobile-open");
    overlay.classList.remove("show");
}

closeSidebar.addEventListener("click", closeMobileSidebar);
overlay.addEventListener("click", closeMobileSidebar);

// Close sidebar when navigating on mobile
document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            closeMobileSidebar();
        }
    });
});

// Display current date
const dateElement = document.getElementById("currentDate");

const today = new Date();

dateElement.textContent = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});
