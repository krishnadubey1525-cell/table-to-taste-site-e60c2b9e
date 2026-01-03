import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToReservations = () => {
    document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://cdn.dotpe.in/longtail/custom_website/8424874/5RNo8hIi.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Experience Culinary Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
          Where tradition meets innovation in every dish
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Button 
            variant="cta"
            size="lg" 
            onClick={scrollToReservations}
            className="text-lg px-10 py-7 rounded-full"
          >
            <span>Reserve a Table</span>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-lg px-8 py-6"
          >
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
