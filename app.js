// run in console npm start


let filesystem = require("fs");
// reading file flowers
 filesystem.readFile('./flower.txt',(error,file) =>{
    if(!error){
        //
        var flowerString = file.toString();
        var flowers = flowerString.split('\n');
        rowNumber = flowers.length;
        // start with S
        startWithSflowers = flowers.filter(function(flower){
            return flower[0] =='S'
             
        })
        countStartWithS = startWithSflowers.length;



        // dosen't start with S
        otherFlowers = flowers.filter(function(flower){
            return flower[0] !=='S'
        })
        countotherFlowers = otherFlowers.length;


        // start with the first letter of my name "M"
        startWithMflowers = flowers.filter(function(flower){
            return flower[0] =='M'
             
        })
        countMFlowers =  startWithMflowers.length;

        // name length = 5
        flowerNameLength = flowers.filter(function(flower){
            return flower.length == 5
             
        })
        countflowerNameLength =  flowerNameLength.length;


        let result = [
            {'ROW count' : rowNumber},
            {'Names start with letter S count': countStartWithS},
            {'Names not start with letter S count': countotherFlowers},
            {'Names start with letter S ': startWithSflowers.join("||")},
            {'Names start with letter M count ': countMFlowers},
            {'Names start with letter M ': startWithMflowers.join("||")},
            {'flower Name Length = 5 count ': countflowerNameLength},
            {'flower Name Length = 5 ': flowerNameLength.join("||")},
        ]
        console.log(result)
    }
})

