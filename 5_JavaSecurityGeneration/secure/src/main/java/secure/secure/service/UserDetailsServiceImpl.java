//Declaración del servicio
package secure.secure.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import secure.secure.model.Authority;
import secure.secure.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Buscar el usuario con el repository y si no existe vamos a lanzar una
        // excepcion
        // Nosotros generamos la excepción
        // vamos a guardad en una variable el usuario buscado según username, si no lo
        // encuentra creamos un error el cual
        // al momento de generarse nos devolverá el mesnsaje "no existe el usuario"
        secure.secure.model.User appUser = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("no existe el usuario"));
        // Vamos a mappear nuestra lista de Authority con las propiedades de spring
        // security
        List gantList = new ArrayList();

        for (Authority authority : appUser.getAuthority()) {
            // Rol_user, Rol_admin, Rol client
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(authority.getAuthority());
            gantList.add(grantedAuthority);

        }
        // Vamos a crear el objeto UserDetails que va a ir en sesión y también nos lo va
        // a
        UserDetails user = (UserDetails) new User(appUser.getUsername(), appUser.getPassword(), gantList);
        return user;
    }

}
