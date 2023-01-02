// var singleton = (function() {
//     var instance;


//     const createInstance = function() {
//         return {
//             randomNumber : Math.random()
//         }
//     }

//     return {
//         getInstance : function() {
//             if(!instance) {
//                 instance = new createInstance();
//             }
//             return instance;
//         }
//     }


// })();


// const instance1 = singleton.getInstance();
// const instance2 = singleton.getInstance();



var singleton = (function() {
    var instance;

    function ProductController () {



        const products = [
            {name : 'sevval'},
            {name : 'sevval1'},
            {name:'sevval2'}

        ];

        const add = function(product) {
            products.push(product)
        }

        const get = function() {
            return products;
        }

        return {
            add,
            get
        }
    }

    return {
        getInstance : function() {
            if(!instance) {
                instance = new ProductController();
            }
            return instance;
        }
    }


})();


const productController1 = singleton.getInstance();
const productController2 = singleton.getInstance();


productController1.add({name:'sevval3'});
console.log(productController2.get());



