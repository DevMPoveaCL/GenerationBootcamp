import java.io.Console;

//Clase main debe ser siempre pública, estática y con retorno vacío, es decir ":void".

public class Main {
    public static void main (String [] args){
        //para mostrar en consola en JavaScript -> console.log()
        //para mostrar en consola en Java
        System.out.print("este es un mensaje en consola");
        //este imprime con salto de linea
        System.out.println("este es un mensaje en consola");
        //para pedile información al usuario de ocupa
        Console console = System.console();
        String nombre = console.readLine("Inserte nombre: ");
        System.out.println("Este es el nombre: "+ nombre);
        double altura = 1.5;
        int alt = (int) altura;
        System.out.println(alt);
        String num = console.readLine("Inserte su número: ");
        int nuevoNum = Integer.parseInt(num);
        System.out.println("El número es: "+nuevoNum);

        double numRound = 454.535;
        int roundNumber = (int)Math.round(numRound);
        System.out.println(roundNumber);


        //Variable 
        //tipos de variables en JavaScript -> boolean, number, string, array, object
        // var nombre = 1;
        //tipos de variables de Java -> boolean, int (enteros), double(16 dígitos despues de la coma) y float(7 dígitos despues de la coma)
        // String (cadena de texto, se ocupa ""), char(solo un caracter, se ocupa '')
        //array y object
        //int numero = 7;
        //String palabra = "palabra";
        // matriz -> [1,'a',"palabra",4]
        // areglos -> [1,2,5,4] -> arreglo[1] == 2
        // arreglo de arreglos -> [[1,3,2],[5,8,6],[7,9,8]]
        // diccionario -> [{id:1, nombre:"Nicolas"}, {id:2, nombre:"Kiara"}] 
        // [{dia:'lunes', compras:[2000,600,500]}, {dia:'viernes', compras:[2000,600,500]}]
        //-> diccionario[0] -> {id:1, nombre:"Nicolas"} diccionario[1]->{id:2, nombre:"Kiara"}
        //diccionario[0].nombre -> "Nicolas", diccionario[1].id->2
        
    }
}
//-----------------------------------------------------------------//

