function leerDatos(tipo){
        $.ajax({
            url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/"+tipo+"/"+tipo,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
            console.log(respuesta);
            $("#res_tabla").empty();
            updateTabla(respuesta.items, tipo)
            
            }
            });
    };

function updateTabla(items, tipo){
    
    let myTable = '<table class="table-auto text-gray-600 text-center text-sm">';
    switch(tipo){
    case 'cloud':
    myTable+="<th>ID</th>";
    myTable+="<th>Nombre</th>";   
    myTable+="</tr>";
    myTable+="</thead>"

    for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].id+", \""+tipo+"\");'>"
            +items[i].name+"</a>"+"</td>";
            myTable+="</tr>";   
        }
    myTable+= "</table>";
    $("#res_tabla").append(myTable); 
    break;

    case 'client':
        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+items[i].brand+"</td>";
            myTable+="<td>"+items[i].model+"</td>";
            myTable+="<td>"+items[i].category_id+"</td>";
            myTable+="</tr>";   
        }
        myTable+= "</table>";
        $("#res_tabla").append(myTable);  
    break;

    case 'message':
        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+items[i].brand+"</td>";
            myTable+="</tr>";   
        }
        myTable+= "</table>";
        $("#res_tabla").append(myTable);  
    break;
    }
}

function detalle(id, tipo){
    sessionStorage.setItem('id',id);
    sessionStorage.setItem('tipo',tipo);
    location.href="./Detalles_R2.html";
}

function verDetalle(){

    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');

    let myTable = '<table class="table-auto text-gray-600 text-center text-sm">';
 
    switch(tipo){
        case 'cloud':
            $.ajax({
                url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cloud/cloud",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                console.log(respuesta);
                $("#res_tabla").empty();
                myTable+="<thead>";
                myTable+="<tr>";
                myTable+="<th>ID</th>";
                myTable+="<th>Nombre</th>";
                myTable+="<th>Proveedor</th>";
                myTable+="<th>Modelo</th>";
                myTable+="<th>Categoría</th>";            
                myTable+="</tr>";
                myTable+="</thead>";
                
                for(i=0;i<respuesta.items.length;i++){
                    if(respuesta.items[i].id==id){
                    myTable+="<tr>";
                    myTable+="<td>"+respuesta.items[i].id+"</td>";
                    myTable+="<td>"+respuesta.items[i].name+"</td>";
                    myTable+="<td>"+respuesta.items[i].brand+"</td>";
                    myTable+="<td>"+respuesta.items[i].model+"</td>";
                    myTable+="<td>"+respuesta.items[i].category_id+"</td>";
                    myTable+="</tr>"; 
                    } 
                }         
            
             
            myTable+= "</table>";

            $("#res_tabla").append(myTable); 

            let myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Nubes_R2.html" target="_self">'
            myBack+='Regresar </a>'
            
            $("#res_Back").append(myBack);
                
                }
                });
        break;
    
        case 'client':
            for(i=0;i<items.length;i++){
                myTable+="<tr>";
                myTable+="<td>"+items[i].id+"</td>";
                myTable+="<td>"+items[i].brand+"</td>";
                myTable+="<td>"+items[i].model+"</td>";
                myTable+="<td>"+items[i].category_id+"</td>";
                myTable+="</tr>";   
            }
            myTable+= "</table>";
            $("#res_tabla").append(myTable);  
        break;
    
        case 'message':
            for(i=0;i<items.length;i++){
                myTable+="<tr>";
                myTable+="<td>"+items[i].id+"</td>";
                myTable+="<td>"+items[i].brand+"</td>";
                myTable+="</tr>";   
            }
            myTable+= "</table>";
            $("#res_tabla").append(myTable);  
        break;

        }

}

function crearReg(tipo){
    let myData={
            id:$("#id").val(),
            name:$("#nombre").val(),
            brand:$("#proveedor").val(),
            model:$("#modelo").val(),
            category_id:$("#category_id").val(),  
                              
    }; //Almaceno info en variables
    let dataToSend=JSON.stringify(myData);
    $.ajax({ //Llamo al método AJAX
        url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/"+tipo+"/"+tipo, //Dirección del módulo
        type:"POST", //Tipo post para enviar
        data:dataToSend, //Datos a enviar
        contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
        datatype:"JSON", //Tipo de datos a enviar
        success:function(respuesta){
            $("#res_tabla").empty();

            switch(tipo){
            case cloud:
            $("#id").val("");
            $("#nombre").val("");
            $("#proveedor").val("");
            $("#modelo").val("");
            $("#category_id").val("");
            leerDatos(tipo);
            alert("Se han almacenado los datos");
            break;
            case client:
            $("#id").val("");
            $("#nombre").val("");
            $("#proveedor").val("");
            $("#category_id").val("");
            leerDatos(tipo);
            alert("Se han almacenado los datos");
            break;
            case message:
            $("#id").val("");
            $("#mensaje").val("");
            leerDatos(tipo);
            alert("Se han almacenado los datos");
            break;
                     
        }
        }
    });
}

