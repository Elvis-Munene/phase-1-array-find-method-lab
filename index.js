// code your solution here


const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  


function superbowlWin(records){
    let rec = records.find( function (record) {
        return record.result == "W"
    })
    console.log('rec', rec)
    //get the year
    if (rec) {
        return rec.year 
    } else {
        return undefined
    }
}
console.log(superbowlWin(record));