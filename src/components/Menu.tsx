import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const menuItems = [
  {
    category: "Starters",
    dishes: [
      { name: "Seared Scallops", description: "With cauliflower purée and crispy pancetta", price: "$18", image: dish1 },
      { name: "Truffle Arancini", description: "Creamy risotto balls with black truffle", price: "$15" },
      { name: "Burrata Caprese", description: "Fresh burrata, heirloom tomatoes, basil oil", price: "$16" },
    ]
  },
  {
    category: "Main Courses",
    dishes: [
      { name: "Pan-Seared Salmon", description: "With lemon butter sauce and seasonal vegetables", price: "$32" },
      { name: "Ribeye Steak", description: "12oz prime ribeye with garlic mashed potatoes", price: "$45", image: dish2 },
      { name: "Homemade Pasta", description: "Fresh pasta with your choice of sauce", price: "$28" },
      { name: "Herb-Crusted Lamb", description: "With mint jus and roasted root vegetables", price: "$38" },
    ]
  },
  {
    category: "Desserts",
    dishes: [
      { name: "Chocolate Fondant", description: "Warm chocolate cake with vanilla ice cream", price: "$12", image: dish3 },
      { name: "Tiramisu", description: "Classic Italian dessert with espresso", price: "$10" },
      { name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar", price: "$11" },
    ]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Menu</h2>
          <p className="text-lg text-muted-foreground">Carefully crafted dishes using the finest ingredients</p>
        </div>

        <div className="space-y-16">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-3xl font-bold mb-8 text-primary text-center">{section.category}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {section.dishes.map((dish) => (
                  <div key={dish.name} className="bg-card rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
                    {dish.image && (
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-foreground">{dish.name}</h4>
                      <span className="text-xl font-bold text-accent">{dish.price}</span>
                    </div>
                    <p className="text-muted-foreground">{dish.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
