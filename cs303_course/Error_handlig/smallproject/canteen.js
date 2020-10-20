/*eslint-disable*/

class ApplicationError extends Error { };

class Student {
    constructor(name, mealCard) {
        this._name = name;
        this._mealCard = mealCard;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get mealCard(){
        return this._mealCard;
    }

    set mealCard(mealCard){
        this._mealCard = mealCard;
    }

    purchasePoints(points) {
        this.mealCard.addPoints(points);
    }

    buyFoodItem(foodItem) {
        if (this.mealCard.balance >= foodItem.price_in_points) {
            this.mealCard.deductPoints(foodItem.price_in_points);
        } else {
            throw new ApplicationError("Insufficient Balance.");
        }
    }
}

class MealCard {
    constructor(points = 100) {
        this._balance = points;
    }

    get balance(){
        return this._balance;
    }

    set balance(balance){
        this._balance = balance;
    }

    addPoints(points) {
        return this.balance += points;
    }

    deductPoints(points) {
        return this.balance -= points;
    }
}

class FoodItem {
    constructor(name, price_in_points) {
        this.name = name;
        this.price_in_points = price_in_points;
    }
}


class Canteen {
    constructor(foodItems, students) {
        this.foodItems = foodItems;
        this.students = students;
    }

    addFoodItem(newFoodItem) {
        this.foodItems.set(newFoodItem.name, newFoodItem);
    }

    addStudent(newStudent) {
        this.students.set(newStudent.name, newStudent);
    }
}

const foodItems = new Map();
foodItems.set("pizza", new FoodItem("pizza", 20));
foodItems.set("pasta", new FoodItem("pasta", 15));
foodItems.set("pie", new FoodItem("pie", 10));

const students = new Map();
students.set("John", new Student("John", new MealCard()));

const canteen = new Canteen(foodItems, students);
canteen.addStudent(new Student("Jack", new MealCard()));

// function main() {
//     const JOHN = CANTEEN.students.get("John");
//     JOHN.buyFoodItem(CANTEEN.foodItems.get("pizza"));
//     JOHN.purchasePoints(50);
//     console.log(JOHN.mealCard.balance);
//     try {
//         for (let i = 0; i < 10; i++) {
//             JOHN.buyFoodItem(CANTEEN.foodItems.get("pizza"));
//         }
//     } catch (e) {
//         if (e instanceof ApplicationError) {
//             console.log(e.message);
//         } else {
//             throw e;
//         }
//     }
//     console.log(JOHN.mealCard.balance);

// }
// main();