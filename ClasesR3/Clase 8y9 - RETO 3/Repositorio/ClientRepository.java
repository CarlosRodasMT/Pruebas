
package com.example.demo.Repositorio;

import com.example.demo.Interface.ClientInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.demo.Modelo.Client;
import java.util.Optional;
import java.util.List;
/*Se deben agregar los paquetes donde genere falla */

@Repository  /*defino la clase como un repositorio */
public class ClientRepository {

    @Autowired /*Permite traer métodos de otras clases o interfaces como atributos*/
    private ClientInterface extensionesCrud;

    public List<Client> getAll(){
        return (List<Client>) extensionesCrud.findAll();  /*creo un método para encontrar la tabla desde el repositorio a través de los métodos de la interface*/
    }

    public Optional<Client> getClient(int idClient){
        return extensionesCrud.findById(idClient);
    }

    public Client save(Client client){
        return extensionesCrud.save(client);
    }

  

}