using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;


namespace WindowsFormsApp1
{
    class BD
    {

        SqlConnection SQL = new SqlConnection(@"Data Source=DESKTOP-081C48G;Initial Catalog=win;Integrated Security=True");
        public void openConnection()
        {
            if (SQL.State == System.Data.ConnectionState.Closed)
            {
                SQL.Open();
            }
        }

        public void closeConnection()
        {
            if (SQL.State == System.Data.ConnectionState.Open)
            {
                SQL.Close();
            }
        }

        public SqlConnection GetConnection()
        {
            return SQL;
        }

    }
}
