function leerDatos(tipo){
        $.ajax({
            url:"http://localhost:8080/api/"+tipo+"/all",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
            console.log(respuesta);
            
            $("#res_tabla").empty();
            updateTabla(respuesta, tipo)
            
            }
            });
    };

function updateTabla(items, tipo){
    
    let myTable = '<table class="text-gray-600 border-rounded-lg text-center text-sm border border-gray-300">';
    myTable += "<thead class='border border-gray-300'>";
    myTable += "<tr class='rounded-full'>";

    switch(tipo){

    case 'Category':
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Eliminar</th>";   
            myTable+="</tr>";
            myTable+="</thead>"
        
    for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].id+", \""+tipo+"\");'>"
            +items[i].name+"</a>"+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].id+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto text-gray-400 hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
 
    break;

    case 'Cloud':
    myTable+="<th>ID</th>";
    myTable+="<th>Nombre</th>";
    myTable+="<th>Eliminar</th>";   
    myTable+="</tr>";
    myTable+="</thead>"

    for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].id+", \""+tipo+"\");'>"
            +items[i].name+"</a>"+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].id+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto text-gray-400 hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }

    listar('Category')
     
    break;

    case 'Client':
    myTable+="<th>ID</th>";
    myTable+="<th>Nombre</th>";  
    myTable+="<th>Eliminar</th>"; 
    myTable+="</tr>";
    myTable+="</thead>"

        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].idClient+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].idClient+", \""+tipo+"\");'>"
            +items[i].name+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].idClient+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
         
    break;

    case 'Message':
    myTable+="<th>ID</th>";
    myTable+="<th>Mensaje</th>";
    myTable+="<th>Eliminar</th>";   
    myTable+="</tr>";
    myTable+="</thead>"
    
        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].idMessage+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].idMessage+", \""+tipo+"\");'>"
            +items[i].messageText+"</td>";
            myTable+='<td> <a class="text-center"  href="#" onclick="eliminar('+items[i].idMessage+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
    listar('Cloud')
    listar('Client')      
    break
    
    case 'Reservation':
    myTable+="<th>ID</th>";
    myTable+="<th>Calificar</th>"
    myTable+="<th>Eliminar</th>";   
    myTable+="</tr>";
    myTable+="</thead>"
    
    for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].id+", \""+tipo+"\");'></a></td>";
            myTable+='<td> <a class="text-center" href="#" onclick="detalle('+items[i].id+', \''+"Score"+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto text-gray-400 hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].id+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto text-gray-400 hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";
    }
listar('Cloud')
break;

case 'Admin':
    myTable+="<th>ID</th>";
    myTable+="<th>Nombre</th>";  
    myTable+="<th>Eliminar</th>"; 
    myTable+="</tr>";
    myTable+="</thead>"

        for(i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].idAdmin+"</td>";
            myTable+="<td>"+"<a class='text-sm font-bold text-gray-500 text-center hover:text-[#4164B7] cursor-pointer' href='#'  target='_self' onclick='detalle("+items[i].idAdmin+", \""+tipo+"\");'>"
            +items[i].name+"</td>";
            myTable+='<td> <a class="text-center" href="#" onclick="eliminar('+items[i].idAdmin+', \''+tipo+'\');">'
            myTable+='<svg class="w-6 h-6 mx-auto hover:text-[#4164B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
            myTable+='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a></td>'
            myTable+="</tr>";   
        }
         
    break;

    }

    myTable+= "</table>";
    $("#res_tabla").append(myTable);
}

function detalle(id, tipo){
    sessionStorage.setItem('id',id);
    sessionStorage.setItem('tipo',tipo);
    if (tipo=="Score"){location.href="./Califica_R3.html";} else {location.href="./Detalles_R3.html";}
    
}

function verDetalle(){

    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');
    let myType;
    let myBack;
    
    let myTable = '<table class="table-auto text-gray-600 text-center text-sm">';
    $.ajax({
        url:"http://localhost:8080/api/"+tipo+"/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        
        $("#res_tabla").empty();
        $("#res_Back").empty();
        $("#res_Type").empty();

        switch(tipo){

        case 'Category':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Descripción</th>";
            myTable+="<th>Nubes</th>";   
            myTable+="</tr>";
            myTable+="</thead>";
                    
            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].id==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].id+"</td>";
                myTable+="<td style='white-space:pre'>"+'<input type="text" id="nombre" value='+respuesta[i].name+' name="nombre" class="whitespace-pre w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="<td>";
                myTable+='<textarea type="text" id="description" name="description" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">'+respuesta[i].description+'</textarea>'
                myTable+="</td>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].clouds+"</td>";
                myTable+="</tr>"; 
                } 
            }
                
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Category_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Categorías</label>';         
        break;
        
        case 'Cloud':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Proveedor</th>";
            myTable+="<th>Modelo</th>";
            myTable+="<th>Categoría</th>";
            myTable+="<th>Descripción</th>";            
            myTable+="</tr>";
            myTable+="</thead>";
                
            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].id==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].id+"</td>";
                myTable+="<td>"+'<input type="text" id="nombre" value='+ respuesta[i].name+' name="nombre" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td>"+'<input type="text" id="proveedor" value='+respuesta[i].brand+' name="proveedor" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"></input>' + "</td>";
                myTable+="<td>"+'<input type="number" id="modelo" value='+respuesta[i].year+' name="modelo" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="<td>"+'<input type="text" id="categoryId" value='+respuesta[i].category.name+' name="categoryId" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="<td>";
                myTable+='<textarea type="text" id="description" name="description" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">'+respuesta[i].description+'</textarea>'
                myTable+="</td>";
                myTable+="</tr>"; 
                } 
            }
            
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Nubes_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Nubes</label>';        
        break;
    
        case 'Client':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Email</th>";
            myTable+="<th>Edad</th>";          
            myTable+="</tr>";
            myTable+="</thead>";

            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].idClient==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].idClient+"</td>";
                myTable+="<td>"+'<input type="text" id="nombre" value='+ respuesta[i].name+' name="nombre" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].email + "</td>";
                myTable+="<td>"+'<input type="number" id="edad" value='+respuesta[i].age+' name="edad" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+="</tr>"; 
                }  
            }
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Clientes_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Clientes</label>';
        break;
    
        case 'Message':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Mensaje</th>";       
            myTable+="</tr>";
            myTable+="</thead>";

            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].idMessage==id){   
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].idMessage+"</td>";
                myTable+="<td>";
                myTable+='<textarea type="text" id="Message" name="Message" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">'+respuesta[i].messageText+'</textarea>'
                myTable+="</td>";
                myTable+="</tr>";  
                }
                        
            }

            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Mensaje_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Mensajes</label>';
        break;

        case 'Reservation':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre Nube</th>";
            myTable+="<th>ID Usuario</th>";
            myTable+="<th>Nombre Usuario</th>";
            myTable+="<th>Email Usuario</th>";
            myTable+="<th>Fecha inicio</th>";
            myTable+="<th>Fecha fin</th>";
            myTable+="<th>ID Usuario</th>";
            myTable+="<th>Calificación</th>";         
            myTable+="</tr>";
            myTable+="</thead>";
                    
            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].id==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].id+"</td>";
                myTable+="<td>"+respuesta[i].cloud.name+"</td>";
                myTable+="<td>"+respuesta[i].client.id+"</td>";
                myTable+="<td>"+respuesta[i].client.name+"</td>";
                myTable+="<td>"+respuesta[i].client.email+"</td>";
                myTable+="<td>"+'<input type="text" id="nombre" value='+respuesta[i].startDate+' name="nombre" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td>"+'<input type="text" id="nombre" value='+respuesta[i].devolutionDate+' name="nombre" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td>"+respuesta[i].score.score+"</td>";
                myTable+="</tr>"; 
                } 
            }
                
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Reserva_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Reservas</label>';     
        break;

        case 'Admin':
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>Nombre</th>";
            myTable+="<th>Email</th>";
            myTable+="<th>Edad</th>";          
            myTable+="</tr>";
            myTable+="</thead>";

            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].idAdmin==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].idAdmin+"</td>";
                myTable+="<td>"+'<input type="text" id="nombre" value='+ respuesta[i].name+' name="nombre" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"> </div>' + "</td>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].email + "</td>";
                myTable+="</tr>"; 
                }  
            }
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Clientes_R3.html" target="_self">';
            myType = '<label class="leading-7 text-ml text-gray-600">Clientes</label>';
        break;

        }

        myTable+= "</table>";
        myBack+='Regresar </a>';
            $("#res_Type").append(myType);
            $("#res_tabla").append(myTable);                       
            $("#res_Back").append(myBack);
    }
});

}

function crearReg(tipo){
    
    let myData={};
    
    switch(tipo){
       
    case 'Category': 
        myData={    
            //id:$("#id").val(),
            name:$("#nombre").val(),
            description:$("#description").val(),              
            }; //Almaceno info en variables
    break;    

    case 'Cloud': 
        myData={    
            //id:$("#id").val(),
            brand:$("#proveedor").val(),
            year:$("#modelo").val(),
            category:{"id":$("#CategoryId").val()},
            name:$("#nombre").val(),
            description:$("#description").val(),              
            }; //Almaceno info en variables
            
    break;
    case 'Client':
        myData={    
            //id:$("#id").val(),
            name:$("#nombre").val(),
            email:$("#email").val(),
            age:$("#edad").val(),
            password:$("password").val(),              
            }; //Almaceno info en variables
            
    break;
    case 'Message':
        myData={    
            //id:$("#id").val(),
            messageText:$("#Message").val(),
            cloud:{"id":$("#CloudId").val()},
            client:{"idClient":$("#ClientId").val()},            
            }; //Almaceno info en variables
            
    break;

    case 'Reservation': 
    myData={    
        //id:$("#id").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),   
        cloud:{"id":$("#CloudId").val()},
        client:{"idClient":$("#ClientId").val()},          
        }; //Almaceno info en variables
    break;

    case 'Score': 
        myData={    
            //idScore:id,
            score:$("#score").val(),
            scoreText:$("#scoreText").val(),
            reservation:{"id":$("#ReservationId").val()},           
            }; //Almaceno info en variables
    break;
    case 'Admin':
        myData={    
            //id:$("#id").val(),
            name:$("#nombre").val(),
            email:$("#email").val(),
            password:$("password").val(),             
            }; //Almaceno info en variables
            
    break;

    default: console.log("No type selected")
    }
    let dataToSend=JSON.stringify(myData);

    $.ajax({ //Llamo al método AJAX
        url:"http://localhost:8080/api/"+tipo+"/save", //Dirección del módulo
        type:"POST", //Tipo post para enviar
        data:dataToSend, //Datos a enviar
        contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
        datatype:"JSON", //Tipo de datos a enviar
        success:function(respuesta){
            $("#res_tabla").empty();

            switch(tipo){
                        
            case 'Category':
                //$("#id").val("");
                $("#nombre").val("");
                $("#description").val("");
            break;
            case 'Cloud':
                //$("#id").val("");
                $("#nombre").val("");
                $("#proveedor").val("");
                $("#modelo").val("");
                $("#CategoryId").val("");
                $("#description").val("");
            break;
            case 'Client':
                //$("#id").val("");
                $("#nombre").val("");
                $("#email").val("");
                $("#edad").val("");
                $("#password").val("");
            break;
            case 'Message':
                //$("#id").val("");
                $("#message").val("");
                $("#ClientId").val(""),
                $("#CloudId").val("");  
            break;
            case 'Reservation':
                ///$("#id").val("");
                $("#startDate").val("");
                $("#devolutionDate").val("");   
                $("#ClientId").val("");
                $("#CloudId").val("");     
            break;
            case 'Score': 
                //$("#id").val("");
                $("#score").val("");
                $("#scoreText").val("");
                $("#ReservationId").val("");
            break;
            case 'Admin':
                //$("#id").val("");
                $("#nombre").val("");
                $("#email").val("");
                $("#password").val("");
            break;
                     
        }

        leerDatos(tipo);
        alert("Se han almacenado los datos");

        }
    });
}


function ActualizaReg(){
    
    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');

    let myData={};
    
    switch(tipo){
       
    case 'Category': 
        myData={    
            id:id,
            name:$("#nombre").val(),
            description:$("#description").val(),              
            }; //Almaceno info en variables
    break;

    case 'Cloud': 
        myData={    
            id:id,
            brand:$("#proveedor").val(),
            year:$("#modelo").val(),
            categoryId:$("#CategoryId").val(),
            name:$("#nombre").val(),
            description:$("#description").val(),            
            }; //Almaceno info en variables     
    break;

    case 'Client':
        myData={    
            idClient:id,
            name:$("#nombre").val(),
            email:$("#email").val(),
            age:$("#edad").val(),
                         
            }; //Almaceno info en variables 
    break;

    case 'Message':
        myData={    
            idMessage:id,
            messageText:$("#Message").val(), 
            cloud:{"id":$("#CloudId").val()},
            client:{"idClient:":$("#ClientId").val()},          
            }; //Almaceno info en variables
    break;

    case 'Reservation': 
        myData={    
            id:id,
            startDate:$("#startDate").val(),
            devolutionDate:$("#devolutionDate").val(),
            cloud:{"id":$("#CloudId").val()},
            client:{"idClient":$("#ClientId").val()},           
            }; //Almaceno info en variables
    break;

    case 'Score': 
        myData={    
            idScore:id,
            score:$("#score").val(),
            scoreText:$("#scoreText").val(),
            reservation:{"id":$("#ReservationId").val()},           
            }; //Almaceno info en variables
    break;

    case 'Admin':
        myData={    
            idAdmin:id,
            name:$("#nombre").val(),
            email:$("#email").val(),
                          
            }; //Almaceno info en variables 
    break;
    

    default: console.log("No type selected")
    }
    let dataToSend=JSON.stringify(myData);
    console.log(myData);
    $.ajax({ //Llamo al método AJAX
        url:"http://localhost:8080/api/"+tipo+"/update", //Dirección del módulo
        type:"PUT", //Tipo post para enviar
        data:dataToSend, //Datos a enviar
        contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
        datatype:"JSON", //Tipo de datos a enviar
        success:function(respuesta){
            $("#res_tabla").empty();

            switch(tipo){
            case 'Reservation':
                $("#id").val("");
                $("#startDate").val("");
                $("#devolutionDate").val("");   
                $("#ClientId").val("");
                $("#CloudId").val("");
            break;
            
            case 'Category':
                $("#id").val("");
                $("#nombre").val("");
                $("#description").val("");
            break;
            case 'Cloud':
                $("#id").val("");
                $("#nombre").val("");
                $("#proveedor").val("");
                $("#CategoryId").val("");
                $("#modelo").val("");
                $("#description").val("");
            break;
            case 'Client':
                $("#id").val("");
                $("#nombre").val("");
                $("#email").val("");
                $("#edad").val("");
            break;
            case 'Message':
                $("#id").val("");
                $("#mensaje").val("");
                $("#ClientId").val("");
                $("#CloudId").val("");
            break;
            case 'Score': 
                $("#id").val("");
                $("#score").val("");
                $("#scoreText").val("");
                $("#ReservationId").val("");
            break;
            case 'Client':
                $("#id").val("");
                $("#nombre").val("");
                $("#email").val("");               
            break;
      
        }

        verDetalle();
        alert("Se han actualizado los datos");

        }
    });
}

function eliminar(id, tipo){
 
    console.log(id, tipo);
    let myData={id:id}; //Almaceno id traída desde el pintar
    let dataToSend=JSON.stringify(myData); //Convierto en JSON
        $.ajax({ //Llamo al método AJAX
            url:"http://localhost:8080/api/"+tipo+"/"+id, //Dirección del módulo
            type:"DELETE", //Tipo post para enviar
            data:dataToSend, //Datos a enviar
            contentType:"application/JSON", //Le indico al servidor en qué formato le envío la info
            datatype:"JSON", //Tipo de datos a enviar
            success:function(respuesta){
                $("#resultado").empty();
                leerDatos(tipo);
                alert("Se ha eliminado el dato")
            }
            });
    


}

function listar(tipo){

    $.ajax({
        url:"http://localhost:8080/api/"+tipo+"/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        //console.log(respuesta.entries);
        $("#res_Select"+tipo).empty();
        
        let mySelect = '<select type="number" id="'+tipo+'Id" name="'+tipo+'Id" class="w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-20 text-base outline-none leading-8 transition-colors" required>'
        mySelect += '<option disabled selected class="text-gray-700">Selecciona una opción</option>'
        for(i=0;i<respuesta.length;i++){
            console.log(respuesta[i]);  
            
            if(tipo=="Client"){
                mySelect += '<option value='+respuesta[i].idClient+'>'+respuesta[i].name+'</option>'
            }else {
            mySelect += '<option value='+respuesta[i].id+'>'+respuesta[i].name+'</option>'}
        }
        mySelect += '</select>'
      
        $("#res_Select"+tipo).append(mySelect)

        console.log(mySelect);

        }
        });


};

function contar(valor, label){
    let characterCount = valor.value.length,
        current = $('#current'+label);
    current.text(characterCount);
   
 };

function calificar(){

    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');
    let myType;
    let myBack;
    
    let myTable = '<table class="table-auto text-gray-600 text-center text-sm">';
    $.ajax({
        url:"http://localhost:8080/api/"+tipo+"/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        
        $("#res_tabla").empty();
        $("#res_Back").empty();
        $("#res_Type").empty();

                
            myTable+="<thead>";
            myTable+="<tr>";
            myTable+="<th>ID</th>";
            myTable+="<th>ID Reserva</th>";
            myTable+="<th>Calificación</th>";
            myTable+="<th>Descripción</th>";         
            myTable+="</tr>";
            myTable+="</thead>";
                    
            for(i=0;i<respuesta.length;i++){
                if(respuesta[i].Reservation.idReservation==id){
                myTable+="<tr>";
                myTable+="<td style='cursor: not-allowed;'>"+respuesta[i].idScore+"</td>";
                myTable+="<td>"+respuesta[i].reservation.idReservation+"</td>";
                myTable+="<td>"+'<input type="number" id="score" min="1" max="5" pattern="\d" value='+respuesta[i].score+' name="score" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-center outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out">' + "</td>";
                myTable+='<textarea type="text" id="scoreText" name="scoreText" class="w-2/3 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">'+respuesta[i].scoreText+'</textarea>'
                myTable+="</tr>";
                } 
            }
                
            myBack = '<a class="text-sm font-bold text-gray-500 text-center hover:text-gray-900 cursor-pointer" href="Reserva_R3.html" target="_self">'
            myType = '<label class="leading-7 text-ml text-gray-600">Calificación</label>'
            
            
        let myButton
        
        
        if(respuesta.idScore==null){

            myButton += "<button onclick='CrearReg(tipo)' class='text-white font-bold bg-[#4164B7] border-0 py-2 px-6 focus:outline-none hover:bg-[#EC2468] rounded text-xl'> Crear </button>"
        }

        else{

            myButton += "<button onclick='ActualizaReg()' class='text-white font-bold bg-[#4164B7] border-0 py-2 px-6 focus:outline-none hover:bg-[#EC2468] rounded text-xl'> Actualizar </button>"
        }
        
        $("#res_Type").append(myType);
        $("#res_tabla").append(myTable);                       
        $("#res_Back").append(myBack);
        $("#res_Button").append(myButton);
  
       

       
        }
    });
    
}
 