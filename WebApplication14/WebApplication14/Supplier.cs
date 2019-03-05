using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace WebApplication14
{
    public class Supplier
    {
        public int SupplierID { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }


        public Supplier()
        {

        }

        public Supplier(SqlDataReader dr)
        {
            SupplierID = dr.GetInt32(0);
            CompanyName = dr.GetString(1);
            ContactName = dr.GetString(2);
            ContactTitle = dr.GetString(3);
            Address = dr.GetStringOrNull(4);
            City = dr.GetStringOrNull(5);
            Region = dr.GetStringOrNull(6);
            PostalCode = dr.GetStringOrNull(7);
            Country = dr.GetStringOrNull(8);
            Phone = dr.GetStringOrNull(9);
            Fax = dr.GetStringOrNull(10);
        }
    }
}
