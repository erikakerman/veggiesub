import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Clock, Users, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-cream border-b-2 border-shadow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-shadow mb-4">
              Subscribe to you locally grown Vegetables
            </h1>
            <p className="text-lg mb-6">
              Get fresh vegetables delivered weekly. Choose your portion size
              and support your local grower.
            </p>
            <Button className="bg-shadow hover:bg-shadow/90 text-white px-4 py-2 rounded-lg shadow-md">
              Start Your Subscription <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white border-b-2 border-shadow/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-5 hover:shadow-md transition-shadow">
              <Leaf className="h-10 w-10 text-sheen mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                Local & Sustainable
              </h3>
              <p className="text-gray-600 text-sm">
                All produce comes from farmers within 50km of your location.
              </p>
            </Card>
            <Card className="p-5 hover:shadow-md transition-shadow">
              <Clock className="h-10 w-10 text-sheen mb-3" />
              <h3 className="text-lg font-semibold mb-2">Weekly Deliveries</h3>
              <p className="text-gray-600 text-sm">
                Fresh harvest delivered to your door every week.
              </p>
            </Card>
            <Card className="p-5 hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-sheen mb-3" />
              <h3 className="text-lg font-semibold mb-2">Flexible Plans</h3>
              <p className="text-gray-600 text-sm">
                Choose between single, double, or family-sized portions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-shadow text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-12 w-12 mx-auto mb-4 text-champagne" />
          <h2 className="text-2xl font-bold mb-3">
            Support Your Local Farmers
          </h2>
          <p className="max-w-xl mx-auto mb-6 text-sm">
            Join our community of conscious consumers supporting sustainable
            agriculture.
          </p>
          <Button className="bg-champagne hover:bg-champagne/90 text-shadow text-sm">
            Start Your Subscription
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
