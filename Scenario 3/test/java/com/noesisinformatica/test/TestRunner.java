import org.junit.*;

public class RunningTest {
   public static void main(String[] args) {
      RunningTest t = JUnitCore.runClasses(AppTest.class);
		
      for (Failure failure : t.getFailures()) {
         System.out.println(failure.toString());
      }
		
      System.out.println(t.wasSuccessful());
   }
} 