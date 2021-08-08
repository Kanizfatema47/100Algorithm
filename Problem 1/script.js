//------------------Question------------------//

// for inputArray [3 2 3], elementToReplace = 3, SubtractionElement= 7;
//the output should be arrayReplace (inputArray, elementToReplace, SubtractionElement) = [7,2,7];


function arrayReplace(inputArray, elementToReplace, subtractionElement){
    
    inputArray.forEach((element, index) => {                  //foreach ekti method jeti index theke ekta ekta single element dei
        
        if(element === elementToReplace){                     //element er shathe jodi elementTpReplace match hoi
            
            inputArray[index] = subtractionElement;           //inputArray er index theke oi position take subtractionElement diye replace kore dibo
        
        }
    
    });

    console.log(inputArray);
}
arrayReplace([3,2,3],3,7);