import java.io.Console;
public class diametroArea {
  public static void main (String [] args){

    Console console = System.console();
    String diametro = console.readLine("Inserte diametro del círculo: ");
    int cirDiametro = Integer.parseInt(diametro);
    System.out.println("Su edad es: "+cirDiametro);
    double pi= 3.14159265;
    double cuadradoCirDiametro = Math.pow(cirDiametro, 2);
    double area = pi * (cuadradoCirDiametro / 4);
    double perimetro = 2 * pi *(cirDiametro/2);
    System.out.println("El área del círculo es: "+ area);
    System.out.println("El perímetro del círculo es: "+ perimetro);
  }
}
