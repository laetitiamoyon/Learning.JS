// Renvoyer le nombre d'élément d'un tableau 
const length = (array) =>
{
	let size = 0
  
  	for (let item of array)
  		++size
    
	  return size

}


// Elle détermine si un élément est présent dans le tableau
const includes = (array, value) =>
{
	for (let item of array)
  		if (item === value)
    		return true

	return false
}


// Renvoit un nouveau tableau dont l'ordre des éléments est inversé
const reverse = (array) =>
{
	let newArray = []
  
 	for (let i = array.length - 1; i >= 0; i--)
  		newArray.push(array[i])
  
  	return newArray
}

// Supprime le dernier élément d'un tableau
const pop = (array) =>
{
	let newArray = []
  
  	for (let i = 0; i < array.length - 1; i++)
  		newArray.push(array[i])
  	
  	return newArray
}

// Supprime le premier élément d'un tableau
const shift = (array) =>
{
	let newArray = []
  
  	for (let i = 1; i < array.length; i++)
  		newArray.push(array[i])
  	
  	return newArray
}

// Ajoute un élément au début d'un tableau
const unshift = (array, newItem) => [newItem, ...array]


// Renvoie le premier élément d'un tableau qui respecte la condition envoyé en paramètre
const find = (array, predicate) =>
{
	for (let item of array)
  		if (predicate(item))
    		return item
}

// Renvoie true si un élément du tableau respecte la condition envoyé en paramètre
const some = (array, predicate) =>
{
	for (let item of array)
		if (predicate(item))
    		return true
  
  	return false
}

const concat = (array1, array2) => [...array1, ...array2]

const join = (array, separator) =>
{
    let result = ''

    for (let i = 0; i < array.length; i++)
        result += array[i] +
				  i === array.length - 2 ? '' : separator

	return result
}

const entries = (array) =>
{
	let index = 0
	const iterator =
	{
		next: function()
		{
			let resultat;
		
			if (index < array.length)
			{
				resultat = { value: [array[index]], done: false };
				++index
		
				return resultat;
			}
		
			return { value: [], done: true }
		}
	}
  
  	return iterator
}

// Vérifie si tous les éléments d'un tableau vérifie une condition
const every = (array, predicate) =>
{
	for (let item of array)
  		if (!predicate(item))
    		return false
      
  	return true
}

// Critères d'acceptances :
// //console.log(every([12, 5, 8, 130, 44], elem => elem >= 10)) // false
// //console.log(every([12, 54, 18, 130, 44], elem => elem >= 10)) // true
// //console.log(every([{a:1, b:2}, {a:1, b:3}], elem => elem.a === 1)) // true
// //console.log(every([{a:2, b:2}, {a:1, b:3}], elem => elem.a === 1)) // false

// La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
const reduce = (array, reducer) =>
{
	let accumulator = 0
    
    for (let item of array)
    	accumulator = reducer(accumulator, item)
        
    return accumulator
}

// Critères d'acceptances :
//console.log(reduce([0, 1, 2, 3], (accumulator, currentValue) => accumulator + currentValue)) // 6


// La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la droite vers la gauche) afin de la réduire à une seule valeur.
const reduceRight = (array, reducer) =>
{
	let accumulator = []
    
    for (let i = array.length - 1; i >= 0; i--)
    	accumulator = reducer(accumulator, array[i])
        
    return accumulator
}

// Critères d'acceptances :
//console.log(reduceRight([[0, 1], [2, 3], [4, 5]], (accumulator, currentValue) => accumulator.concat(currentValue))) // [4, 5, 2, 3, 0, 1]

// Remplit un tableau avec la valeur définit
const fill = (array, value) =>
{
	let newArray = []
    
    for (let item of array)
    	newArray.push(value)
        
    return newArray
}

//console.log(fill([1,2,3,4], 6)) // [6, 6, 6, 6]


// Récupère le dernier index sinon renvoie -1
const lastIndexOf = (array, value) =>
{
	for (let i = array.length - 1; i >= 0; i--)
    {
    	if (array[i] === value)
        	return i
    }
    
    return -1  
}

//console.log(lastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'], 'Dodo')) // 0
//console.log(lastIndexOf(['Dodo', 'Tiger', 'Penguin'], 'Tiger')) // 1
//console.log(lastIndexOf(['Dodo', 'Tiger', 'Penguin'], 'Penguin')) // 2
//console.log(lastIndexOf(['Dodo', 'Tiger', 'Penguin'], 'coco')) // -1


//renvoie l'indice du premier élément du tableau qui satisfait une condition donnée par une fonction. Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1.
const findIndex = (array, predicate) => 
{
	for (let i = 0; i < array.length; i++)
    	if (predicate(array[i]))
        	return i
    
    return -1

}

//console.log(findIndex([5, 12, 8, 130, 44], (element) => element > 13)) // 3
//console.log(findIndex([1, 12, 8, 130, 44], (element) => element > 10)) // 1

// La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
const filter = (array, callback) => 
{
	let newArray = []
	
    for (let item of array)
    	if (callback(item))
        	newArray.push(item)
	
    return newArray
}

// Critères d'acceptance :
//console.log(filter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],word => word.length > 6)) // ["exuberant", "destruction", "present"]

// La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
const forEach = (array, callback) => 
{
    for (let item of array)
   		callback(item)
}

// Critères d'acceptance :
//console.log(forEach(['a', 'b', 'c'], element => //console.log(element))) // 




// La méthode flat() permet de créer un nouveau tableau contenant les éléments des sous-tableaux du tableau passé en argument, qui sont concaténés récursivement pour atteindre une profondeur donnée.

const singleFlat = (array) =>
{
    if (!Array.isArray(array))
    	return array

	let newArray = []
    
    for (let item of array)
    {
    	if (Array.isArray(item))
            for (let subItem of item)
		  		newArray.push(subItem)            
        else
            newArray.push(item)
    }

	return newArray
}

const containsArray = (array) =>
{
    for (let item of array)
    	if (Array.isArray(item))
			return true
            
    return false
}

const flat = (array) =>
{
	let newArray = []
	
    for (let item of array)
   	{
    	if (Array.isArray(item))
        {
            let subItems = item

            while (containsArray(subItems))
                subItems = singleFlat(subItems)

            for (let subItem of subItems)
                newArray.push(subItem)
   		}
        else
        	newArray.push(item)
    }
    
    return newArray
}


// Critères d'acceptance :
//console.log(flat([1, 2, [3, 4]])) // [1, 2, 3, 4]
//console.log(flat([1, 2, [3, 4, [[[5, 6]]]]])) // [1, 2, 3, 4, 5, 6]



// flatMap() permet d'appliquer une fonction à chaque élément du tableau puis d'aplatir le résultat en un tableau. 
const flatMap = (array, callback) =>
{
	let newArray = []
    
    for (let item of array)
    {
    	item = callback(item)
    
    	if (Array.isArray(item))
        	for (let subItem of item)
            	newArray.push(subItem)
        else
            newArray.push(item)
        
    }
        
   	return newArray
}

// Critères d'acceptances :
//console.log(flatMap([1, 2, 3, 4], element => [[element * 2]]))
// [2, 4, 6, 8]


module.exports = {
	length, includes, reverse, pop, shift, unshift, concat, fill, 
	lastIndexOf, containsArray, findIndex, filter, forEach, some,
	join, every, reduce, entries, reduceRight, singleFlat, flat, flatMap
}