```javascript
// ==============================
// MEDICAL HISTORY FILTER
// ==============================

const historyFilter = document.getElementById("historyFilter");
const historyRecords = document.querySelectorAll(".history-record");
const historyEmpty = document.getElementById("historyEmpty");

historyFilter.addEventListener("change", function () {

    const selectedType = this.value;
    let visibleCount = 0;

    historyRecords.forEach(record => {

        const recordType = record.dataset.type;

        if (selectedType === "all" || recordType === selectedType) {
            record.style.display = "flex";
            visibleCount++;
        } else {
            record.style.display = "none";
        }

    });

    historyEmpty.style.display =
        visibleCount === 0 ? "block" : "none";

});


// ==============================
// VIEW RECORD DEMO
// ==============================

function viewHistoryRecord(recordName) {

    alert("Viewing medical record: " + recordName);

}
```