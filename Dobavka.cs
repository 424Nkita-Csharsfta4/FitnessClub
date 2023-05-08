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
    public partial class Dobavka : Form
    {
    // Объект класса работы с базой данных
        BD BD = new BD();
        public Dobavka()
        {
            InitializeComponent();
        }
/// <summary>
/// Обработчик нажатия на кнопку добавления тренировки
/// </summary>
        private void button1_Click(object sender, EventArgs e)
        {
        // Открытие соединения с БД
            BD.openConnection();
// Название тренировки
            var NameTrain = textBox1.Text;
            // ФИО тренера
            var Trainer = textBox2.Text;
             // Время проведения тренировки
            var TimeTrain = dateTimePicker1.Value.ToString();
             // Стоимость тренировки
            int price;

// Если введенная стоимость является числом
            if(int.TryParse(textBox4.Text, out price))
            {
            // Формирование SQL-запроса на добавление тренировки в БД
                var dobqur = $"INSERT INTO trains (NameTrain,Trainer,TimeTrain,price) VALUES ('{NameTrain}', '{Trainer}', '{TimeTrain}', '{price}')";
                var cmd = new SqlCommand(dobqur, BD.GetConnection());
                // Выполнение SQL-запроса на добавление тренировки в БД
                cmd.ExecuteNonQuery();
// Вывод сообщения об успешном добавлении тренировки
                MessageBox.Show("Вы записались на тренировку", "Успехх", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
// Если введенная стоимость не является числ
            else
            {
             // Вывод сообщения об ошибке добавления тренировки
                MessageBox.Show("Вы не оплатили тренировку ", "Не Успехх", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
// Закрытие соединения с БД
            BD.closeConnection();
        }

        private void Dobavka_Load(object sender, EventArgs e)
        {

        }
    }
}
