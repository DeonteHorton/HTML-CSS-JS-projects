using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            //PTO V1
            //paychecks is paychecks per year

            // let paychecksPerYear = 26;
            // let hoursPerCheck = 3;
            // let PTOperYear = paychecksPerYear * hoursPerCheck;
            // console.log('you earn this many days per year to take a vacay:', PTOperYear/8);\


            /*
            //PTO V2
             int paychecksPerYear = 26;
             int hoursPerCheck  = 5 ;
             int PTOperYearInHours = paychecksPerYear * hoursPerCheck;
             // debugger;
             int totalWeeksPerYear = PTOperYearInHours/40;
             Console.WriteLine(totalWeeksPerYear);
             */



            //PTO V3
            //PTO= Hours paid time off
            //#Checks (52,24,12,26)
            //checks* PTO = PTO/Year
            //Ex: 3* 24 = 72 hours of PTO/year
            //can be off for 72 hours because you have 8 work hours
            // 72/8= 9 days   will tell how many days you can take off
            // 72/40= 1.8 weeks   will tell how many weeks you have off
            /*
            int hoursPerCheck = 6;
            // the amount of hours work per check
            int weekThisYear = 9 * 4;
            int PTOtoDate = hoursPerCheck * (weekThisYear / 2);
            int PTOtakenToDate = 32;
            //PTOtakenToDate is the hours accumulated
            int remainderPTOToDate = PTOtoDate - PTOtakenToDate;
            Console.WriteLine("You have " + remainderPTOToDate / 40 + " week(s) of paid time off! Congrats!!");
            //40 hours in a work week
            Console.ReadLine();
            */


            Console.WriteLine("Please enter the amount of hours you work per check   (3, 5, 6) ");
            int hoursPerCheck = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter the amount of checks you get in a year (52, 24, 12, 26) ");
            int weekThisYear = Convert.ToInt32(Console.ReadLine());

            int PTOtoDate = hoursPerCheck * weekThisYear;

            Console.WriteLine("Accumulating PTO for in days and weeks, press enter to continue....");
            int PTOinDays = PTOtoDate / 8;
            float PTOinWeeks = PTOtoDate / 40f;

            Console.ReadLine();
            Console.WriteLine("You have " + PTOinDays + " days worth of PTO.In weeks, you have " + PTOinWeeks + " week(s) worth of PTO.... Congrats!!");
            //40 hours in a work week
            Console.ReadLine();
        }
    }
}
