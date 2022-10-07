
package com.example.demo.Interface;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.Modelo.Client;
/*Se deben agregar los paquetes donde genere falla */


public interface ClientInterface extends CrudRepository<Client, Integer>{


    

}