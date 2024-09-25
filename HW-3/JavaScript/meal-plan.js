document.addEventListener("DOMContentLoaded", function() {
    const dishListItems = document.querySelectorAll("#dish-list li");

    // Add event listener for each dish in the recommended dishes list
    dishListItems.forEach(dish => {
        dish.addEventListener('click', function() {
            const name = dish.textContent.split(" - $")[0]; // Extract dish name
            const price = parseFloat(dish.textContent.split(" - $")[1]); // Extract price
            addDishToPlan(name, price);
        });
    });
});

let total = 0;

function addDishToPlan(name, price) {
    const mealPlan = document.getElementById("meal-plan");

    // Create the list item for the selected dish
    const dishItem = document.createElement('li');
    dishItem.innerHTML = `${name} - $${price}`;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('remove-btn');  
    removeButton.addEventListener('click', function() {
        removeDish(this, price);
    });

    // Append the button to the dish item
    dishItem.appendChild(removeButton);

    // Add the dish item to the meal plan
    mealPlan.appendChild(dishItem);

    // Update the total cost
    total += price;
    updateTotal();
}

function removeDish(button, price) {
    const dishItem = button.parentElement;
    dishItem.remove();

    total -= price;
    updateTotal();
}

function updateTotal() {
    document.getElementById("total").innerText = total;
}
