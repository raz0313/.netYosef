using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication11.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {
        private static Dictionary<string, string> users = new Dictionary<string, string>();

        [HttpGet("login")]
        public bool login (string userName , string password) {
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
                return false;
            if (users.ContainsKey(userName))
            {
                string passwordExist = users[userName];
                return passwordExist == password;

            }
            return false;

        }
        [HttpGet("singup")]
        public bool singup(string userName, string password) {
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
                return false;

            if (users.ContainsKey(userName))
                return false;

            users[userName] = password;
            return true;
                
        }
    }
}