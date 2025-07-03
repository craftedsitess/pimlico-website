
import { MenuData } from '@/types/menu';

export const menuData: MenuData = {
  categories: [
    {
      name: "Chef's Special",
      icon: "👨‍🍳",
      items: [
        { name: "Green Thai Curry Rice", price: 459, description: "Authentic Thai green curry with jasmine rice", isVeg: true, isSpecial: true },
        { name: "Pan-Grilled Salmon", price: 999, description: "Fresh Atlantic salmon with herbs", isVeg: false, isSpecial: true },
        { name: "Christmas Plum Cake", price: 399, description: "Traditional festive cake with rich plums", isVeg: true, isSpecial: true },
        { name: "Beetroot & Spinach Hummus with Pita", price: 299, description: "Colorful hummus with fresh pita bread", isVeg: true, isSpecial: true },
        { name: "Massaman Thai Curry Rice", price: 449, description: "Rich and aromatic Thai curry", isVeg: true, isSpecial: true },
        { name: "Yellow Thai Curry Rice", price: 449, description: "Mild and creamy Thai curry", isVeg: true, isSpecial: true }
      ]
    },
    {
      name: "Special Binge Combos",
      icon: "🍽️",
      items: [
        { name: "Combo 1", price: 999, description: "Jalapeño Cheese Croquettes + Penne Alfredo + Farmhouse Pizza + Ice Tea", isVeg: true },
        { name: "Combo 2", price: 999, description: "Hummus & Pita + Lasagna + Mojito + New York Cheesecake", isVeg: true },
        { name: "Combo 3", price: 1499, description: "Nachos + Risotto Aglio e Olio + Cottage Cheese Steak + 2 Ice Teas + NY Cheesecake", isVeg: true },
        { name: "Combo 4", price: 999, description: "Peri-Peri Chicken Wings + Chicken Alfredo + BBQ Chicken Pizza + Any Ice Tea", isVeg: false },
        { name: "Combo 5", price: 1199, description: "Chicken Popcorn + BBQ Wings + Chicken Lasagna + 2 Mojitos + NY Cheesecake", isVeg: false },
        { name: "Combo 6", price: 1499, description: "Chicken Nachos + Chicken Marengo Steak + Classic Chicken Steak + NY Cheesecake", isVeg: false }
      ]
    },
    {
      name: "Soups & Salads",
      icon: "🥗",
      items: [
        { name: "Veg Caesar Salad", price: 399, description: "Classic Caesar with fresh vegetables", isVeg: true },
        { name: "Chicken Caesar Salad", price: 399, description: "Traditional Caesar with grilled chicken", isVeg: false },
        { name: "Grilled Chicken Salad", price: 269, description: "Fresh greens with tender grilled chicken", isVeg: false },
        { name: "Chicken Roasted Veg Salad", price: 399, description: "Chicken with seasonal roasted vegetables", isVeg: false },
        { name: "Corn Salsa", price: 269, description: "Fresh corn salsa with herbs", isVeg: true },
        { name: "Mediterranean Veg Salad", price: 359, description: "Mediterranean vegetables with olive oil", isVeg: true },
        { name: "Roasted Veg Salad", price: 299, description: "Seasonal roasted vegetables", isVeg: true },
        { name: "Warm Chicken Salad", price: 399, description: "Warm salad with seasoned chicken", isVeg: false },
        { name: "Chicken Clear Soup", price: 189, description: "Light and flavorful chicken broth", isVeg: false },
        { name: "Chicken Leek Soup", price: 199, description: "Creamy soup with chicken and leeks", isVeg: false },
        { name: "Cream of Chicken Soup", price: 199, description: "Rich and creamy chicken soup", isVeg: false },
        { name: "Cream of Spinach Soup", price: 189, description: "Velvety spinach soup", isVeg: true },
        { name: "Cream of Tomato Soup", price: 189, description: "Classic tomato soup", isVeg: true },
        { name: "Cream of Veg Soup", price: 189, description: "Mixed vegetable cream soup", isVeg: true },
        { name: "Chicken Minestrone Soup", price: 199, description: "Italian soup with chicken", isVeg: false },
        { name: "Cream of Mushroom Soup", price: 189, description: "Rich mushroom soup", isVeg: true },
        { name: "Veg Minestrone Soup", price: 189, description: "Classic Italian vegetable soup", isVeg: true }
      ]
    },
    {
      name: "Appetizers / Small Plates",
      icon: "🍤",
      items: [
        { name: "Cheese Garlic Bread", price: 249, description: "Crispy garlic bread with melted cheese", isVeg: true },
        { name: "Bruschetta", price: 299, description: "Toasted bread with fresh tomatoes", isVeg: true },
        { name: "BBQ Chicken Wings", price: 359, description: "Smoky barbecue chicken wings", isVeg: false },
        { name: "Crispy Chicken Fingers", price: 389, description: "Golden fried chicken strips", isVeg: false },
        { name: "Fish Fingers", price: 399, description: "Crispy fish fingers with tartar sauce", isVeg: false },
        { name: "French Fries", price: 199, description: "Classic golden fries", isVeg: true },
        { name: "Peri-Peri Fries", price: 249, description: "Spicy peri-peri seasoned fries", isVeg: true },
        { name: "Loaded Nachos", price: 289, description: "Nachos with cheese and toppings", isVeg: true },
        { name: "Chicken Loaded Nachos", price: 359, description: "Nachos with chicken and cheese", isVeg: false },
        { name: "Honey Chilli Potato", price: 289, description: "Sweet and spicy potato dish", isVeg: true },
        { name: "Lemon Butter Garlic Prawns", price: 429, description: "Prawns in lemon butter sauce", isVeg: false },
        { name: "Mustard Garlic Prawns", price: 429, description: "Prawns with mustard garlic", isVeg: false },
        { name: "Pan-Roasted Prawns", price: 429, description: "Perfectly roasted prawns", isVeg: false },
        { name: "Wasabi Prawns", price: 449, description: "Prawns with wasabi kick", isVeg: false },
        { name: "Crispy Fish / Prawn Taco", price: 399, description: "Crispy seafood tacos", isVeg: false },
        { name: "Crispy Chicken Taco", price: 369, description: "Crunchy chicken tacos", isVeg: false },
        { name: "Thecha Paneer Taco", price: 269, description: "Spicy paneer tacos", isVeg: true },
        { name: "California Sushi", price: 699, description: "Classic California roll", isVeg: false },
        { name: "Classic Asparagus Tempura Sushi", price: 699, description: "Tempura asparagus sushi", isVeg: true },
        { name: "Uramaki Sushi", price: 699, description: "Inside-out sushi roll", isVeg: false },
        { name: "Classic Prawn Tempura Sushi", price: 799, description: "Tempura prawn sushi", isVeg: false },
        { name: "Chicken Bulgogi Gimbap", price: 699, description: "Korean-style chicken roll", isVeg: false },
        { name: "Pop Chicken Sushi", price: 699, description: "Crispy chicken sushi", isVeg: false },
        { name: "Mediterranean Flatbread", price: 359, description: "Flatbread with Mediterranean toppings", isVeg: true },
        { name: "Mushroom Popcorn", price: 199, description: "Crispy mushroom bites", isVeg: true },
        { name: "Potato Wedges", price: 179, description: "Seasoned potato wedges", isVeg: true },
        { name: "Mushroom Ricotta Toast", price: 389, description: "Mushroom and ricotta on toast", isVeg: true },
        { name: "Aloo Tikki Slider", price: 349, description: "Potato patty sliders", isVeg: true },
        { name: "Chicken Sliders", price: 399, description: "Mini chicken burgers", isVeg: false }
      ]
    },
    {
      name: "Dumplings",
      icon: "🥟",
      items: [
        { name: "Veg Gyoza", price: 269, description: "Pan-fried vegetable dumplings", isVeg: true },
        { name: "Classic Chicken Dumpling", price: 329, description: "Traditional chicken dumplings", isVeg: false },
        { name: "Thai Chicken Dumpling", price: 359, description: "Thai-style chicken dumplings", isVeg: false },
        { name: "Spicy Broccoli Dumpling", price: 299, description: "Spicy broccoli filled dumplings", isVeg: true },
        { name: "Cream Cheese Spinach Dumpling", price: 289, description: "Creamy spinach dumplings", isVeg: true },
        { name: "Chicken Charcoal Dumpling", price: 359, description: "Charcoal-colored chicken dumplings", isVeg: false },
        { name: "Chicken Gyoza", price: 299, description: "Pan-fried chicken dumplings", isVeg: false },
        { name: "Chicken Basil Burnt Garlic Dumpling", price: 329, description: "Aromatic chicken dumplings", isVeg: false },
        { name: "Spicy Chicken Shiitake Dumpling", price: 339, description: "Chicken with shiitake mushrooms", isVeg: false },
        { name: "Sesame Fish & Prawns Dumpling", price: 369, description: "Seafood dumplings with sesame", isVeg: false },
        { name: "Spicy Black Pepper Fish Dumpling", price: 369, description: "Fish dumplings with black pepper", isVeg: false },
        { name: "Prawns Spinach Roll", price: 369, description: "Prawns wrapped in spinach", isVeg: false }
      ]
    },
    {
      name: "Pasta",
      icon: "🍝",
      items: [
        { name: "Veg Alfredo", price: 399, description: "Creamy Alfredo with vegetables", isVeg: true },
        { name: "Penne Primavera", price: 399, description: "Penne with fresh vegetables", isVeg: true },
        { name: "Fusilli All'Arrabbiata", price: 399, description: "Spicy tomato sauce pasta", isVeg: true },
        { name: "Wild Mushroom Pasta", price: 299, description: "Pasta with wild mushrooms", isVeg: true },
        { name: "Spinach-Cottage-Cheese Ravioli", price: 399, description: "Stuffed ravioli with spinach", isVeg: true },
        { name: "Ravioli in Mushroom & Cheese", price: 399, description: "Ravioli in creamy mushroom sauce", isVeg: true },
        { name: "Chicken Alfredo", price: 449, description: "Classic chicken Alfredo", isVeg: false },
        { name: "Chicken Spaghetti al Pesto", price: 449, description: "Pesto spaghetti with chicken", isVeg: false },
        { name: "Spaghetti Bolognese", price: 449, description: "Traditional meat sauce spaghetti", isVeg: false },
        { name: "Spaghetti Aglio Olio", price: 399, description: "Garlic and olive oil spaghetti", isVeg: true },
        { name: "Spaghetti al Pesto", price: 399, description: "Fresh basil pesto spaghetti", isVeg: true },
        { name: "Penne Mushroom & Chicken", price: 449, description: "Penne with chicken and mushrooms", isVeg: false },
        { name: "Chicken Penne Primavera", price: 449, description: "Chicken penne with vegetables", isVeg: false },
        { name: "Penne Garlic & Prawns", price: 549, description: "Penne with garlic prawns", isVeg: false }
      ]
    },
    {
      name: "Risotto & Bakes",
      icon: "🍚",
      items: [
        { name: "Risotto", price: 319, description: "Classic Italian rice dish", isVeg: true },
        { name: "Spinach Risotto", price: 329, description: "Creamy spinach risotto", isVeg: true },
        { name: "Chicken Risotto", price: 399, description: "Risotto with tender chicken", isVeg: false },
        { name: "Aglio e Olio Risotto", price: 349, description: "Garlic and oil risotto", isVeg: true },
        { name: "Mushroom Corn Fricassee", price: 349, description: "Creamy mushroom and corn dish", isVeg: true },
        { name: "Buddha Bowl", price: 369, description: "Healthy grain and vegetable bowl", isVeg: true },
        { name: "Cannelloni", price: 449, description: "Stuffed pasta tubes", isVeg: true },
        { name: "Chicken Cannelloni", price: 529, description: "Chicken-filled cannelloni", isVeg: false },
        { name: "Pimlico Baked Vegetable", price: 399, description: "House special baked vegetables", isVeg: true }
      ]
    },
    {
      name: "Mains & Steaks",
      icon: "🥩",
      items: [
        { name: "Classic Chicken Steak", price: 429, description: "Grilled chicken steak", isVeg: false },
        { name: "BBQ Chicken Steak", price: 429, description: "Barbecue glazed chicken steak", isVeg: false },
        { name: "Chicken Marengo", price: 499, description: "Classic French chicken dish", isVeg: false },
        { name: "Chicken Parmigiano", price: 549, description: "Chicken with Parmesan crust", isVeg: false },
        { name: "Chicken Stroganoff", price: 469, description: "Creamy chicken stroganoff", isVeg: false },
        { name: "Chicken Tangmary", price: 489, description: "Herb-crusted chicken", isVeg: false },
        { name: "Chicken with Creamy Mushroom & Beetroot", price: 489, description: "Chicken in creamy sauce", isVeg: false },
        { name: "Pan-Grilled Garlic Chicken with Lemon Potatoes", price: 489, description: "Garlic chicken with potatoes", isVeg: false },
        { name: "Grilled Basa Fish", price: 549, description: "Fresh grilled fish", isVeg: false },
        { name: "Grilled Fish \"Balzac\"", price: 549, description: "Fish in special Balzac style", isVeg: false },
        { name: "Grilled Chicken Forenday", price: 549, description: "Specialty grilled chicken", isVeg: false },
        { name: "Prawns-Broccoli-Mushroom Bake", price: 599, description: "Baked prawns with vegetables", isVeg: false },
        { name: "Peri Peri Balzac", price: 549, description: "Spicy peri peri preparation", isVeg: false },
        { name: "Cottage Cheese Steak", price: 389, description: "Grilled cottage cheese steak", isVeg: true },
        { name: "Veg Marengo Steak", price: 389, description: "Vegetarian version of Marengo", isVeg: true }
      ]
    },
    {
      name: "Burger & Sandwich",
      icon: "🍔",
      items: [
        { name: "Chicken Burger", price: 389, description: "Juicy chicken burger", isVeg: false },
        { name: "Scamorza Chicken Burger", price: 389, description: "Chicken burger with Scamorza cheese", isVeg: false },
        { name: "Creole Prawn Burger", price: 419, description: "Spicy prawn burger", isVeg: false },
        { name: "Aloo Tikki Burger", price: 299, description: "Potato patty burger", isVeg: true },
        { name: "Roasted Beetroot & Blue Cheese Open-Face", price: 349, description: "Open sandwich with beetroot", isVeg: true },
        { name: "Tamarind Chicken Open-Face", price: 389, description: "Open sandwich with tamarind chicken", isVeg: false },
        { name: "Grilled Chicken & Garlic Labneh Open-Face", price: 399, description: "Chicken with garlic labneh", isVeg: false },
        { name: "Grilled Chicken & Veg Open-Face", price: 369, description: "Chicken and vegetable sandwich", isVeg: false },
        { name: "Smoked Salmon & Goat Cheese Open-Face", price: 379, description: "Salmon with goat cheese", isVeg: false }
      ]
    },
    {
      name: "Neapolitan Pizza (12 inch)",
      icon: "🍕",
      items: [
        { name: "The Queen Margherita", price: 459, description: "Classic margherita pizza", isVeg: true },
        { name: "Veg Piri-Piri", price: 499, description: "Spicy vegetarian pizza", isVeg: true },
        { name: "Genovese Pesto", price: 539, description: "Pesto-based pizza", isVeg: true },
        { name: "Veggie Bianca", price: 499, description: "White sauce vegetable pizza", isVeg: true },
        { name: "Mushroom Parmesana", price: 539, description: "Mushroom and Parmesan pizza", isVeg: true },
        { name: "Classic Chicken Pepperoni", price: 599, description: "Pepperoni pizza", isVeg: false },
        { name: "Spiced Chicken Ricotta", price: 559, description: "Chicken with ricotta cheese", isVeg: false },
        { name: "Chicken Salami with Mascarpone & Walnut", price: 589, description: "Gourmet chicken salami pizza", isVeg: false },
        { name: "Picante", price: 559, description: "Spicy pizza with chicken", isVeg: false },
        { name: "Peri-Peri Chicken", price: 559, description: "Spicy peri-peri chicken pizza", isVeg: false }
      ]
    },
    {
      name: "Desserts",
      icon: "🍰",
      items: [
        { name: "Plain Brownie", price: 169, description: "Rich chocolate brownie", isVeg: true },
        { name: "New York Cheesecake", price: 189, description: "Classic NY style cheesecake", isVeg: true },
        { name: "Blueberry Cheesecake", price: 249, description: "Cheesecake with fresh blueberries", isVeg: true },
        { name: "Biscoff Cheesecake", price: 239, description: "Cheesecake with Biscoff cookies", isVeg: true },
        { name: "Choco Almond Pie", price: 249, description: "Chocolate pie with almonds", isVeg: true },
        { name: "Tiramisu Pastry", price: 269, description: "Classic Italian tiramisu", isVeg: true }
      ]
    },
    {
      name: "Drinks / Beverages",
      icon: "🍹",
      items: [
        { name: "Apple Cranberry Tea", price: 129, description: "Fruity herbal tea", isVeg: true },
        { name: "Egyptian Mint Tea", price: 139, description: "Refreshing mint tea", isVeg: true },
        { name: "Fennel Green Tea", price: 129, description: "Aromatic fennel tea", isVeg: true },
        { name: "Green Tea", price: 79, description: "Classic green tea", isVeg: true },
        { name: "Ginger Tea", price: 89, description: "Warming ginger tea", isVeg: true },
        { name: "Lemon Tea", price: 89, description: "Citrus lemon tea", isVeg: true },
        { name: "Masala Tea", price: 99, description: "Spiced Indian tea", isVeg: true },
        { name: "Green-Tea Peach-Hibiscus", price: 159, description: "Floral peach tea", isVeg: true },
        { name: "Rooibos Cinnamon Tea", price: 129, description: "Cinnamon-spiced rooibos", isVeg: true },
        { name: "Americano", price: 149, description: "Classic black coffee", isVeg: true },
        { name: "Iced Americano", price: 159, description: "Cold black coffee", isVeg: true },
        { name: "Cappuccino", price: 149, description: "Espresso with steamed milk", isVeg: true },
        { name: "Café Latte", price: 149, description: "Smooth milk coffee", isVeg: true },
        { name: "Café Mocha", price: 169, description: "Chocolate coffee blend", isVeg: true },
        { name: "Espresso Macchiato", price: 169, description: "Espresso with milk foam", isVeg: true },
        { name: "Irish Coffee", price: 179, description: "Coffee with Irish cream", isVeg: true },
        { name: "Spanish Latte", price: 169, description: "Sweet condensed milk coffee", isVeg: true },
        { name: "Hot Chocolate", price: 179, description: "Rich hot chocolate", isVeg: true },
        { name: "Frozen Hot Chocolate", price: 329, description: "Cold chocolate drink", isVeg: true },
        { name: "Coconut Iced Coffee", price: 249, description: "Tropical iced coffee", isVeg: true },
        { name: "Hazelnut Frappe", price: 199, description: "Hazelnut flavored frappe", isVeg: true },
        { name: "Caramel Frappe", price: 199, description: "Sweet caramel frappe", isVeg: true },
        { name: "Vanilla Frappe", price: 199, description: "Classic vanilla frappe", isVeg: true },
        { name: "KitKat Shake", price: 329, description: "Chocolate shake with KitKat", isVeg: true },
        { name: "Nutella-Oreo Shake", price: 349, description: "Nutella and Oreo milkshake", isVeg: true },
        { name: "Strawberry Shake", price: 349, description: "Fresh strawberry milkshake", isVeg: true },
        { name: "Peanut-Butter-Banana Shake", price: 329, description: "Protein-rich shake", isVeg: true },
        { name: "Pimlico Blast", price: 549, description: "House special drink", isVeg: true },
        { name: "Coffee Browe", price: 329, description: "Coffee brownie shake", isVeg: true },
        { name: "Blueberry Mojito", price: 189, description: "Fresh blueberry mojito", isVeg: true },
        { name: "Raspberry Mojito", price: 189, description: "Tangy raspberry mojito", isVeg: true },
        { name: "Strawberry Mojito", price: 189, description: "Sweet strawberry mojito", isVeg: true },
        { name: "Watermelon Basil Mojito", price: 249, description: "Refreshing watermelon mojito", isVeg: true },
        { name: "Citrus Caprioska", price: 249, description: "Citrus-based refresher", isVeg: true },
        { name: "Blue Lagoon", price: 189, description: "Blue tropical drink", isVeg: true },
        { name: "Kiwi Cucumber", price: 189, description: "Fresh kiwi cucumber cooler", isVeg: true },
        { name: "Bubble-gum Mojito", price: 189, description: "Fun bubble gum flavored mojito", isVeg: true },
        { name: "Apple Cucumber", price: 189, description: "Apple cucumber refresher", isVeg: true },
        { name: "Green Grenade", price: 189, description: "Green fruit punch", isVeg: true },
        { name: "Peach Ice Tea", price: 139, description: "Peach flavored iced tea", isVeg: true },
        { name: "Blueberry Ice Tea", price: 139, description: "Blueberry iced tea", isVeg: true },
        { name: "Strawberry Ice Tea", price: 139, description: "Strawberry iced tea", isVeg: true },
        { name: "Lemon Mint Ice Tea", price: 139, description: "Classic lemon mint tea", isVeg: true },
        { name: "Fresh Lime Soda", price: 139, description: "Tangy lime soda", isVeg: true },
        { name: "Blueberry Ice Crush", price: 189, description: "Crushed ice with blueberry", isVeg: true },
        { name: "Raspberry Ice Crush", price: 189, description: "Crushed ice with raspberry", isVeg: true },
        { name: "Fresh Watermelon Juice", price: 179, description: "Pure watermelon juice", isVeg: true },
        { name: "Orange Juice", price: 179, description: "Fresh orange juice", isVeg: true }
      ]
    }
  ]
};
