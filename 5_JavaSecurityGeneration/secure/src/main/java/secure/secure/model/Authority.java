//Se crea el modelo de Authority (para identificar a los usuarios autorizados)

package secure.secure.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "authority")
public class Authority {
    @Id
    @GeneratedValue // autoincrementable
    private Long id;
    private String authority;

    public Authority() {
    }

    public Authority(Long id, String authority) {
        this.id = id;
        this.authority = authority;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

}
