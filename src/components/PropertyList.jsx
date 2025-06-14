import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase/config';
import FilterSidebar from './FilterSidebar';
import useFavorites from '../hooks/useFavorites';

export default function PropertyList() {
    const { favorites, toggleFavorite, isFavorite } = useFavorites();
    const [properties, setProperties] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        city: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: '',
    });

    useEffect(() => {
        const propertiesRef = ref(database, 'properties');

        const unsubscribe = onValue(propertiesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value,
                }));
                setProperties(list);
            } else {
                setProperties([]);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Apply filters
    useEffect(() => {
        const result = properties.filter((property) => {
            const matchesCity = filters.city
                ? property.location?.city?.toLowerCase().includes(filters.city.toLowerCase())
                : true;

            const matchesMin = filters.minPrice
                ? property.price >= parseInt(filters.minPrice)
                : true;

            const matchesMax = filters.maxPrice
                ? property.price <= parseInt(filters.maxPrice)
                : true;

            const matchesBedrooms = filters.bedrooms
                ? property.bedrooms >= parseInt(filters.bedrooms)
                : true;

            return matchesCity && matchesMin && matchesMax && matchesBedrooms;
        });

        setFiltered(result);
    }, [filters, properties]);

    if (loading) return <p className="p-4">Loading...</p>;
    if (filtered.length === 0) return <p className="p-4">No properties match your filters.</p>;

    return (
        <div className="flex flex-col md:flex-row p-4 gap-6">
            {/* Sidebar Filters */}
            <FilterSidebar filters={filters} onChange={setFilters} />

            {/* Property Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                {filtered.map((property) => (
                    <div key={property.id} className="relative border rounded-lg p-4 shadow">
                        {/* Favorite button */}
                        <button
                            onClick={() => toggleFavorite(property)}
                            className={`absolute top-2 right-2 text-xl ${isFavorite(property.id) ? 'text-red-500' : 'text-gray-300'
                                }`}
                        >
                            ❤
                        </button>

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
        </div>
    );
}
