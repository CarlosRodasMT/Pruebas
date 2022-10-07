
package com.example.demo.Interface;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.Modelo.Category;
/*Se deben agregar los paquetes donde genere falla */


public interface CategoryInterface extends CrudRepository<Category, Integer>{


    

}