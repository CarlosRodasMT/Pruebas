
package com.example.demo.Modelo;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

/*Se deben agregar los paquetes donde genere falla */

@Entity  /*declara la clase como una tabla */
@Table(name = "message") /* Definir y nombra una tabla */
public class Message {

    @Id                                                     /*representa clave primaria sencilla */
    @GeneratedValue(strategy = GenerationType.IDENTITY)    /*Genera valores automáticos para las llaves de tablas. Autoincremental por lo del paréntesis */
    private Integer idMessage;                                    /* Atributos de la tabla con sus tipos */
    private String messageText;
    
    /* INSERTAR LOS GETTER Y SETTER - Click derecho insert code, getter and setter, seleccionar todos y generar*/

}