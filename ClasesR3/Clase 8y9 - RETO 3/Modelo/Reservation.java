
package com.example.demo.Modelo;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;

/*Se deben agregar los paquetes donde genere falla */

@Entity  /*declara la clase como una tabla */
@Table(name = "reservation") /* Definir y nombra una tabla */
public class Reservation {

    @Id                                                     /*representa clave primaria sencilla */
    @GeneratedValue(strategy = GenerationType.IDENTITY)    /*Genera valores automáticos para las llaves de tablas. Autoincremental por lo del paréntesis */
    private Integer idReservation;                                    /* Atributos de la tabla con sus tipos */
    private Date startDate ;
    private Date devolutionDate;
    private String status = "created";
    private String score = "";

    /* INSERTAR LOS GETTER Y SETTER - Click derecho insert code, getter and setter, seleccionar todos y generar*/

}