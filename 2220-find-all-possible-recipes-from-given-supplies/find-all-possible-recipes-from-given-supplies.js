/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const n = recipes.length
    const res = []
    const set = new Set(supplies)
    let preLength = 0

    while(true){
        for(let i = 0; i < n; i++){
            if(!set.has(recipes[i]) && canBeDone(ingredients[i], set)){
                set.add(recipes[i])
                res.push(recipes[i])
            }
        }
 
        if(preLength === res.length) return res

        preLength = res.length
    }


    return res
};

function canBeDone(ingredients, supplies){
    return ingredients.every((i)=>supplies.has(i))
}
