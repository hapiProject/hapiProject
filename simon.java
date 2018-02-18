import java.util.Scanner;
public class simon {
    public static void main (String[] args) {
        
        Scanner userScan = new Scanner(System.in);
        int numTestCase = userScan.nextInt();userScan.nextLine();

        for(int i = 0; i < numTestCase; i++) {
            
             String[] command = userScan.nextLine().split(" ");

             if(command.length == 1) {
                 System.out.println();

             } 
             else {
                if(command[0].equals("simon") && command[1].equals("says")) {
                
                    for(int j = 2; j < command.length;j++){
                        System.out.print(command[j] + " ");
                        
                    }
                    System.out.println();
    
                 }else {
                     System.out.println();
                 }

             }

              

        }

        userScan.close();
    }       
}
