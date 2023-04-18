import java.io.Console;
import java.util.ArrayList;
import java.util.Arrays;
//import java.util.HashMap;
//import java.util.Map;

/*
Cree una clase que se llame conversorPeso
cree un menú en donde se le pida al usuario ingresar:
1 si desea covertir el peso en marte
2 si desea convertir el peso en luna.
Luego pida al usuario el peso que desea convertir.
realice la busqueda de cuantos kilos en tierra son en marte y en la luna
calcule cuanto sería el peso ingresado
muestre en pantalla el siguente mensaje según la seleccion del usuario
"El peso ingresado en la luna sería de: ...."
"El peso ingresado en Marte sería de: ...."

ejemplo:
Bienvenido.
Ingerse 1 si desea covertir el peso en marte.
Ingrese 2 si desea convertir el peso en luna.
2
Ingrese el peso que desea convertir
50
El peso ingresado en la luna sería de: 8.27
*/

public class conversorPeso {
  public static void main(String[] arg) {
    Console console = System.console();
    // float nuevoPeso = 0;
    ArrayList<Float> miArray = new ArrayList<Float>(Arrays.asList());

    System.out.println("Bienvenido/a");
    
    int consu = Integer.parseInt(console.readLine("Ingrese el número de veces que quiere preguntar el peso: "));
 

    for (int i = 1; i <= consu; i++) {
      System.out.println("Ingrese 1 si desea convertir el peso en Marte");
      System.out.println("Ingrese 2 si desea convertir el peso en la Luna");
      int opcion = Integer.parseInt(console.readLine());
      if (opcion == 1) {
        float peso = Float.parseFloat(console.readLine("Ingresa tu peso en kilos: "));
        float nuevoPeso = (float) ((peso / 9.81) * 1.622);
        System.out.println("Tu peso en la marte es: " + nuevoPeso+"\n");
        miArray.add(nuevoPeso);
      } else if (opcion == 2) {
        float peso = Float.parseFloat(console.readLine("Ingresa tu peso en kilos: "));
        float nuevoPeso = (float) ((peso / 9.81) * 3.711);
        System.out.println("Tu peso en la luna es: " + nuevoPeso+"\n");
        miArray.add(nuevoPeso);
      } else {
        System.out.println("Ingrese una opción válida"+"\n");
      }
    }
    System.out.println("Los pesos guardados son: " +miArray+"\n");

  }
}