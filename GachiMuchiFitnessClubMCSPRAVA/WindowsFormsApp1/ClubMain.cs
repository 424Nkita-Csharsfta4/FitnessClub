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
    enum RowState
    {
        Existed,
        New,
        Modified,
        ModifiedNew,
        Deleted
    }
    public partial class ClubMain : Form
    {
        BD BD = new BD();

        int SelRow;
        public ClubMain()
        {
            InitializeComponent();
        }


        private void CreateColumns()
        {
            dataGridView1.Columns.Add("id", "id");
            dataGridView1.Columns.Add("NameTrain", "Название тренировки");
            dataGridView1.Columns.Add("Trainer", "Имя тренера");
            dataGridView1.Columns.Add("TimeTrain", "Время Тренировки");
            dataGridView1.Columns.Add("price", "Цена тренировки");
            dataGridView1.Columns.Add("IsNew", String.Empty);
        }

        private void ReadSingleRow(DataGridView dgw, IDataRecord record)
        {
            dgw.Rows.Add(record.GetInt32(0), record.GetString(1), record.GetString(2), record.GetDateTime(3), record.GetInt32(4),RowState.ModifiedNew);
        }

        private void RefreshDataGrid(DataGridView dgw)
        {
            dgw.Rows.Clear();

            string zapros = $"SELECT * FROM trains";
            SqlCommand sqlcmd = new SqlCommand(zapros, BD.GetConnection());

            BD.openConnection();

            SqlDataReader rea = sqlcmd.ExecuteReader();

            while (rea.Read())
            {
                ReadSingleRow(dgw, rea);
            }
            rea.Close();
        }



        private void toolStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {

        }

        private void ClubMain_Load(object sender, EventArgs e)
        {
            CreateColumns();
            RefreshDataGrid(dataGridView1);
        }

        private void dataGridView1_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            SelRow = e.RowIndex;

            if(e.RowIndex >= 0)
            {
                DataGridViewRow row = dataGridView1.Rows[SelRow];
                textBox1.Text = row.Cells[0].Value.ToString();
                textBox2.Text = row.Cells[1].Value.ToString();
                textBox3.Text = row.Cells[2].Value.ToString();
                textBox4.Text = row.Cells[3].Value.ToString();
                textBox5.Text = row.Cells[4].Value.ToString();
            }
        }

        private void toolStripMenuItem5_Click(object sender, EventArgs e)
        {
            RefreshDataGrid(dataGridView1);
        }

        private void toolStripMenuItem1_Click(object sender, EventArgs e)
        {
            Dobavka dobavka = new Dobavka();
            this.Hide();
            dobavka.ShowDialog();
            this.Show();
        }

        private void deleteMethod()
        {
            int index = dataGridView1.CurrentCell.RowIndex;
            dataGridView1.Rows[index].Visible = false;
            if(dataGridView1.Rows[index].Cells[0].Value.ToString() == string.Empty)
            {
                dataGridView1.Rows[index].Cells[5].Value = RowState.Deleted;
                return;
            }
            dataGridView1.Rows[index].Cells[5].Value = RowState.Deleted;

        }



        private void Update()
        {
            BD.openConnection();
            for(int index = 0; index<dataGridView1.Rows.Count; index++)
            {
                var rowState = (RowState)dataGridView1.Rows[index].Cells[5].Value;

                if(rowState == RowState.Existed)
                    continue;

                if(rowState == RowState.Deleted)
                {
                    var id = Convert.ToInt32(dataGridView1.Rows[index].Cells[0].Value);
                    var delQ = $"DELETE FROM trains WHERE id = {id}";
                    var command = new SqlCommand(delQ, BD.GetConnection());
                    command.ExecuteNonQuery();
                }

                if(rowState == RowState.Modified)
                {
                    var id = dataGridView1.Rows[index].Cells[0].Value.ToString();
                    var NameTrain = dataGridView1.Rows[index].Cells[1].Value.ToString();
                    var Trainer = dataGridView1.Rows[index].Cells[2].Value.ToString();
                    var TimeTrain = dataGridView1.Rows[index].Cells[3].Value.ToString();
                    var price = dataGridView1.Rows[index].Cells[4].Value.ToString();

                    var chque = $"UPDATE trains SET NameTrain = '{NameTrain}', Trainer = '{Trainer}', TimeTrain = '{TimeTrain}', price = '{price}' WHERE id = '{id}'";

                    var cmd = new SqlCommand(chque, BD.GetConnection());
                    cmd.ExecuteNonQuery();
                }
            }
            BD.closeConnection();
        }



        private void toolStripMenuItem2_Click(object sender, EventArgs e)
        {
            deleteMethod();
        }

        private void toolStripMenuItem4_Click(object sender, EventArgs e)
        {
            Update();
        }


        private void Izmena()
        {
            var selectRowIndex = dataGridView1.CurrentCell.RowIndex;
            var id = textBox1.Text;
            var NameTrain = textBox2.Text;
            var Trainer = textBox3.Text;
            var TimeTrain = textBox4.Text;
            int price;
            if(dataGridView1.Rows[selectRowIndex].Cells[0].Value.ToString() != string.Empty)
            {
                if(int.TryParse(textBox5.Text, out price))
                {
                    dataGridView1.Rows[selectRowIndex].SetValues(id, NameTrain, Trainer, TimeTrain, price);
                    dataGridView1.Rows[selectRowIndex].Cells[5].Value = RowState.Modified;
                }
                else
                {
                    MessageBox.Show("Цена должна иметь числовой формат");
                }
            }
        }


        private void toolStripMenuItem3_Click(object sender, EventArgs e)
        {
            Izmena();
        }
    }
}
