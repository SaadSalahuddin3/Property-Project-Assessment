const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition-all p-4">
      <img src={property.image} alt="Property" className="w-full h-48 object-cover rounded" />
      <h2 className="mt-2 text-lg font-semibold">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-500 font-bold">${property.price}</p>
    </div>
  );
};

export default PropertyCard;
