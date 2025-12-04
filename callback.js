function getUserDetails(id,getUsersSubjects){
    console.log("getting user details by userId",id);
    getUsersSubjects({userroll:"678"})
};
function getUserSubjects(userRoll,getUserMarks){
    console.log("getting user subjects by roll numbeer",userRoll);
    getUserMarks({subid:"en-1"})
}
function getUserMarks(userSubId){
    console.log("getting user marks with subID",userSubId);
}
getUserDetails("123",function(userRoll){
    getUserSubjects(userRoll,function(userSubId){
        getUserMarks(userSubId)
    })

});

