function registrarCliente(){
    
}

function registrarMensaje(){
    
}

function crearNube(){

}

function leerDatos(tipo){
    
    switch(tipo){
    case 'nubes':
        $.ajax({
            url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cloud/cloud",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            updateTabla(respuesta.items, tipo)

            }
            });
    break;

    case 'clientes':
        $.ajax({
            url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            updateTabla(respuesta.items, tipo)

            }
        
            });
    break;

    case 'msjs':
        $.ajax({
            url:"https://gaace7eeef4f5e2-cloud.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            updateTabla(respuesta.items, tipo)

            }
        
            });
    break;

    };
}

function updateTabla(items, tipo){
    
    let myTable = '<table class="table-auto text-gray-600 text-center text-sm">';
    
    switch(tipo){
    case 'nubes':
        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+items[i].brand+"</td>";
            myTable+="<td>"+items[i].model+"</td>";
            myTable+="<td>"+items[i].category_id+"</td>";
            myTable+="<td>"+items[i].name+"</td>";
            myTable+="</tr>";   
        }
        myTable+= "</table>";
        $("#res_Nube").append(myTable);
    break;

    case 'clientes':
        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+items[i].brand+"</td>";
            myTable+="<td>"+items[i].model+"</td>";
            myTable+="<td>"+items[i].category_id+"</td>";
            myTable+="</tr>";   
        }
        myTable+= "</table>";
        $("#res_Clientes").append(myTable);  
    break;

    case 'msjs':
        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+items[i].brand+"</td>";
            myTable+="</tr>";   
        }
        myTable+= "</table>";
        $("#res_msjs").append(myTable);  
    break;

    }
}