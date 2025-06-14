const PropertyDetail = ({ property }) => {
  return (
    <div className="p-4">
      <img src={property.image} className="w-full h-96 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-500 text-xl font-bold">${property.price}</p>
      <p className="mt-4">Property Description and other interactive content here.</p>
    </div>
  );
};
export default PropertyDetail;
