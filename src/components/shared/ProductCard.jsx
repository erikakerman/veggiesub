import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProductCard = ({
  name,
  price,
  seasonStart,
  seasonEnd,
  growingMethod,
  grower,
  imageUrl,
}) => {
  // Format dates
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <img
          src={imageUrl || "/api/placeholder/400/200"}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <CardTitle className="mt-2">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-2xl font-bold">${price}/season</p>
          <p className="text-sm text-gray-500">
            Season: {formatDate(seasonStart)} - {formatDate(seasonEnd)}
          </p>
          <p className="text-sm">{growingMethod}</p>
          <p className="text-sm font-medium">Grown by {grower}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Subscribe</Button>
      </CardFooter>
    </Card>
  );
};
