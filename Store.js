var products = [
 
 {id:1, name:"laptop", price:170000},
 {id:1, name:"car", price:160000},
 {id:1, name:"orange", price:180000},
 {id:1, name:"computer", price:290000}, 
 {id:1, name:"ball", price:140000},
 ]

var userProducts = [
 
 {name:"laptop", price:"170000",},
 {name:"car", price:"160000",},
 {name:"orange", price:"180000",},
 {name:"", price:"",},
 
 ]
 
 
 var user = prompt("please enter a product name")
 
 var newProduct; 
 

var userLog = products.some(function(users){
    
    if(users.name==user){
        
        newProduct=users
        return true
    }
    
    
})


if(userLog==true) {
    
    var userBasket = {
        
        name:newProduct.name,
        price:newProduct.price,
        
        
    }
    
    userProducts.push(userBasket)
    
    var sum = 0
    
    userProducts.forEach(function(pro){
        
        sum = sum+pro.price
        
        
    })
    
    console.log(userProducts)
    alert("total price : " + sum)
    
}else{
    
    
    alert("not avaliable")
    
}
