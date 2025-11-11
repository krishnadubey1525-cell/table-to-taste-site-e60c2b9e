import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Visit Us</h2>
          <p className="text-lg text-muted-foreground">We'd love to welcome you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-card p-6 rounded-lg shadow-md border border-border">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2 text-foreground">Location</h3>
            <p className="text-muted-foreground">123 Culinary Avenue<br />New York, NY 10001</p>
          </div>

          <div className="text-center bg-card p-6 rounded-lg shadow-md border border-border">
            <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2 text-foreground">Phone</h3>
            <p className="text-muted-foreground">(555) 123-4567</p>
          </div>

          <div className="text-center bg-card p-6 rounded-lg shadow-md border border-border">
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2 text-foreground">Email</h3>
            <p className="text-muted-foreground">info@restaurant.com</p>
          </div>

          <div className="text-center bg-card p-6 rounded-lg shadow-md border border-border">
            <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2 text-foreground">Hours</h3>
            <p className="text-muted-foreground">
              Mon-Thu: 5PM - 10PM<br />
              Fri-Sat: 5PM - 11PM<br />
              Sun: 5PM - 9PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
