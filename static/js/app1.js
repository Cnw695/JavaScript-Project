// from data.js
var tableData = data;
var table = d3.select("table");
table.attr("class", "table table-striped");
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

//var button = d3.select("#filter-btn");
var input = d3.select("input");
var button = d3.selectAll(".filter")//grabbed from html

inputDict = {}
function filterid(){
    var query = d3.select(this).select("input");//taking the current value of the input tag
    var inputData= query.property("value");
    var inputid = query.attr("id");
    inputDict[inputid]=inputData
    console.log(inputDict);
    //inputDict[city]= "benton"
    createnewTable();
}

function createnewTable() {
    let new_data = tableData
    Object.entries(inputDict).forEach(function([key, value]){
        new_data = new_data.filter(x => x[key] === value);
        console.log(new_data);
    });

    table_body.html("");
    new_data.forEach(function(x){
        //console.log(ufo);
        var row = table_body.append("tr");
        Object.entries(x).forEach(function([key, value]){
            var cell = table_body.append("td");
            cell.text(value);
        });
    });

};
button.on("change",filterid);



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
