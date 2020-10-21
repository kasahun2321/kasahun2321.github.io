
/*eslint-disable*/
let shoppingCart = [];

function add(evt) {
    let foodItem = canteen.foodItems.get(evt.target.parentNode.value);
    shoppingCart.push(foodItem);
    updateShoppingCart(foodItem);
}

function updateShoppingCart(foodItem) {
    let table = document.getElementById("shopping_cart");
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = foodItem.name;
    let td2 = document.createElement("td");
    td2.innerHTML = foodItem.price_in_points;
    row.append(td1);
    row.append(td2);
    table.append(row);
}

let currentStudent;

function pullInfo() {
    let student = canteen.students.get(document.getElementById("student_name").value);
    if (!student) {
        alert("Not found");
        return;
    }

    currentStudent = student;
    displayInfo();
}

function displayInfo() {
    document.getElementById("info").innerHTML = `Hi ${currentStudent.name}, your current balance is: ${currentStudent.mealCard.balance} points.`;
}

function makePurchase() {
    if(!currentStudent){
        alert("Please select a student first.")
        return;
    }
    let balance_before_purchase = currentStudent.mealCard.balance;
    for (let item of shoppingCart) {
        try {
            currentStudent.buyFoodItem(item);
        } catch (e) {
            if (e instanceof ApplicationError) {
                alert("Insufficient balance");
                currentStudent.mealCard.balance = balance_before_purchase;
                return;
            }
        }
    }

    alert(`Thanks for the purchase, your remaining balance is ${currentStudent.mealCard.balance}`)
    displayInfo();
    resetShoppingCart();
}

function resetShoppingCart(){
    let table = document.getElementById('shopping_cart');
    let rows = document.querySelectorAll('#shopping_cart>tr')
    for(let i=rows.length; i>0; i--){
        table.deleteRow(i);
    }
    shoppingCart=[];
}