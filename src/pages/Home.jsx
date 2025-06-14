// import { useState } from 'react';
// import FilterSidebar from '../components/FilterSidebar';
// import PropertyCard from '../components/PropertyCard';

// const mockProperties = [
//   { id: 1, title: 'Modern Apartment', image: 'https://via.placeholder.com/400', location: 'New York', price: 1200, type: 'apartment' },
//   { id: 2, title: 'Cozy House', image: 'https://via.placeholder.com/400', location: 'San Francisco', price: 2000, type: 'house' },
//   // Add more mock properties
// ];

// const Home = () => {
//   const [filters, setFilters] = useState({});
//   const [properties, setProperties] = useState(mockProperties);

//   const handleFilterChange = (filterValues) => {
//     setFilters(filterValues);
//     const filtered = mockProperties.filter(p => {
//       return (
//         (!filterValues.type || p.type === filterValues.type) &&
//         p.price <= filterValues.price
//       );
//     });
//     setProperties(filtered);
//   };

//   return (
//     <div className="flex">
//       <FilterSidebar onFilterChange={handleFilterChange} />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 flex-1">
//         {properties.map(property => (
//           <PropertyCard key={property.id} property={property} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


// src/pages/Home.jsx
import React from 'react';
import PropertyList from '../components/PropertyList';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Explore Properties</h1>
      <PropertyList />
    </div>
  );
};

export default Home;

