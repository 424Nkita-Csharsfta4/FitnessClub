using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;


namespace WindowsFormsApp1
{
/// <summary>
/// Класс для работы с базой данных, использующей SQL Server
/// </summary>
    class BD
    {

        SqlConnection SQL = new SqlConnection(@"Data Source=KAB36-12-ПК\SQLEXPRESS;Initial Catalog=win;Integrated Security=True");
        /// <summary>
        /// Открывает соединение с базой данных
        /// </summary>
        public void openConnection()
        {
            if (SQL.State == System.Data.ConnectionState.Closed)
            {
                SQL.Open();
            }
        }

/// <summary>
/// Закрывает соединение с базой данных
/// </summary>
        public void closeConnection()
        {
            if (SQL.State == System.Data.ConnectionState.Open)
            {
                SQL.Close();
            }
        }
/// <summary>
/// Возвращает объект SqlConnection для работы с базой данных
/// </summary>
/// <returns>Объект SqlConnection</returns>
        public SqlConnection GetConnection()
        {
            return SQL;
        }

    }
}
