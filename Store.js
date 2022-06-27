const allProducts = [
 
 {id:1, name:"laptop", price:170000},
 {id:1, name:"car", price:160000},
 {id:1, name:"orange", price:180000},
 {id:1, name:"computer", price:290000}, 
 {id:1, name:"ball", price:140000},
 
 ]

 
 const userBasket = [
 
 
 
 ]
 
const userProduct = prompt("enter the name")

const requestProduct;


const isInShop = allProducts.some(function(product){
    
    if(product.name==userProduct){
        
        requestProduct=product
        return true
        
    }
    
    
})

if(isInShop==true){
    
    const newProduct = {
        
        id:3,
        name:requestProduct.name,
        price:requestProduct.price,
        
        
    }
    
    userBasket.push(newProduct)
    
    const sum = 0
    
    userBasket.forEach(function(product){
        
        
        sum = sum + product.price
        
    })
    
    
    
    console.log(userBasket)
    
   alert("your price: " + sum)
    
    
}else{
    
    
    alert("no available")
    
    
}
