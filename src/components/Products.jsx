import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import api from '../utils/api';
import { HiShoppingBag, HiStar, HiCurrencyDollar, HiCheck } from 'react-icons/hi';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/api/products');
                setProducts(response.data);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to load products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <Layout>
                <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="flex items-center justify-center h-full">
                    <div className="text-red-500 text-xl">{error}</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="p-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Our Products</h1>
                    <p className="text-gray-400">Choose the perfect package for your needs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product._id} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg">
                                    <HiShoppingBag className="text-blue-500 text-xl" />
                                </div>
                                <h3 className="font-semibold text-white text-xl">{product.name}</h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-400">{product.description}</p>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <HiCurrencyDollar className="text-green-500" />
                                <span className="text-white font-semibold">{product.price}</span>
                            </div>
                            <ul className="space-y-2 mb-6">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-300">
                                        <HiCheck className="text-green-500" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                                Select Package
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Products; 