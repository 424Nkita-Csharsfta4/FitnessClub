using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;



namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {

        BD BD = new BD();

        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var namee = textBox1.Text;
            var pas = textBox2.Text;
            SqlDataAdapter sqladapter = new SqlDataAdapter();
            DataTable table = new DataTable();
            string Query = $"SELECT id, namee, podpis, password FROM clients WHERE namee = '{namee}' AND password = '{pas}'";
            SqlCommand command = new SqlCommand(Query, BD.GetConnection());

            sqladapter.SelectCommand = command;
            sqladapter.Fill(table);


            if (table.Rows.Count == 1)
            {
                
                MessageBox.Show($"Вы зашли под именем: {namee}", "Уведомление", MessageBoxButtons.OK, MessageBoxIcon.Information);
                ClubMain Club = new ClubMain();
                this.Hide();
                Club.ShowDialog();
                this.Show();
               
            }
            else
            {
                MessageBox.Show($"Такого имени в БД  нет", "Уведомление", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }
    }
}
