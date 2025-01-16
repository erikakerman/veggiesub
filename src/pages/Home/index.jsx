import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Clock, Users, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center bg-cream">
        {" "}
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-shadow mb-6">
              Fresh Local Produce, Delivered to Your Door
            </h1>
            <p className="text-xl mb-8">
              Support local farmers and enjoy seasonal vegetables grown with
              care in your community.
            </p>
            <Button className="bg-shadow hover:bg-shadow/90 text-white text-lg px-6 py-3 rounded-lg shadow-lg">
              Browse Seasonal Produce <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Leaf className="h-12 w-12 text-sheen mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Local & Sustainable
              </h3>
              <p className="text-gray-600">
                All produce comes from farmers within 50km of your location.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-sheen mb-4" />
              <h3 className="text-xl font-semibold mb-2">Weekly Deliveries</h3>
              <p className="text-gray-600">
                Fresh harvest delivered to your door every week.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-sheen mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Plans</h3>
              <p className="text-gray-600">
                Choose between single, double, or family-sized portions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-gradient-to-b from-white to-champagne/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            This Season&apos;s Harvest
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Card
                  key={i}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square relative">
                    <img
                      src="/api/placeholder/400/400"
                      alt="Seasonal vegetable"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">
                      Season&apos;s Best {i + 1}
                    </h3>
                    <p className="text-sm text-gray-600">
                      From our local farmers
                    </p>
                  </div>
                </Card>
              ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-sheen text-sheen hover:bg-sheen hover:text-white"
            >
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-shadow text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-champagne" />
          <h2 className="text-3xl font-bold mb-4">
            Support Your Local Farmers
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join our community of conscious consumers supporting sustainable
            agriculture.
          </p>
          <Button className="bg-champagne hover:bg-champagne/90 text-shadow">
            Start Your Subscription
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
