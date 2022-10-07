
package com.example.demo.Interface;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.Modelo.Reservation;
/*Se deben agregar los paquetes donde genere falla */


public interface ReservationInterface extends CrudRepository<Reservation, Integer>{


    

}