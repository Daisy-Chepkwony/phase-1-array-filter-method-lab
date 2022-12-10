// Code your solution here
function findMatching(driverNames,sought){
    return driverNames.filter(
        (possibleMatch)=>possibleMatch.toLowerCase()===sought.toLowerCase()

    );
}
function fuzzyMatch(driverNames,testString){
    return driverNames.filter(
        (possibleMatch)=>possibleMatch.toLowerCase().indexOf(testString.toLowerCase())===0
    );
}
function matchName(driverNames,soughtNames){
    return driverNames.filter((record)=>record.name===soughtNames);
}
