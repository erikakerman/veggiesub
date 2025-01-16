import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Clock, Users, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import background from "@/assets/background.webp";

const Home = () => {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate("/browse");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full width background */}
      <section className="relative border-b-2 border-shadow/10 w-full bg-white">
        {/* Background container that fills viewport width */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content container aligned with navbar */}
        <div className="relative max-w-6xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] px-4">
          <div className="h-full flex items-center">
            <div className="max-w-xl w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                Subscribe to your locally grown Vegetables
              </h1>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white">
                Get fresh vegetables delivered weekly. Choose your portion size
                and support your local grower.
              </p>
              <Button
                onClick={handleSubscribeClick}
                className="bg-shadow hover:bg-shadow/90 text-white px-3 sm:px-4 py-2 rounded-lg shadow-md text-sm sm:text-base w-full sm:w-auto"
              >
                Start Your Subscription <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 bg-white border-b-2 border-shadow/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-5 hover:shadow-md transition-shadow">
              <Leaf className="h-8 w-8 sm:h-10 sm:w-10 text-sheen mb-2 sm:mb-3" />
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                Local & Sustainable
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                All produce comes from farmers within 50km of your location.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 hover:shadow-md transition-shadow">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-sheen mb-2 sm:mb-3" />
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                Weekly Deliveries
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Fresh harvest delivered to your door every week.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 text-sheen mb-2 sm:mb-3" />
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                Flexible Plans
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Choose between single, double, or family-sized portions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 bg-shadow text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Heart className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-champagne" />
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
            Support Your Local Farmers
          </h2>
          <p className="max-w-xl mx-auto mb-4 sm:mb-6 text-xs sm:text-sm">
            Join our community of conscious consumers supporting sustainable
            agriculture.
          </p>
          <Button
            onClick={handleSubscribeClick}
            className="bg-champagne hover:bg-champagne/90 text-shadow text-sm w-full sm:w-auto"
          >
            Start Your Subscription
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
