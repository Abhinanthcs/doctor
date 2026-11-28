```javascript
// ==============================
// PRESCRIPTION SEARCH AND FILTER
// ==============================

const prescriptionSearch = document.getElementById("prescriptionSearch");
const prescriptionFilter = document.getElementById("prescriptionFilter");

const prescriptionRecords = document.querySelectorAll(".prescription-record");
const prescriptionEmpty = document.getElementById("prescriptionEmpty");

function filterPrescriptions() {

    const searchText = prescriptionSearch.value.toLowerCase();
    const selectedFilter = prescriptionFilter.value;

    let visibleCount = 0;

    prescriptionRecords.forEach(record => {

        const recordStatus = record.dataset.status;
        const recordSearch = record.dataset.search.toLowerCase();

        const matchesSearch = recordSearch.includes(searchText);

        const matchesFilter =
            selectedFilter === "all" ||
            recordStatus === selectedFilter;

        if (matchesSearch && matchesFilter) {
            record.style.display = "block";
            visibleCount++;
        } else {
            record.style.display = "none";
        }

    });

    prescriptionEmpty.style.display =
        visibleCount === 0 ? "block" : "none";
}

prescriptionSearch.addEventListener("input", filterPrescriptions);

prescriptionFilter.addEventListener("change", filterPrescriptions);


// ==============================
// VIEW DETAILS
// ==============================

function viewPrescriptionDetails(doctorName) {
    alert("Prescription details from Dr. " + doctorName);
}


// ==============================
// DOWNLOAD DEMO
// ==============================

function downloadPrescriptionRecord(doctorName) {

    alert("Download demo for prescription from Dr. " + doctorName);
}
```