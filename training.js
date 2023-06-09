
//1

const firstArray = [
    2,
    5,
];

const secondArray = [
    3,
    7,
];

const mergeArrays = (firstArray, secondArray) => [...firstArray, ...secondArray];

mergeArrays(firstArray, secondArray);

//2

const exceptFirst = (_, ...otherParameters) => otherParameters;

const array2 = [2, "delfin", null];

//3

const argsArray = [1, 3, undefined, true];

const last2Parameters = (...argsArray) => argsArray.slice(-2);

//4

const indexArray = ["rum", "kawa", "sangria"];

const indexOf = (element, indexArray) => indexArray.indexOf(element);

indexOf("kawa", indexArray);

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

//5

const tasks = [
    { content: "" },
    { content: "kupic balony", }
];

const findNonEmptyTask = (tasks) => tasks.find(task => task !== "");

//6

const numbers = [2, 4, 7, 8];

const oddIndex = numbers => numbers.findIndex(number => number % 2 !== 0);

//7

const fruits = ["banan", "marakuja"];

const hasStrawberry = (fruits) => fruits.includes("strawberry");

//8

const people = [
    { name: "Melodia", age: 15 },
    { name: "Kosmo", age: 19 },
];

const someAdult = people => people.some(({ age }) => age >= 18);

//9

const strings = [
    "",
    "zelazko",
];

const onlyString = (...strings) => strings.every(string => typeof (string) === 'string');

//10

const carBrands = [
    "Peugeot",
    "BMW",
    "Audi",
];

const premiumBrands = [
    "BMW",
    "Audi",
    "Mercedes",
];

const includesPremium = (carBrand) => premiumBrands.includes(carBrand);

const filterPremium = (carBrands) => carBrands.filter(includesPremium);

//11

const cars = [
    { car: "BMW X5", color: "black" },
    { car: "Peugeot 3008", color: "white" },
];

const getColors = cars => cars.map(car => car.color);

//12 ?

const persons = [
    { name: "Krzychu", age: 30 },
    { name: "Zdzichu", age: 20 },
];

const sortPeople = (persons) => persons.sort((a, b) => a.age - b.age);
sortPeople(persons);