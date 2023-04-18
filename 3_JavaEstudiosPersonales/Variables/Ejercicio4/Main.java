import java.io.Console;
public class Main { 
  public static void main (String [] args){
    
    Console console = System.console();

    String edad = console.readLine("Inserte su edad: ");
    int age = Integer.parseInt(edad);
    System.out.println("Su edad es: " +age); 

    if (age <5){
      double entrada = 7*0.6;
      System.out.println("El precio de su entrada es: " +entrada);

    }else if (age>60){
      double entrada = 7*0.55;
      System.out.println("El precio de su entrada es: " +entrada);

    }else if (age>=5 && age<=60){
      int cantidad =Integer.parseInt (console.readLine("Ingrese cuantas entradas desea comprar: "));
      if (cantidad >=2){
        double entrada = 7*0.3;
        System.out.println("El precio de su entrada es: " +entrada*cantidad);
      }else{
        double entrada = 7;
        System.out.println("El precio de su entrada es: " +entrada);
      }
    } 
  }
}
