using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace invesmentCalc
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            double investmentAccount = double.Parse(textBox1.Text);

            string textbox1;
           Console.WriteLine("You want to put " + investmentAmount + " towards investment. Your interest rate is %0.04".);
            double interestRate = 0.04;
            double additionalAmountEachTerm = double.Parse(textBox2.Text);

            int investmentTermInYears = 10;
            int firstTermInterestEarned = investmentAmount * interestRate;
            int secondTermInterestEarned = (investmentAmount + firstTermInterestEarned + additionalAmountEachTerm) * interestRate;

           decimal totalInterestEarned = firstTermInterestEarned + secondTermInterestEarned;
            decimal totalInAccount = investmentAmount + totalInterestEarned + additionalAmountEachTerm;
           //DO STUFF
            Console.WriteLine("Your total interest earned is " + totalInterestEarned + " over " + investmentTermInYears + " years,you now have " + totalInAccount + " dollars good for you!");
            Console.ReadLine();

        }

    }
}
