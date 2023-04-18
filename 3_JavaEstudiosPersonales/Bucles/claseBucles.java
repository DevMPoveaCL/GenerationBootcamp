import java.io.Console;

public class claseBucles {

  public static void main(String[] args) {
    Console console = System.console();
    System.out.println("*****Bienvenido/a*****");
   // int contador = 0;
    int repeticiones = Integer.parseInt(console.readLine("Ingrese cuantas comisiones va a calcular: "));

   /*  while(repeticiones != contador){
      int venta = Integer.parseInt(console.readLine("Ingrese su cifra de ventas: "));
      if (venta > 10000) {
          System.out.println("Su comisión es de: " + (venta * 0.3) + ", correspondiente al 30%");
      } else if (venta >= 5000 && venta <= 9999) {
          System.out.println("Su comisión es de: " + (venta * 0.2) + ", correspondiente al 20%");
      } else if (venta >= 1001 && venta <= 4999) {
          System.out.println("Su comisión es de: " + (venta * 0.1) + ", correspondiente al 10%");
      } else {
          System.out.println("A usted no le corresponde comisión");
      }
      System.out.println("Antes de hacer el contador ++, El contador tiene valor: "+contador);
      contador++;  
    } */

    /* while(repeticiones != 0){
      int venta = Integer.parseInt(console.readLine("Ingrese su cifra de ventas: "));
      if (venta > 10000) {
          System.out.println("Su comisión es de: " + (venta * 0.3) + ", correspondiente al 30%");
      } else if (venta >= 5000 && venta <= 9999) {
          System.out.println("Su comisión es de: " + (venta * 0.2) + ", correspondiente al 20%");
      } else if (venta >= 1001 && venta <= 4999) {
          System.out.println("Su comisión es de: " + (venta * 0.1) + ", correspondiente al 10%");
      } else {
          System.out.println("A usted no le corresponde comisión");
      }  
      repeticiones --;
    } */

    for (int i=0; i<repeticiones; i++){
      int venta = Integer.parseInt(console.readLine("Ingrese su cifra de ventas: "));
      if (venta > 10000) {
          System.out.println("Su comisión es de: " + (venta * 0.3) + ", correspondiente al 30%");
      } else if (venta >= 5000 && venta <= 9999) {
          System.out.println("Su comisión es de: " + (venta * 0.2) + ", correspondiente al 20%");
      } else if (venta >= 1001 && venta <= 4999) {
          System.out.println("Su comisión es de: " + (venta * 0.1) + ", correspondiente al 10%");
      } else {
          System.out.println("A usted no le corresponde comisión");
      }  
    }
    }
}
