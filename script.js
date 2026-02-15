// Wait until DOM loads completely
document.addEventListener("DOMContentLoaded", function () {

    const queuePage = document.getElementById("queuePage");
    const activePage = document.getElementById("activePage");

    const reviewBtn = document.getElementById("reviewBtn");
    const backBtn = document.getElementById("backBtn");

    const navItems = document.querySelectorAll(".nav-item");

    // Safe function to switch pages
    function showPage(pageToShow) {
        if (queuePage) queuePage.style.display = "none";
        if (activePage) activePage.style.display = "none";

        if (pageToShow === "queue" && queuePage) {
            queuePage.style.display = "block";
        }

        if (pageToShow === "active" && activePage) {
            activePage.style.display = "block";
        }

        // Update active sidebar
        navItems.forEach(item => item.classList.remove("active"));

        if (pageToShow === "queue") {
            document.getElementById("navQueue")?.classList.add("active");
        }

        if (pageToShow === "active") {
            document.getElementById("navQueue")?.classList.add("active");
        }
    }

    // Review button click
    if (reviewBtn) {
        reviewBtn.addEventListener("click", function () {
            showPage("active");
        });
    }

    // Back button click
    if (backBtn) {
        backBtn.addEventListener("click", function () {
            showPage("queue");
        });
    }

    // Sidebar click for Active Queue
    const navQueue = document.getElementById("navQueue");
    if (navQueue) {
        navQueue.addEventListener("click", function () {
            showPage("queue");
        });
    }

});