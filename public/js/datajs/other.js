$(document).ready(function () {

    const form = document.querySelector('form');
    const name = document.getElementById('name');
    const armtemplates = document.getElementById('armtemplates');
    

    var entites = [
        {
            "entityName": "AitDrop",
            "parameter1": "Height",
            "parameter2": "Width",
            "parameter3": "Length",
            "parameter4": "Distance",
            "parameter5": "Type"
        }
    ]

    localStorage.setItem('entites', JSON.stringify(entites));
    entities = localStorage.getItem('entites') ? JSON.parse(localStorage.getItem('entites')) : [];

    console.log(entites)

    generateTable()


    function generateTable(){
        var txt='';

        myObj = entites;
        txt += "<table class='table' border='1'><tr><th> Entity Name </th><th> Parameter 1 </th><th> Parameter 2  </th><th> Parameter 3 </th><th> Parameter 4 </th><th> Parameter 5 </th></tr>"
        for (x in myObj) {
          txt += "<tr><td>" + myObj[x].entityName + "</td><td>" + myObj[x].parameter1 + "</td><td>" + myObj[x].parameter2 + "</td><td>" + myObj[x].parameter3 + "</td><td>" + myObj[x].parameter4 + "</td><td>"+  myObj[x].parameter5 +"</td></tr>";
          //txt += "<td>" + myObj[x].appname + "</td><td>" + myObj[x].bu + "</td><td>" + myObj[x].heathStatus + "</td><td>" + myObj[x].batteryPower + "</td><td>" + myObj[x].created_by + "</td><td>" + myObj[x].created_by + "</td><td>";
          //txt += "<span onclick='deletebu("+x+")' class='glyphicon glyphicon-trash' aria-hidden='true'></span></td></tr>";
        }
        txt += "</table>"    
        document.getElementById("demo").innerHTML = txt;
    }


    $('#save-list').on('click', function (e) {


        if(name.value == "" ){
            alert("Please enter entity name")
        } else {

            e.preventDefault();
         
            var enObject = {
                "entityName": name.value,
                "parameter1": pr1.value,
                "parameter2": pr2.value,
                "parameter3": pr3.value,
                "parameter4": pr4.value,
                "parameter5": pr5.value,     
            }

            entites.push(enObject)
            localStorage.setItem('entites', JSON.stringify(entites));
            generateTable();
            $("#entity").modal('hide');			
        }
    });

});

	
