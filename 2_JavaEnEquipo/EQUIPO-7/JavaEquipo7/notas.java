/*
 * Programa para ingresar alumnos:
-Cantidad de alumnos a ingresar.
-Por cada alumno solicitar e ingresar en hashmap: Nombre Alumno, 3 notas (guardar en arraylist).
 */
import java.io.Console;
import java.util.ArrayList;
import java.util.Arrays;




public class notas {
    public static void main(String[] args) {
        Console console = System.console();
        int alumnos = Integer.parseInt(console.readLine("Ingrese el numero de alumnos: "));
        ArrayList <Float> miArray = new ArrayList <Float>(Arrays.asList());
        ArrayList <String> miArrayNombre = new ArrayList <String>(Arrays.asList());
        

        while(alumnos != 0) {
            System.out.println("Ingrese nombre del alumno ");
            String nombre = console.readLine();
            miArrayNombre.add(nombre);
            int notas = Integer.parseInt(console.readLine("Ingrese el numero de notas de"+ nombre+": "));
            

              while (notas!=0){
                System.out.println("Ingresa tus calificaciones");
                  float calificaciones = Float.parseFloat(console.readLine());
                  miArray.add(calificaciones);
                  notas --;
              }
            }    
            alumnos --;
            System.out.println(miArray);
        System.out.println(miArrayNombre);
        }
    }

