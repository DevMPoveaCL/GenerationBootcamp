import java.io.Console;

public class numMayor {
    public static void main(String[] args) {
        // operadores lógicos en javaScript
        /*
         * y -> &&
         * o -> ||
         * negación lógica -> !
         */
        //Operadores de comparación 
        /*
         * comparaciones de numeros
         * 4>7 -> falso
         * 5<10 -> verdadero
         * 9==4 -> falso
         */
        Console console = System.console();
        int repeticion = Integer.parseInt(console.readLine("Ingresa numero de repeticiones "));
        for(int i = 0 ; i<repeticion ; i++){
            int numero1 = Integer.parseInt(console.readLine("Ingresa el numero 1 "));
            int numero2 = Integer.parseInt(console.readLine("Ingresa el número 2: "));
            if(numero1>numero2){
                System.out.println("el primer número es mayor");
            }else{
                System.out.println("el segundo número es mayor");
            }
        }
    }
}