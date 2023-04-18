import java.util.Scanner;

/**

 * Ejercicio_verde_16.java

 * Programa que muestra un menú que permite realizar las operaciones de: sumar, restar, multiplicar, dividir y terminar.

 * JABC - 20/10/14

 */

public class calculadoraMenu {

	public static void main(String[] args) {
		String tecla = null;

		Scanner scanner = new Scanner (System.in);

		do {
			System.out.println("Menu de opciones");
			System.out.println("1. Sumar dos numeros (x+y)");
			System.out.println("2. Restar dos numeros (x-y)");
			System.out.println("3. Multiplicar dos numeros (x*y)");
			System.out.println("4. Dividir dos numeros (x/y)");
			System.out.println();
			System.out.println("Ingresar opcion:");
			int opcion = scanner.nextInt();
			boolean opc = (opcion <= 5);

			if (opc) {
				System.out.println("Ingresar primer numero:");
				double x = scanner.nextInt();

				if (opcion==5) {
					System.out.println("Ingrese el porcentaje a descontar:");
					} else {
						System.out.println("Ingrese segundo numero:"); 
          }
				double y = scanner.nextInt();

				switch (opcion) {
				case 1:
					double suma = x+y;
					System.out.println("\nEl resultado es:");
					System.out.println(suma);
					break;
				case 2:
					double resta = x-y;
					System.out.println("\nEl resultado es:");
					System.out.println(resta);
					break;
				case 3:
					double multi = x*y;
					System.out.println("\nEl resultado es:");
					System.out.println(multi);
					break;
				case 4:
					if (x<y) {
						System.out.println("El valor 'x' debe ser mayor que el valor 'y'.");
				} else {
							double div = x/y;
							System.out.println("\nEl resultado es:");
							System.out.println(div); }
					break; }
				} else {
				System.out.println("Ingresa un numero del 1 al 5."); }

			System.out.print("\n¿Quiere seguir?\n");
			tecla = new Scanner(System.in).nextLine();

		} while (tecla.equals("s") || tecla.equals("S"));
	}

}