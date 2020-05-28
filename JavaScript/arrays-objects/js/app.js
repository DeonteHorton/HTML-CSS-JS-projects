/*
    Arrays amd Objects

*/

var arr0 = new Array('Hello ', 'World'); //array constructor
var arr1 = ['Hello,', 'World' ,'!']; // array literal

// console.log(arr2[1][0], arr2[1][1]);

var data = [
"Lorem",
"ipsum ",
"dolor ",
"sit ",
"amet ",
"consectetur ",
"adipisicing",
" elit. ",
"Suscipit?",
]

//manipulating the for loop
// for (let i = 0; i < arr1.length; i++) {// based on a condition, can make it end early
//     const element = data[i];
//     console.log(element);

//     if (element == "elit") {
//         i = data.length

//     }

// };




// data.forEach(function (element) {// A for each loop will not let you break out of it
//     console.log(element);

//     if (element == "dolor") {
//         console.log(true);

//         return;
//     }
    
// });

//Math.floor(Math.random() * Math.floor(data.length))
//NOT DYNAMIC
// console.log(data[Math.floor(Math.random() * Math.floor(data.length))
// ]);

// console.log(arr2[Math.floor(Math.random() * Math.floor(arr2.length))
// ]);





// randomly choose a child array
// randomly choose an index from a child array to display word


//DYNAMIC
// var arr2 = [
//     ['hello', 'world',22,33,44, 'haha'],
//     ['hola', 'mundo'],
//     ['holla', 'welt', 5, 9, 100, 'yep']
// ];

// // var child = arr2[Math.floor(Math.random() * Math.floor(arr2.length))];
// // var word = child[Math.floor(Math.random() * Math.floor(child.length))];
// // console.log(word);

//Yo Mama Joke Generator!
// do not do arrays inside array
// var yoMama = [ 
    
//     ['skinny,','fat,','short,','ugly,','stupid,'],
//     ['Thanos had to snap twice to make her disappear','she scared freddy kurger','she couldn\'t climb on a kids bike','she thought she was listening to 50 cents when she put two quarters in her ear', 'she could fly when the wind blow']

// ]


// var child = yoMama[Math.floor(Math.random() * Math.floor(yoMama.length))];
// var child2 = yoMama[Math.floor(Math.random() * Math.floor(yoMama.length))];

// var word = child[Math.floor(Math.random() * Math.floor(child.length-1))];
// var word2 = child2[Math.floor(Math.random() * Math.floor(child2.length-1))];


// document.write("Yo Mama so ",child2);



// //Adding to an existing array!!
// var arr5 = ['string', 1, [1,2,3], 'string3']
// console.log('first',arr5);

// // if adding to an exisiting array, use length to always add it toward the end of the array
// //.pop takes the last item from an array and returns that element
// // .push adds an item to the end of an arrays
// arr5[arr5.length] = 'string2';
// arr5[2][arr5[2].length] = 'string4;'
// console.log('second', arr5);

//random hero generator
var hero =['Flash ','Hulk ','Superman ']
var adjectives = ['Amazing ','Awesome ','Speedy ']
var verbs = ['has super speed',' has super strength', 'can fly']

var child = hero[Math.floor(Math.random() * Math.floor(hero.length))];
var child2 = hero[Math.floor(Math.random() * Math.floor(hero.length))];
var child3 = hero[Math.floor(Math.random() * Math.floor(hero.length))];

var word = child[Math.floor(Math.random() * Math.floor(child.length))];
var word2 = child2[Math.floor(Math.random() * Math.floor(child2.length))];
var word3 = child3[Math.floor(Math.random() * Math.floor(child3.length))];


var id = [Math.floor(Math.random() * Math.floor(hero.length))];
var idx = [Math.floor(Math.random() * Math.floor(adjectives.length))];
var idxn = [Math.floor(Math.random() * Math.floor(verbs.length))];

console.log("The "+hero[id]+adjectives[idx]+verbs[idxn]);
document.write("The "+hero[id]+adjectives[idx]+verbs[idxn]);

//Objects
var obj = new Object();
var obj1 = {}

var obj2 = {
    fname: 'Deonte',
    lname: 'Horton'

}
console.log(obj2.fname);
console.log(obj2['fname']);

//if creating a var and trying to to log from an obj, it won't work
//Ex console.log('result'obj.fname)
//Results.  result undefined
// Remember the exclamation means not. EX: !true means not true

var obj3 = {
    arr: [1,2,3],
    name:'Deonte',
    sum:function (num1,num2) {
        return num1 + num2
    },
    bool: true,
    num: 42
}
obj3.name = 'De'
console.log(obj3.name);


if (obj3.bool) {
    console.log('Yo');
    
}

// var sum = obj3.sum;
// var total = sum(obj3.obj['num1'])
// console.log(total);

var enemies = {
    enemy1: 'Boss',
    enemy2: 'Minion',
}

var team = [
     {
        player1:'A' ,
        player2:'B'
    },

    {
        player3: 'C',
        player4: 'D'
    }
];
// enemies.forEach(function(enemy) {
//     console.log(enemy.enemy1);
    
// });
//parasing data
var data = [
'Sianna','Fantini','sfantini0@jalbum.net','Female','17.187.75.7',
'Ami','Siggin','asiggin1@auda.org.au','Female','92.136.232.25',
'Kandy','Bernardoni','kbernardoni2@infoseek.co.jp','Female','108.122.66.8',
'Gus','Oswal','goswal3@ucoz.ru','Female','101.216.78.8',
'Laurie','Upward','lupward4@issuu.com','Male','92.123.107.',
'Melitta','Vallery','mvallery5@nydailynews.com','Female','255.228.200.8',
'Francesco','Danielczyk','fdanielczyk6@yelp.com','Male','253.12.207.4',
'Tedmund','Misken','tmisken7@imgur.com','Male','216.241.133.',
'Koralle','Griffithe','kgriffithe8@simplemachines.org','Female','108.21.21.11',
'Major','Yewman','myewman9@prnewswire.com','Male','142.167.101.22',
'Dell','Hutcheon','dhutcheona@forbes.com','Male','97.208.109.17',
'Halley','Doward','hdowardb@redcross.org','Female','58.97.154.14',
'Kati','Yakushkev','kyakushkevc@washington.edu','Female','34.166.161.14',
'Sargent','Hulatt','shulattd@w3.org','Male','99.235.176.11',
'Aleta','Tenny','atennye@rediff.com','Female','224.48.225.77' 
];
var newData = [];


for (let i = 0; i < data.length; i++) {
    const element = data[i];
    newData.push({
        Firstsname:data[i],
    Lastname:data[i + 1],
        Email:data[i + 2],
        Sex:data[i + 3],
        IP:data[i + 4]
    })
    console.log(newData);
    i += 4;
}