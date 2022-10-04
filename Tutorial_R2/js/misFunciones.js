function traerInformacion(){
    $.ajax({
        url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        $("#resultado").empty();
        pintarRespuesta(respuesta.items)
        }
        });

}

function pintarRespuesta(items){
    let myTable = "<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>"; //Botón para eliminar en cada fila
        myTable+="</tr>";   
    }
    myTable+= "</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
            id:$("#id").val(),
            name:$("#name").val(),
            brand:$("#brand").val(),
            model:$("#model").val(),
            category_id:$("#category_id").val(),      
    }; //Almaceno info en variables
let dataToSend=JSON.stringify(myData);
    $.ajax({ //Llamo al método AJAX
        url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cloud/cloud", //Dirección del módulo
        type:"POST", //Tipo post para enviar
        data:dataToSend, //Datos a enviar
        contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
        datatype:"JSON", //Tipo de datos a enviar
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            traerInformacion();
            alert("Se han almacenado los datos")
        }
        });
}

function editarInformacion(){
    let myData={
            id:$("#id").val(),
            name:$("#name").val(),
            brand:$("#brand").val(),
            model:$("#model").val(),
            category_id:$("#category_id").val(),      
    }; //Almaceno info en variables
let dataToSend=JSON.stringify(myData);
    $.ajax({ //Llamo al método AJAX
        url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cloud/cloud", //Dirección del módulo
        type:"PUT", //Tipo put para editar
        data:dataToSend, //Datos a enviar
        contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
        datatype:"JSON", //Tipo de datos a enviar
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            traerInformacion();
            alert("Se han actualizado los datos")
        }
        });
}


function borrarElemento(idElemento){
    let myData={
            id:idElemento   
    }; //Almaceno id traída desde el pintar
let dataToSend=JSON.stringify(myData); //Convierto en JSON
    $.ajax({ //Llamo al método AJAX
        url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cloud/cloud", //Dirección del módulo
        type:"DELETE", //Tipo post para enviar
        data:dataToSend, //Datos a enviar
        contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
        datatype:"JSON", //Tipo de datos a enviar
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado el dato")
        }
        });
}
