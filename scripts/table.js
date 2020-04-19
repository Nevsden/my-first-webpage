function add_row(date, payer, money, where) {
    // Get the reference to the grocery list table
    var tableRef = document.getElementById('groceryList');
    // Insert a new row
    var row = tableRef.insertRow();
    // Add entries to row
    var cell_date = row.insertCell(0);
    var cell_who = row.insertCell(1);
    var cell_sum = row.insertCell(2);
    var cell_where = row.insertCell(3);
    // Add content to the cell
    cell_date.innerHTML = date;
    cell_who.innerHTML = payer;
    cell_sum.innerHTML = money;
    cell_where.innerHTML = where;
}

function checked_add_row() {
    var date = document.getElementById('paid_date').value;
    var payer = document.getElementById('paid_by').value;
    var money = document.getElementById('paid_money').value;
    var where = document.getElementById('paid_where').value;

    if (check_date(date) &&
        check_payer(payer) &&
        check_money(money) &&
        check_where(where)) {
        add_row(date, payer, money, where)
    }
}

function check_date(date) {
    return true;
}

function check_payer(payer) {
    return true;
}

function check_money(money) {
    return true;
}

function check_where(where) {
    return true;
}