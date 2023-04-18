import java.io.Console;

public class Funciones {

    static void Opciones (){
        System.out.println("----------------------------");
        System.out.println("Ingrese 1 si desea sumar ");
        System.out.println("Ingrese 2 si desea restar");
        System.out.println("Ingrese 3 si desea multiplicar");
        System.out.println("Ingrese 4 si desea dividir");
        System.out.println("Ingrese 5 si desea salir");
        System.out.println("----------------------------");
    }


    static int Suma (int num1, int num2) {
        int resultado = num1 + num2;
        return resultado;
    }
    static int Resta ( int num1, int num2){
        int resultado = num1 - num2;
        return resultado;
    }
    static int Multiplicacion (int num1 , int num2){
        int resultado = num1 *num2;
        return resultado;
    }
    static String Division (float num1, float num2){
        float div = num1 / num2 ;
        if(num1 != 0 && num2 != 0){
            return "La division entre num1 y num 2 es " + div;
        }
        else{
            return "No se puede ingresar un 0";
        }

        
    }
/*     static float Division1 (float num1, float num2){
        float div = num1 / num2 ;
        if(num1 != 0 && num2 != 0){
            return  div;
        }
        else{
            return -1;
        }   
    } */
    public static void main(String[] args) {
        Console console = System.console();
        System.out.println("Bienvenido/a");
        Opciones();
        int opcion = Integer.parseInt(console.readLine());
        //Mientras opcion sea menor o igual que 5 y mayor a 0, hacer:
        do{
          Opciones();
          opcion = Integer.parseInt(console.readLine());
          }while(opcion <=0 || opcion>5);
            while(opcion>0 && opcion<=5){
              if(opcion == 1) {
                int numero1 = Integer.parseInt(console.readLine("Ingresa el primer numero: "));
                int numero2 = Integer.parseInt(console.readLine("Ingresa el segundo numero: "));
                System.out.println("El resultado de la suma es " + Suma(numero1, numero2));
                Opciones();
                opcion = Integer.parseInt(console.readLine("Vuelve a elegir una opcion: "));

            }
            //Si opcion es igual 2, realiza resta, muestra opciones, pide ingresar una opcion.
            else if(opcion == 2){
                int numero1 = Integer.parseInt(console.readLine("Ingresa el primer numero: "));
                int numero2 = Integer.parseInt(console.readLine("Ingresa el segundo numero: "));
                System.out.println("El resultado de la resta es " +Resta(numero1, numero2));
                Opciones();
                opcion = Integer.parseInt(console.readLine("Vuelve a elegir una opcion: "));
            }
            //Si opcion es igual 3, realiza multiplicacion, muestra opciones, pide ingresar una opcion.
            else if(opcion == 3){
                int numero1 = Integer.parseInt(console.readLine("Ingresa el primer numero: "));
                int numero2 = Integer.parseInt(console.readLine("Ingresa el segundo numero: "));
                System.out.println("El resultado de la multiplicacion es " + Multiplicacion(numero1, numero2));
                Opciones();
                opcion = Integer.parseInt(console.readLine("Vuelve a elegir una opcion: "));
            }
            //Si opcion es igual 4, realiza division, muestra opciones, pide ingresar una opcion.
            else if(opcion == 4){
                int numero1 = Integer.parseInt(console.readLine("Ingresa el primer numero: "));
                int numero2 = Integer.parseInt(console.readLine("Ingresa el segundo numero: "));
                System.out.println("El resultado de la division es " + Division(numero1, numero2));
                Opciones();
                opcion = Integer.parseInt(console.readLine("Vuelve a elegir una opcion: "));
            }
            //Si opcion es igual 5, muestra mensaje de salida, se cierra la consola.
            else if(opcion == 5){
                System.out.println("Saliendo");
                break;

            }
            //Si opcion es distinto a todo lo anterior, muestra un mensaje para pedir una opcion valida, y vuelve a pedir opcion.
            else {
                System.out.println("Seleccione una opcion valida");
                Opciones();
                opcion = Integer.parseInt(console.readLine("Vuelve a elegir una opcion: "));
            }
            }
        
        
        
    }
}