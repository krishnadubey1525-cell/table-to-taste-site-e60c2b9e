const About = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              For over two decades, we've been crafting unforgettable dining experiences 
              that celebrate the finest ingredients and culinary traditions.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Our passionate chefs combine classic techniques with innovative approaches 
              to create dishes that delight the senses and warm the soul.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every plate tells a story, every flavor evokes a memory, and every visit 
              becomes a cherished moment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Signature Dishes</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Expert Chefs</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <div className="text-muted-foreground">Happy Guests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
