import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("reservations").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        guests: parseInt(formData.guests),
        reservation_date: formData.date,
        reservation_time: formData.time,
        message: formData.message || null,
      });

      if (error) throw error;

      toast.success("Reservation request received! We'll contact you shortly to confirm.");
      setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      toast.error("Failed to submit reservation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservations" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Reserve Your Table</h2>
          <p className="text-lg text-muted-foreground">Book your experience with us</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-lg border border-border">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Name *</label>
              <Input 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
              <Input 
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Phone *</label>
              <Input 
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Number of Guests *</label>
              <Input 
                required
                type="number"
                min="1"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                placeholder="2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Date *</label>
              <Input 
                required
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Time *</label>
              <Input 
                required
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Special Requests</label>
            <Textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Any dietary restrictions or special occasions?"
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Request Reservation"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Reservations;
