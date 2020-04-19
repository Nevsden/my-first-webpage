function get_date() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    // Pad variable day if day < 10
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return yyyy + '-' + mm + '-' + dd;
}

// Assign date placeholder with today's date
var inputRef = document.getElementById('paid_date').value = get_date();
