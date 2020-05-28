using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace invesmentCalc
{
    static class Program
    {

        static void Main()
        {
            // Investment Calc!

            Console.WriteLine("Welcome to the Investment Calc!");
            Console.WriteLine("Please note that entering decimals is a work in progress, so please round up and enter whole numbers only!");
            Console.WriteLine("Please enter the amount of money you want to deposit..");
            int investmentAmount = Convert.ToInt16(Console.ReadLine());
            double interestRate = 0.04;
            Console.WriteLine("Your interest rate will be %0.04 percent");
            Console.WriteLine("Please enter the amount of money you will deposit per term. Your investment term will last for 10 years....");
            int additionalAmountEachTerm = Convert.ToInt32(Console.ReadLine());
            int investmentTermInYears = 10;
            int firstTermInterestEarned = Convert.ToInt32(investmentAmount * interestRate);
            int secondTermInterestEarned = Convert.ToInt32(investmentAmount + firstTermInterestEarned + additionalAmountEachTerm * interestRate);

            int totalInterestEarned = firstTermInterestEarned + secondTermInterestEarned;
            decimal totalInAccount = investmentAmount + totalInterestEarned + additionalAmountEachTerm;
            //DO STUFF
            Console.WriteLine("Doing calculations,Please press enter to receive summary.");
            Console.ReadLine();
            Console.WriteLine("You earn a total of " + totalInterestEarned + " Interest over " + investmentTermInYears + " years,you now have a total of $" + totalInAccount + " dollars good for you!");

        }
    }
}
