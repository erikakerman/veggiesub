import { useState } from "react";

const CartItemImage = ({ imageUrl, productName }) => {
  const [imageError, setImageError] = useState(false);

  // Helper to determine if the URL is a placeholder
  const isPlaceholder = (url) => url?.includes("/api/placeholder/");

  // Get the correct image URL
  const getImageUrl = (url) => {
    if (!url) return null;
    if (isPlaceholder(url)) {
      // If it's a placeholder, use the correct asset path instead
      // You'll want to adjust this based on your actual image naming convention
      return `/assets/${productName.toLowerCase().replace(" ", "-")}.jpg`;
    }
    return url;
  };

  const finalImageUrl = getImageUrl(imageUrl);

  return (
    <div className="w-24 h-24 bg-cream rounded-lg overflow-hidden flex items-center justify-center">
      {!imageError && finalImageUrl ? (
        <img
          src={finalImageUrl}
          alt={productName}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="text-moss text-sm text-center p-2">
          {productName.split(" ")[0]}
        </div>
      )}
    </div>
  );
};

export default CartItemImage;
