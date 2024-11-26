import React, { useContext, useEffect, useState } from 'react'; // Added useState import
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]); // Ensure useState is imported

  useEffect(() => {
    if (products.length > 0) {
      // Filter related products by category and subCategory
      const relatedProducts = products
        .filter((item) => item.category === category && item.subCategory === subCategory)
        .slice(0, 5); // Limit to 5 products
      setRelated(relatedProducts); // Update related state
    }
  }, [products, category, subCategory]); // Correct dependency array

  return (
    <div className="my-24">
      {/* Title Section */}
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      {/* Related Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => (
          <ProductItem
            key={item._id} // Use unique key for each item
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
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
