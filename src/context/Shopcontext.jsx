import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props)=> {
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL 
    const [search, setSearch] = useState('');
    const [showSearch, SetShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] =useState([])
    const [token, setToken]= useState('');
    const navigate = useNavigate()
    

    // const addToCart = async (itemId, size) =>{

    //     if (!size) {
    //         toast.error('Please Select a Size ');
    //         return
            
    //     }

    //     let cartData = structuredClone(cartItems)

    //     if (cartData[itemId]){
    //         if (cartData [itemId][size]) {
    //             cartData[itemId][size] += 1;
    //         }
    //         else{
    //             cartData[itemId][size] = 1;
    //         }

    //     }
    //     else{
    //         cartData[itemId] = {};
    //         cartData[itemId][size] = 1;
    //     }
    //     setCartItems(cartData);

    //     if (token) {
    //         try {
    //             await axios.post(backendUrl + '/api/cart/add', {itemId, size}, {headers:{token}})
    //             toast.success('item added')
                
    //         } catch (error) {
    //             console.log(error);
    //             toast.error(error.message)
                 
    //         }
            
    //     }


    // }
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Please Select a Size');
            return;
        }
    
        // Use structuredClone for deep cloning
        let cartData = structuredClone(cartItems);
    
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    
        if (token) {
            try {
                const response = await axios.post(
                    backendUrl + '/api/cart/add', 
                    { itemId, size }, 
                    { headers: { token } }
                );
    
                if (!response.data.success) {
                    // Revert cart changes if backend add fails
                    setCartItems(cartItems);
                    toast.error(response.data.message || 'Failed to add item to cart');
                }
            } catch (error) {
                // Revert cart changes on network error
                setCartItems(cartItems);
                toast.error(error.response?.data?.message || 'Network error. Please try again.');
            }
        }
    }
      
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.error("Error in getCartCount:", error);
                }
            }
        }
        return totalCount;
    };

//    update quantity t o the data base

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        
        const previousQuantity = cartData[itemId][size] || 0;
        cartData[itemId][size] = quantity; 
        setCartItems(cartData);
    
        if (token) {
            try {
                const response = await axios.post(
                    backendUrl + '/api/cart/update', 
                    { itemId, size, quantity }, 
                    { headers: { token } }
                );
    
                if (!response.data.success) {
                    // Revert cart changes if backend update fails
                    cartData[itemId][size] = previousQuantity;
                    setCartItems(cartData);
                    toast.error(response.data.message || 'Failed to update cart');
                }
            } catch (error) {
                // Revert cart changes on network error
                cartData[itemId][size] = previousQuantity;
                setCartItems(cartData);
                toast.error(error.response?.data?.message || 'Network error. Please try again.');
            }
        }
    }
    
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.error("Error in getCartAmount:", error);
                }
            }
        }
        return totalAmount; // Ensure return is outside the loop
    };


    const getProductsData = async()=>{
        try {
           const response = await axios.get(backendUrl + '/api/product/list')
          if(response.data.success){
            setProducts(response.data.products)
          }else{
            toast.error(response.data.message)
          }
        
        
            
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
            
        }
    }


    const getUserCart = async(token)=>{
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers:{token}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
                
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
            
        }
    }
useEffect(()=>{
    getProductsData()


},[])

useEffect(()=>{
    if (!token && localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
        getUserCart(localStorage.getItem('token'))
    }

},[])

useEffect(() => {
    if (!token && localStorage.getItem('token')) {
        const storedToken = localStorage.getItem('token');
        console.log('Stored Token:', storedToken);
        setToken(storedToken);
        getUserCart(storedToken);
    }
}, []);

        const value = {
            products , currency, delivery_fee,
            search, setSearch,showSearch, SetShowSearch,
            cartItems, addToCart, setCartItems,
            getCartCount,
            updateQuantity,
            getCartAmount,
            navigate,
            backendUrl,
            setToken,token

        } 
         return (
            <ShopContext.Provider value={value}>
                {props.children}
            </ShopContext.Provider>
        )
}

export default ShopContextProvider;