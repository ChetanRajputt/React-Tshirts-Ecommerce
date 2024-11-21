import React, { useState } from 'react';
import ProductCard from "../components/ProductCard";
import { Button, products } from '../components/index';
import { ThreeDots } from 'react-loader-spinner';
import { IoMdClose } from 'react-icons/io';

const Mugs = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Mugs');
  const [sortOption, setSortOption] = useState('default');

  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 6;
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalId, setCurrentModalId] = useState(0);

  React.useEffect(() => {
    setAllProducts(products);
    setDisplayedProducts(products.slice(0, productsPerPage));
  }, []);

  const loadMoreProducts = () => {
    setLoading(true);
    setTimeout(() => {
      const newIndex = currentIndex + productsPerPage;
      const newProducts = allProducts.slice(currentIndex, newIndex);
      setDisplayedProducts(prevProducts => [...prevProducts, ...newProducts]);
      setCurrentIndex(newIndex);
      setLoading(false);
    }, 3000);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsFilterModalOpen(false);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const filteredProducts = allProducts.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <main className='bg-[#F5F5F5] w-full'>
      {/* Filter Modal */}
      {isFilterModalOpen && (
         <div className="fixed inset-0 z-50 flex justify-start">
         <div className='absolute inset-0 bg-black opacity-50' onClick={() => setIsFilterModalOpen(false)}></div>
           <div className="relative w-64 h-full p-4 bg-white">
            <button cl onClick={() => setIsFilterModalOpen(false)} className="absolute right-0 mb-4 mr-3"><IoMdClose size={30}/></button>
            <h2 className="text-xl font-bold mb-4 mt-8 text-[#67727D] tekoFont">Product Categories</h2>
            <ul>
              <li className={`cursor-pointer font-semibold ${selectedCategory==="All" ? "text-[#DE1144]" : "text-black"}`} onClick={() => handleCategoryChange('All')}>All</li>
              <li className={`cursor-pointer font-semibold ${selectedCategory==="Mugs" ? "text-[#DE1144]" : "text-black"}`} onClick={() => handleCategoryChange('Mugs')}>Mugs</li>
              <li className={`cursor-pointer font-semibold ${selectedCategory==="Tshirts" ? "text-[#DE1144]" : "text-black"}`} onClick={() => handleCategoryChange('Tshirts')}>Tshirts</li>
              {/* Add more categories here */}
            </ul>
          </div>
        </div>
      )}

      {/* Header and Filter Button */}
      <div className="container text-[#5c636b] flex justify-between items-center py-14 px-8 lg:px-0">
        <div className='flex items-center gap-x-5'>
        <Button onClick={() => setIsFilterModalOpen(true)} className="font-bold lg:text-xl">FILTER</Button>
        <p className='lg:text-xl'>Showing all {sortedProducts.length} results</p>
        </div>
        <select value={sortOption} onChange={(e) => handleSortChange(e.target.value)} className="text-black lg:text-xl">
          <option value="default">Default sorting</option>
          <option value="popularity">Sort by popularity</option>
          <option value="rating">Sort by average rating</option>
          <option value="latest">Sort by latest</option>
          <option value="price-asc">Sort by price: low to high</option>
          <option value="price-desc">Sort by price: high to low</option>
        </select>
      </div>

      {/* Products Display */}
      <div className="container flex flex-wrap items-center justify-center px-2 py-5 lg:justify-normal gap-x-6 gap-y-10 lg:px-0">
        {sortedProducts.slice(0, currentIndex + productsPerPage).map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            category={product.category}
            name={product.name}
            image={product.image}
            price={product.price}
            originalPrice={product.originalPrice}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            currentModalId={currentModalId}
            setCurrentModalId={setCurrentModalId}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className='flex items-center justify-center py-6'>
        {currentIndex + productsPerPage < sortedProducts.length ? (
          <button className='border-black px-4 py-2 hover:bg-[#F2295B] text-xl font-semibold hover:text-white duration-300 border' onClick={loadMoreProducts}>
            {loading ? (
              <ThreeDots
                visible={true}
                height="30"
                width="80"
                color="#418EEA"
                ariaLabel="progress-bar-loading"
              />
            ) : (
              'Load More'
            )}
          </button>
        ) : (
          <p className='px-4 py-2 text-xl font-semibold border border-black'>No more products to show.</p>
        )}
      </div>
    </main>
  );
};

export default Mugs;
