import java.io.Console;

public class perfilDeUsuario {

  public static void main (String [] args){

    Console console = System.console();
    String nombre = console.readLine("Inserte nombre: ");
    
    String edad = console.readLine("Inserte su edad: ");
    int age = Integer.parseInt(edad);
    
    String sexo = console.readLine("Inserte su género: ");
    char genero = sexo.charAt(0);
    
    String prefLaboral = console.readLine("Inserte su preferencia laboral: ");
    
    String nacionalidad = console.readLine("Inserte su nacionalidad: ");
    String sangre = console.readLine("Inserte su tipo de sangre: ");

    System.out.println("\n----------------------------\n");
    int anoActual = 2022;
    int anoNacimiento = anoActual - age;
    System.out.println("Su nombre es: "+ nombre+"\nSu edad es: "+age+"\nSu genero es: "+genero+"\nSu preferencia laboral es: "+ prefLaboral+"\nSu nacionalidad es: "+ nacionalidad);
    if (sangre == "0"){
      int tipoSangre = Integer.parseInt(sangre);
      System.out.println("Su tipo de sangre es: "+tipoSangre);
    }
    System.out.println("Su tipo de sangre es: "+sangre+"\nEl año que nació fue: "+anoNacimiento+"\n");
  }
  
}
