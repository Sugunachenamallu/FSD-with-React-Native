function fun1(value){
   return new Promise(function(resolved){
        setTimeout(function(){
           resolved(1);
        },1000);
    })
};
function fun2(value){
   return new Promise(function(resolved){
        setTimeout(function(){
           resolved(value+1);
        },1000);
    })
};
function fun3(value){
   return new Promise(function(resolved){
        setTimeout(function(){
           resolved(value+1);
        },1000);
    })
};
// fun1().then(function(){
//     console.log("fun-1 completed");
//     fun2().then(function(){
//         console.log("fun-2 completed");
//         fun3().then(function(){
//             console.log("fun-3 completed");
//         })
//     })
// });
async function Execute(){
    try{
             const result1 = await fun1();
             const res2 =await fun2(result1);
             const res3 = await fun3(res2);
              console.log(res3);
    }
    catch(err)
    {
        console.log(err);
    }
}
Execute();