document.addEventListener("DOMContentLoaded", function () {
    const dishImages = document.querySelectorAll(".dishes img");

    // Add click event listeners to each dish image
    dishImages.forEach(img => {
        img.addEventListener('click', function () {
            const dishName = this.alt; // Use the alt text as the name 
            let price, description;

            
            switch (dishName) {
                case 'Hibachi Bowl':
                    price = 14;
                    description = 'A fresh bowl with hibachi steak and shrimp. Paired with fresh vegetables and fried rice.';
                    break;
                case 'Tuna Poke Bowl':
                    price = 13;
                    description = 'Delicious tuna with edamame and rice.';
                    break;
                case 'Chicken Poke Bowl':
                    price = 12;
                    description = 'Beautiful poke bowl. Comes with chicken, avocado, cucumber, and a delicious sesame dressing.';
                    break;
                case 'Island Green Smoothie':
                    price = 7;
                    description = 'A refreshing smoothie with spinach, kale, mango, and pineapple.';
                    break;
                case 'Bahama Mama Smoothie':
                    price = 6;
                    description = 'A tropical blend of strawberries, pineapple, and coconut.';
                    break;
                case 'Chicken Pesto Flatbread':
                    price = 9;
                    description = 'Grilled chicken with pesto and fresh greens in a flatbread wrap.';
                    break;
                default:
                    price = 0;
                    description = 'Description not available.';
            }

            // Updates the dish details
            showDish(dishName, price, description);
        });
    });
});

function showDish(name, price, description) {
    const dishDetails = document.getElementById("dish-details");

    dishDetails.innerHTML = `
        <h4>${name} - $${price}</h4>
        <p>${description}</p>
    `;

    dishDetails.style.display = 'block';
}
