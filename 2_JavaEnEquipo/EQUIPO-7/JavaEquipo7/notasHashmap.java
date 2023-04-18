import java.io.Console;
import java.util.ArrayList;
//import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class notasHashmap {
  public static void main(String[] args) {
    Map<String, ArrayList> libroClases = new HashMap<String, ArrayList>();
    Console console = System.console();
    System.out.println("******Bienvenido/a******");
    int cantidad = Integer.parseInt(console.readLine("Ingrese cantidad de alumnos a ingresar: "));
    while (cantidad != 0) {
      String nombre = console.readLine("Ingrese nombre del alumno/a: ");
      ArrayList<Float> notas = new ArrayList<Float>();
      for (int i = 1; i <= 3; i++) {
        Float nota = Float.parseFloat(console.readLine("Ingrese nota " + i + ": "));
        if (nota > 0 && nota <= 7) {
          notas.add(nota);
        } else {
          do {
            System.out.println("Nota inválida, favor ingresar nuevamente la nota\n");
            break;
          } while (nota <= 0 || nota > 7); //do while es innecesario
          i--;
        }
      }

      libroClases.put(nombre, notas);
      cantidad--;
    }
    System.out.println(libroClases);
    for (String i : libroClases.keySet()) {
      float suma = 0.0f;
      for (Object x : libroClases.get(i)) {
        suma = (Float) x + suma;
      }
      // nota = Math.round(nota * 1000d) / 1000d; ->Redondea a 3 decimacles, "100" a
      // 2, "10000" a 4 y así...
      System.out.printf("\nEl promedio de " + i + " fue de: %.1f ", suma / 3);
      // System.out.println("El promedio de: "+i+" fue de: "+suma/3);
    }
  }

}