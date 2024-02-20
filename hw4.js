//1. What is javascript? How does an interpreted programming language differ from a compiled language?
//Javascript is a programming language used by web developers to add dynamic interactions to their projects. It is interpreted through script which is different from a complied language since they do not.
//2. What is the difference between var, let, and const when declaring variables?
//var is a container for storing data but only if using an old browser
//let is used as a keyword when the value could be changed at a later time since it is not a const
//const is used as a keyword when the value stored will not be changed
//3. What are anonymous functions? Higher order functions?
//Anonynmous functions occur when an event happens to a certain element and a function is triggered. Higher order functions take in functions as parameters or returns a function
//4. Define objects in JavaScript and how they are different from objects in more traditional OOP languages.
//objects are each individual things that have their own properties, events,and methods. All of these attributes work together to create a working model of the object. These objects are different than in other OOP programming lanuages because objects inherit objects rather than classes inheriting classes.
const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];

function getCats(catsList)
{
    return catsList.filter(cats=>cats.adoptionStatus==='available').map(cats=>cats.name); //retrieve only the cats that are available
}
function makeSentence(availableCats)
{
    return `Congrats on adopting ${availableCats.join(', ')}!`; //list off cat names
}

const availableCats = getCats(cats); //lets you only get available cats
const newSentence = makeSentence(availableCats);
console.log(newSentence); //print