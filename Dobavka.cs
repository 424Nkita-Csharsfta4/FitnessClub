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
        BD BD = new BD();
        public Dobavka()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            BD.openConnection();

            var NameTrain = textBox1.Text;
            var Trainer = textBox2.Text;
            var TimeTrain = dateTimePicker1.Value.ToString();
            int price;

            if(int.TryParse(textBox4.Text, out price))
            {
                var dobqur = $"INSERT INTO trains (NameTrain,Trainer,TimeTrain,price) VALUES ('{NameTrain}', '{Trainer}', '{TimeTrain}', '{price}')";
                var cmd = new SqlCommand(dobqur, BD.GetConnection());
                cmd.ExecuteNonQuery();

                MessageBox.Show("Вы записались на тренировку", "Успехх", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }

            else
            {
                MessageBox.Show("Вы не оплатили тренировку ", "Не Успехх", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }

            BD.closeConnection();
        }
    }
}
