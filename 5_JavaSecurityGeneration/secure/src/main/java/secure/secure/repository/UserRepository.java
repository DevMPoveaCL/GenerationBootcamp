//repositorio con CRUD ya que viene por defecto en la doc. de spring security.
package secure.secure.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import secure.secure.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
    public Optional<User> findByUsername(String username);

}
