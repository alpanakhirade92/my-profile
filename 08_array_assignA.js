console.log(`ArrayAssignment..."\n`);

const arraySeasonFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`First elementof array ${arraySeasonFruits} :`, arraySeasonFruits[0]);
console.log(`Last elementof array ${arraySeasonFruits} :`, arraySeasonFruits[4]);

console.log(`-----------------------------------------------------------------------`);

arraySeasonFruits.unshift("Papaya");
console.log(`After adding papaya before banana:`,arraySeasonFruits);

console.log(`-----------------------------------------------------------------------`);
var arraySplice = arraySeasonFruits.splice(4,1);
console.log(`Removing "Mango":`,arraySplice);
console.log(`After removing"Mango" : ${arraySeasonFruits}`);

console.log(`-----------------------------------------------------------------------`);

arraySeasonFruits.push("Pinapple");
console.log(`Inserting "Pinapple"  at last positiion :${arraySeasonFruits}`);

console.log(`-----------------------------------------------------------------------`);
var splicArray2 = arraySeasonFruits.splice(4,0,"Dragon Fruit")
console.log(`Adding "Dragon Fruit" before "Water Melon" : ${arraySeasonFruits}`);


console.log(`-----------------------------------------------------------------------`);
var replece = arraySeasonFruits.splice(2,1,"Kiwi");
console.log(arraySeasonFruits);


console.log(`-----------------------------------------------------------------------`);
var index = arraySeasonFruits.splice(0,4);
console.log(`Elements from index 1 to 4 : ${index}`);


console.log(`-----------------------------------------------------------------------`);
console.log(`Last 3 elements of array is :`,arraySeasonFruits.splice(arraySeasonFruits.length-3,3));

