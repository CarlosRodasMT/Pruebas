
package com.example.demo.Repositorio;

import com.example.demo.Interface.MessageInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.demo.Modelo.Message;
import java.util.Optional;
import java.util.List;/*Se deben agregar los paquetes donde genere falla */

@Repository  /*defino la clase como un repositorio */
public class MessageRepository {

    @Autowired /*Permite traer métodos de otras clases o interfaces como atributos*/
    private MessageInterface extensionesCrud;

    public List<Message> getAll(){
        return (List<Message>) extensionesCrud.findAll();  /*creo un método para encontrar la tabla desde el repositorio a través de los métodos de la interface*/
    }

    public Optional<Message> getMessage(int idMessage){
        return extensionesCrud.findById(idMessage);
    }

    public Message save(Message message){
        return extensionesCrud.save(message);
    }

  

}