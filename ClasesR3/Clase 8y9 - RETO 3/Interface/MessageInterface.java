
package com.example.demo.Interface;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.Modelo.Message;
/*Se deben agregar los paquetes donde genere falla */


public interface MessageInterface extends CrudRepository<Message, Integer>{


    

}