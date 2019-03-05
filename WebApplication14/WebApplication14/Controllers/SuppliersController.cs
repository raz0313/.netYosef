using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication14.Controllers
{
    [Produces("application/json")]
    [Route("api/Suppliers")]
    public class SuppliersController : Controller
    {
        [HttpGet("get")]
        public List<Supplier> GetSuppliers()
        {
            List<Supplier> suppliers = new List<Supplier>();
            string sql = "SELECT SupplierID, CompanyName, ContactName ,ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax FROM Suppliers WHERE SupplierID >= @SupplierID";
            DB.PullFromDB(sql,
                (cmd) => cmd.Parameters.AddWithValue("@SupplierID", 0),
                (dr)=> suppliers.Add(new Supplier(dr))

                );
            return suppliers;
        }

        [HttpGet("delete")]
        public bool DeleteSupplier(int supplierID)
        {
            return DB.ExecuteCommand("DELETE FROM Suppliers WHERE SupplierID = @SupplierID",
                (cmd) => cmd.Parameters.AddWithValue("@supplierID", supplierID)) == 1;
        }
    }
}