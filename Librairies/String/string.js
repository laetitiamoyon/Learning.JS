//renvoie une nouvelle string avec le texte répété "repeatCount" fois
const repeat = (text,repeatCount) =>
{
    let result = ""
	
    for (let i = 0; i < repeatCount; i++)
        result += text
    
    return result
}

//renvoie une nouvelle chaîne contenant le caractère
const charAt = (text, index) =>
{
    for(let i = 0; i < text.length; i++) // je parcours le tableau
  	    if (i === index) // si l'index est === au caractère (item)
  		    return text[index] // retourne le caractère correspondant à l'index demandé
  
    return "" // sinon renvoie une chaîne de caractère vide
}

//représente la longueur d'une chaîne de caractère
const length = (text) => 
{
	let size = 0
  
    for (let item of text)
  	    size = size + 1
  
    return size
}

//Renvoie une nouvelle chaîne de caractère avec la combinaison de plusieurs chaînes. 
const concat = (text1, text2) => text1 + text2

//Vérifie si la chaîne de caractère contient une chaîne de caractère passée en paramètre
const startsWith = (text, startWithText) =>
{
	for (let i = 0; i < text.length; i++)
    {
        var character = text[i]

        for (let i2 = 0; i2 < startWithText.length; i2++)
        {
            var startWithCharacter = startWithText[i]
        
            if (character !== startWithCharacter)
                break
            else if (i2 === startWithText.length - 1)
                return true
        }
 	}
      
  return false
}

const lastIndexOf = (text, value) =>
{
	for (let i = text.length - 1; i >= 0; i--)
    {
    	if (text[i] === value)
        	return i
    }
    
    return -1  
}

const indexOf = (text, value) =>
{
	for (let i = 0; i < text.length; i++)
    {
    	if (text[i] === value)
        	return i
    }
    
    return -1

}

const slice = (text, start, end) =>
{
	let result = []
    
    for (let i = start; i <= end; i++)
    	result.push(text[i])
        
    return result.join("")
         	
}

const includes = (text, word) =>
{
   
    for (let i = 0; i< text.length; i++)
    {
        if (text[i] == word[0])
        {
            for (let i2 = i; i2 <= word.length; i2++)
            {
  				if (text[i2] == word[i2 - i])
                {
                    return true
                }
            }
            return false
        }
    }
}

module.exports = {
	length, startsWith, concat, repeat, charAt, lastIndexOf, indexOf, slice, includes
}

// Permet de remplacer un mot par un autre au niveau de la 1ère occurrance
const replace = (text, wordToReplace, newWord) =>
{
	const newText = []
    
    for (let i = 0; i < text.length; i++)
    {
    	wordToReplace = text[i]
    }
        
    for (let i2 = 0; i2 < wordToReplace; i2++)
    {
      newText.push(text[i2])
    }

    for (let i3 = newWord; i3 <= text.length-1; i3++)
    {
      newText.push(text[i3])
      	return newText.join("")
    }
   
}
