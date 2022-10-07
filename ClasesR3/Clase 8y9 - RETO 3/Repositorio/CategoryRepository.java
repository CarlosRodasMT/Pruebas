
package com.example.demo.Repositorio;

import com.example.demo.Interface.CategoryInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.demo.Modelo.Category;
import java.util.Optional;
import java.util.List;
/*Se deben agregar los paquetes donde genere falla */

@Repository  /*defino la clase como un repositorio */
public class CategoryRepository {
    
    @Autowired /*Permite traer métodos de otras clases o interfaces como atributos*/
    private CategoryInterface extensionesCrud;

    public List<Category> getAll(){
        return (List<Category>) extensionesCrud.findAll();  /*creo un método para encontrar la tabla desde el repositorio a través de los métodos de la interface*/
    }

    public Optional<Category> getCategory(int id){
        return extensionesCrud.findById(id);
    }

    public Category save(Category category){
        return extensionesCrud.save(category);
    }

}