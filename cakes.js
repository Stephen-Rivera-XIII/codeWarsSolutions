// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.


function cakes (recipe, available){
    let newObj = Object.keys(recipe).reduce((a, k) => {
       a[k] = available[k]/recipe[k];
       return a; 
    }, {});
    
    let answer =  parseInt((Math.min(... Object.values(newObj)))) ;
    console.log(answer);
    // closer = parseInt(Math.min(...nearlyThere));
    // console.log(nearlyThere);
    // console.log(closer);
    // console.log(newObj);
    // // if (nearlyThere.includes(2.4)) {
    // //     console.log('✅ String is contained in Array');
    // //   } else {
    // //     console.log('⛔️ String is NOT contained in Array');
    //   }
    }
    let recipe = {flour: 500, sugar: 200, eggs: 1};
    let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}; 
    cakes (recipe,available);