import {createSlice} from '@reduxjs/toolkit';
const cartSlice =createSlice({
    name: 'cartSlice',
    initialState:{
        cart: []
    },
    reducers:{
        addToCart: (state , action) =>{
            //curItem ko nikalo
            // jo product in productdetails - , + call in dispatch 
            // jb product mil jayega then action.payload hoga aur us product ka item in curItem me daal dega
            const product =action.payload.attributes;
            const curItem = product ?
              {
                    title : product.title,
                    key : product.key,
                    price: product.price,
                    image :product.image.data.attributes.url
                }: action.payload;
               
           
            // then curItem item cart me chala gya ki ni
            const index = state.cart.findIndex(item => item.key === curItem.key);
            // if curItem is not in cart the push in cart
            if(index === -1){
                state.cart.push({...curItem ,quantity: 1})
            }
            // Another wise increase the count of 1
            else{
                state.cart[index].quantity +=1;
            }
        },
        removeFromCart: (state, action) => {
            const curkey = action.payload?.attributes?.key || action.payload.key;
            const index = state.cart.findIndex(item => item.key === curkey);
            
           
            if(index === -1) return;
            // if cart having one item then remove the cart from the cart list
            if (state.cart[index].quantity === 1) {
                state.cart = state.cart.filter(
                    (item) => item.key !== curkey
                );
            //if cart having multiple item in one card then delete one one item from cart
            } else {
                state.cart[index].quantity -= 1;
            }
        },
        resetCart: (state, action) => {
            state.cart = []
        }
        }
})

export default cartSlice.reducer;
export const {addToCart ,removeFromCart ,resetCart} =cartSlice.actions;