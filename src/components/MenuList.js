import React, { useState } from "react";
import { nanoid } from "nanoid";

const INITIAL_MENU_ITEMS = [
  {
    id: 1,
    name: "Almost Heaven Burger",
    description:
      "Locally sourced beef, cheese, tomato, onion, lettuce, and pickles on a toasted brioche bun. | 915 cal",
    price: "$12.99",
  },
  {
    id: 2,
    name: "Toasted Chicken Bacon Ranch Wrap",
    description:
      "Hormone-free chicken, turkey bacon, farmhouse blended cheese, onions, and greens in a spinach wrap, toasted. | Choice of side. | 555 cal",
    price: "$12.99",
  },
  {
    id: 3, 
    name: "Buffalo Chicken Quesadilla",
    description: "Hormone-free chicken, buffalo sauce, onions, bleu cheese, and blended cheese, grilled in a spinach wrap. | 490 cal",
    price: "$11.99",
  },
  {
    id: 4, 
    name: "Seasonal Stir Fry",
    description: "Brown rice, squash/zucchini, peppers, onions, and house-made stir fry sauce. | 455 cal",
    price: "$10.99",
  },
  {
    id: 5, 
    name: "Farmhouse Skillet",
    description: "Sauteed onions, peppers, collard greens, sweet potatoes, and mushrooms, topped with hormone-free chicken and an over-easy chicken egg*. | 450 cal",
    price: "$14.99",
  },
  {
    id: 6, 
    name: "Coal Miner's Daughter Seared Meatloaf",
    description: "Locally sourced grass-fed beef. Onions and peppers, topped with house-made mountaineer sauce. | Choice of two sides. | 645 cal",
    price: "$15.99",
  },
  {
    id: 7, 
    name: "Farmhouse Salad - GF",
    description: "Field greens, cucumbers, seasonal veggies, and blended cheese, tossed. | House dressing on the side. | 180 cal",
    price: "$9.99",
  },
  {
    id: 8, 
    name: "Seasonal Cobb Salad - GF",
    description: "Mixed greens, cucumbers, micro greens, blended cheese, fried egg, and turkey bacon. | House dressing on the side. | 315 cal",
    price: "$11.99",
  },
  {
    id: 9, 
    name: "Apple Harvest Salad - GF",
    description: "Mixed greens, cucumbers, carrots, onion, sliced apples, and feta cheese, topped with chicken. | House dressing on the side. | 525 cal",
    price: "$13.99",
  },
  {
    id: 10, 
    name: "Vegan Chicken Bacon Ranch Wrap",
    description: "Gardein no-kill vegan chicken, sweet potato bacon, onions, and vegan cheese in a spinach wrap, toasted. | Served with house-made vegan ranch on the side.",
    price: "$13.99",
  },
  {
    id: 11, 
    name: "Vegan Buffalo Chicken Wrap",
    description: "Gardein no-kill vegan chicken tossed in buffalosauce, vegan cheese, cucumbers, and mixed greens in a spinach wrap, toasted. | Served with house-made vegan ranch on the side.",
    price: "$13.99",
  },
  {
    id: 12, 
    name: "Backyard Bacon Cheeseburger",
    description: "Beyond meat beef, tempeh bacon, vegan cheese, topped with lettuce, green tomato, pickles, onion",
    price: "$14.99",
  }
];

function MenuList() {
  const [menuItems, setMenuItems] = useState(INITIAL_MENU_ITEMS)
  
  const innerHTML = INITIAL_MENU_ITEMS.map((x) => (
    <div key={x.id}>
    <div>{x.name}</div>
    <div>{x.description}</div>
    <div>{x.price}</div>
  </div>

  )
  )
  return (
    <section>
      {innerHTML}
    </section>
  )

  
  
}

export default MenuList;