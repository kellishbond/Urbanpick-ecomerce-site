import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const relatedProducts = products
        .filter((item) => item.category === category && item.subCategory === subCategory)
        .slice(0, 5); // Limit to 5 products
      setRelated(relatedProducts);
    }
  }, [products, category, subCategory]);

  // Function to scroll to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="my-24">
      {/* Title Section */}
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      {/* Related Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => (
          <div key={item._id} onClick={handleScrollToTop} className="cursor-pointer">
            <ProductItem
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;



// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/Shopcontext';

// const RelatedProducts = ({ category, subCategory }) => { // Destructure props correctly
//   const { products } = useContext(ShopContext);
//   const [related, setRelated] = useState([]);

//   useEffect(() => {
//     if (products.length > 0) {
//       let productCopy = products.slice();
//       productCopy = productCopy.filter(
//         (item) => item.category === category && item.subCategory === subCategory
//       );
//       setRelated(productCopy.slice(0, 5)); // Store filtered products
//     }
//   }, [products, category, subCategory]); // Add necessary dependencies

//   return (
//     <div>
//       <h3>Related Products</h3>
//       <ul>
//         {related.map((product, index) => (
//           <li key={index}>{product.name}</li> // Assuming products have a "name" field
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RelatedProducts;
