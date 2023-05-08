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
            // Создание адаптера данных и таблицы для хранения результата запроса
            SqlDataAdapter sqladapter = new SqlDataAdapter();
            DataTable table = new DataTable();
            // Формирование запроса на выборку пользователей с указанным именем и паролем
            string Query = $"SELECT iid, namee, podpis, password FROM users WHERE namee = '{namee}' AND password = '{pas}'";
            SqlCommand command = new SqlCommand(Query, BD.GetConnection());

// Выполнение запроса и сохранение результатов в таблице
            sqladapter.SelectCommand = command;
            sqladapter.Fill(table);


            if (table.Rows.Count == 1)
            {
                  // Если в таблице одна строка, то пользователь существует и вход выполнен успешно
                MessageBox.Show($"Вы зашли под именем: {namee}", "Уведомление", MessageBoxButtons.OK, MessageBoxIcon.Information);
                ClubMain Club = new ClubMain();
                this.Hide();
                Club.ShowDialog();
                this.Show();
               
            }
            else
            {
            // Если в таблице нет строк, то пользователь не найден
                MessageBox.Show($"Такого имени в БД  нет", "Уведомление", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}
