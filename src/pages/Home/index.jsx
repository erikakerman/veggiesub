import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-sheen text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold mb-6 text-champagne">
            The next generation of
            <br />
            local produce
          </h1>
          <p className="text-xl mb-8 max-w-xl text-white">
            Connect with local farmers and get fresh, seasonal produce delivered
            to your door. Support sustainable agriculture in your community.
          </p>
          <Button
            variant="secondary"
            className="bg-champagne text-shadow hover:bg-tan transition-colors"
          >
            Browse Products
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gradient-to-b from-tan to-champagne">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-shadow">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-apple w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-shadow font-semibold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-shadow">
                Browse Products
              </h3>
              <p className="text-taupe">
                Explore our selection of seasonal, locally grown produce
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-apple w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-shadow font-semibold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-shadow">
                Subscribe
              </h3>
              <p className="text-taupe">
                Choose your subscription plan and delivery frequency
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-apple w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-shadow font-semibold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-shadow">Enjoy</h3>
              <p className="text-taupe">
                Receive fresh, local produce delivered to your door
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
