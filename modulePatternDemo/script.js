
const products = [
    {name : 'sevval',surname : 'bugdayci'},
    {name : 'basak',surname : 'bulak'},
    {name : 'merve',surname : 'cengiz'}
]


var productController = (function (data) {
  var collections = data || [];
  const addProduct = function(product) {
     collections.push(push);
   }

   const removeProduct = function() {
    var index = collections.indexOf(product);
    if(index >= 0) {
        collections.splice(index,1);
    }
   }
    
   const getProducts = function() {
    return collections;
   }

   return {
    addProduct,
    removeProduct,
    getProducts
   }


})(products);


productController.addProduct(products[0]);
productController.addProduct(products[1]);
productController.removeProduct(products[2]);
productController.addProduct(products[2]);


var extended = (function(m) {
   m.sayHello = function() {
    console.log("hello from extended module");
   }
   
   return m;

})(productController || {});

extended.sayHello();


console.log(extended.getProducts());