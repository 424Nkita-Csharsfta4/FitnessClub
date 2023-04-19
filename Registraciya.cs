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
    public partial class Registraciya : Form
    {
        BD BD = new BD();

        public Registraciya()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var name = textBox1.Text;
            var password = textBox2.Text;
            var podpis = textBox3.Text;
            string Query = $"INSERT INTO clients (namee,podpis,password) VALUES ('{name}', '{password}','{podpis}')";

            SqlCommand command = new SqlCommand(Query, BD.GetConnection());

            BD.openConnection();

            if (command.ExecuteNonQuery() == 1)
            {
                MessageBox.Show("Анкета заполнена верно", "Уведомление");
                Form1 vhod = new Form1();
                this.Hide();
                vhod.ShowDialog();
                this.Show();
            }
            else
            {
                MessageBox.Show("Вы допустили ошибку при заполнении", "Уведомление");
            }
            BD.closeConnection();
        }


        private Boolean check()
        {
            var name = textBox1.Text;
            var password = textBox2.Text;
            var podpis = textBox3.Text;
            SqlDataAdapter adapter = new SqlDataAdapter();
            DataTable table = new DataTable();

            string Query = $"SELECT id, namee,podpis, password FROM users WHERE namee = '{name}' AND podpis = '{podpis}' AND password = '{password}'";

            SqlCommand command = new SqlCommand(Query, BD.GetConnection());

            adapter.SelectCommand = command;
            adapter.Fill(table);

            if (table.Rows.Count > 0)
            {
                MessageBox.Show("Такая анкета существует, выберите другую", "Уведомление");
                return true;
            }
            else
            {
                return false;
            }
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            Form1 vhod = new Form1();
            this.Hide();
            vhod.ShowDialog();
            this.Show();
        }
    }
}
