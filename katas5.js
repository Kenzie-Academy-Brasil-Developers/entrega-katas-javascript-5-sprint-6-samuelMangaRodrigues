function reverseString(str){
    let array=[]
    let strP=str.split("")
    for(let i=strP.length-1;i>=0;i--){
    array.push(strP[i])
    }
    return array.join("")
}
//TESTE 1 
function testReverseString1(){
    let result=reverseString("Samuel Manga Rodrigues")
    console.assert(result==="seugirdoR agnaM leumaS",{
        "function": reverseString("Samuel Manga Rodrigues"),
        "expected":"seugirdoR agnaM leumaS",
        "result":result
    })

}
//TESTE 2
function testReverseString2(){
    let result=reverseString("Um texto é uma ocorrência linguística, escrita ou falada de qualquer extensão, dotada de unidade sociocomunicativa, semântica e formal. É uma unidade de linguagem em uso")
    console.assert(result==="osu me megaugnil ed edadinu amu É .lamrof e acitnâmes ,avitacinumocoicos edadinu ed adatod ,oãsnetxe reuqlauq ed adalaf uo atircse ,acitsíugnil aicnêrroco amu é otxet mU",{
        "function": reverseString("Um texto é uma ocorrência linguística, escrita ou falada de qualquer extensão, dotada de unidade sociocomunicativa, semântica e formal. É uma unidade de linguagem em uso"),
        "expected":"osu me megaugnil ed edadinu amu É .lamrof e acitnâmes ,avitacinumocoicos edadinu ed adatod ,oãsnetxe reuqlauq ed adalaf uo atircse ,acitsíugnil aicnêrroco amu é otxet mU",
        "result":result
    })
}

function reverseSentence(str1){
    let array=[]
    let strS=str1.split(" ")
    console.log(strS)

  for(let i=strS.length-1;i>=0;i--){
   array.push(strS[i])
}
return array.join(" ")
}
//TESTE 1   
function testReverseSentence1(){
    let result=reverseSentence("Samuel Manga Rodrigues")
    console.assert(result==="Rodrigues Manga Samuel",{
    "function":"reverseSentence",
    "expected":"Rodrigues Manga Samuel",
    "result":result
    })
}
//TESTE 2
function testReverseSentence2(){
    let result=reverseSentence("A gente vai dormir sem imaginar que, em uma fração de segundos, tudo pode mudar")
    console.assert(result==="mudar pode tudo segundos, de fração uma em que, imaginar sem dormir vai gente A",{
        "function": "reverseSentence",
        "expected":"mudar pode tudo segundos, de fração uma em que, imaginar sem dormir vai gente A",
        "result":result
    })
}
function minimunValue(arr){
let menor=1000000000
let array=[]                                                                                 
for(let i=0;i<arr.length;i++){
if(arr[i]<menor){
    menor=arr[i]
}

}
array.push(menor)
return array.join()

}
//TESTE 1
function testminimunValue1(){
    let result=minimunValue([1,2,3,4,678,-5,-8])
    console.assert(result==="-8",{
        "function": "minimunValue",
        "expected":"-8",
        "result":result
    })
}
//TESTE 2
function testminimunValue2(){
    let result=minimunValue([1,2,3,4,9,2,4])
    console.assert(result==="1",{
        "function": "minimunValue",
        "expected":"1",
        "result":result
    })
}


function maximumValue(arr){
let maior=0
let array=[]
for(let i=0;i<arr.length;i++){
if(arr[i]>maior){
    maior=arr[i]
}
}
array.push(maior)
return array.join()
}
//TESTE 1
function testmaximunValue1(){
    let result=maximumValue([1,2,3,4,678,29,10])
    console.assert(result==="678",{
        "function": "maximunValue",
        "expected":"678",
        "result":result
    })
}
//TESTE 2
function testmaximunValue2(){
    let result=maximumValue([1,2,3,4,333,1000000,20,12,3,12,12,34])
    console.assert(result==="1000000",{
        "function": "minimunValue",
        "expected":"1000000",
        "result":result
    })
}


function  calculateRemainder(dividendo,divisor){
    let resto=dividendo%divisor
    
    return resto
}
//TESTE 1
function testcalculateRemainder1(){
    let result=calculateRemainder(15,7)
    console.assert(result===1,{
        "function": "calculateRemainder",
        "expected":"1",
        "result":result
    })
}
//TESTE 2
function testcalculateRemainder2(){
    let result=calculateRemainder(20,3)
    console.assert(result===2,{
        "function": "calculateRemainder2",
        "expected":"2",
        "result":result
    })
}

function  distinctValues (arr){
let array=[]                                    
for(let i=0;i<arr.length;i++){                  
    let element=arr.indexOf(arr[i],i+1)
    if(element===-1){        
        array.push(arr[i])
    }
    }
    return array.join()
    
    

}
//TESTE 1 
function testeDisctinctValues1(){
    let result=distinctValues([1,2,3,1,2,1,4,5,6,7,10])
    console.assert(result==="3,2,1,4,5,6,7,10",{
        "function": "distinctValues",
        "expected":"3,2,1,4,5,6,7,10",
        "result":result
    })
}
//TESTE 2
function testeDisctinctValues2(){
    let result=distinctValues([1,3,4,3,4,5,9,0,0])
    console.assert(result==="1,3,4,5,9,0",{
        "function": "distinctValues",
        "expected":"1,3,4,5,9,0",
        "result":result
    })
}
function countValues(arr){
let obj={}
//passar pelo array e jogando os valores para um novo array, se o valor ja existe no novo array adicionar mais um a contagem desse numero contido no array
  for (let i = 0; i < arr.length; i++){
  let count=arr[i];
   if(obj[count]===undefined){
       obj[count]=1
    } 
    else{
        obj[count]++;
    }
}
let texto=""
for (let i in obj) {
  texto += i + "(" + obj[i] + ")" + " ";
}
return texto.trim();
}


//TESTE 1
function testeCountValues1(){
    let result=countValues([1,2,3,4,1,2,3,4,1])
    console.assert(result==="1(3) 2(2) 3(2) 4(2)",{
        "function":"countValues",
        "expected":"1(3) 2(2) 3(2) 4(2)",
        "result":result
    })
}//TESTE 2
function testeCountValues2(){
    let result=countValues([1,2,3,4,2,2,3,1,5,5,9])
    console.assert(result==="1(2) 2(3) 3(2) 4(1) 5(2) 9(1)",{
        "function":"countValues",
        "expected":"1(2) 2(3) 3(2) 4(1) 5(2) 9(1)",
        "result":result
    })
}
function evaluateExpression(str,obj){
let strS=str.split("")
let results=0
for(let i=0;i<strS.length;i++){
    let current=obj[strS[0]]
    let current2=obj[strS[2]]
    let current3=obj[strS[4]]
    let current4=obj[strS[6]]
    if (strS[1]==="+"){
        results=current+current2
    }
    if (strS[1]==="-") {
        results=current-current2
    }
    if (strS[3]==="+"){
        results+=current3
        
    }
    if (strS[3]==="-") {
        results-=current3
    }
    if (strS[5]==="+"){
        results+=current4
        
    }
    if (strS[5]==="-") {
        results-=current4
    }
}
return results
}
//TESTE 1
function testEvaluateExpression1() {
    let result = evaluateExpression("a+b+c-d",{a:1,b:7,c:3,d:14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 //TESTE
 function testEvaluateExpression2() {
    let result = evaluateExpression("a+b-c+d", {a:2,b:3,c:4,d:1});
    let expected = 2
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }