// from data.js
var tableData = data;

// YOUR CODE HERE!
var table_body = d3.select("tbody");

data.forEach(function(ufo){
//console.log(ufo);
var row = table_body.append("tr");
Object.entries(ufo).forEach(function([key, value]){
var cell = table_body.append("td");
cell.text(value);

});
});

var button = d3.select("#filter-btn");
button.on("click", function(){
    var inputDate= d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");
    var filteredData = tableData.filter(x => x.datetime === inputDate);
    console.log(filteredData);
    filteredData.forEach(function(x){
        //console.log(ufo);
        table_body.html("");
        var row = table_body.append("tr");
        Object.entries(x).forEach(function([key, value]){
        var cell = table_body.append("td");
        cell.text(value);
        
        });
        });

console.log(city);
console.log(state);
console.log(country);
console.log(shape);
});




/*inputField.on("change", function() {
    var datetime = d3.event.target.value;
    data.forEach(function(dt){
        var row2 = table_body.append("tr");
        Object.entries(dt).forEach(function([key, value]){
            var cell = table_body.append("td");
            cell.text(value)
        });
    });
    });
    //or maybe...


function filtered_date(event){


}

}

function new_data(event){
    var dates =  d3.select("#datetime");
    var input = d3.event.target.value;
};











/*function dtFinder(date){
    return date.datetime === (".city");// whats the correct code for the input? 
}
var filtered_date = data.filter(dtFinder);

var input = document.querySelector('.input');
var dates = document.querySelector('#filters');

function input('keyup', function(ev) {
  var text = ev.target.value;
  var pat = new RegExp(text, 'i');
  for (var i=0; i < dates.length; i++) {
    var date = dates[i];
    if (pat.test(item.innerText)) {
      item.classList.remove("hidden");
    }
    else {console.log(date);
      item.classList.add("hidden");
    }
  }
});*/
