import useFavorites from '../hooks/useFavorites';

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return <p className="p-4">No favorites saved yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {favorites.map((property) => (
        <div key={property.id} className="border rounded-lg p-4 shadow">
          <img
            src={property.images?.[0] || '/placeholder.jpg'}
            alt={property.title}
            className="w-full h-48 object-cover rounded mb-2"
          />
          <h2 className="text-lg font-semibold">{property.title}</h2>
          <p className="text-gray-600">${property.price.toLocaleString()}</p>
          <p>{property.bedrooms} beds • {property.bathrooms} baths</p>
          <p className="text-sm text-gray-500">{property.location?.city}</p>
        </div>
      ))}
    </div>
  );
}
