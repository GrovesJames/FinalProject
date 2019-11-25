﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProject.Models
{
    public class Username
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public Username( int id, string userName, string password)
        {
            Id = id;
            UserName = userName;
            Password = password;
        }
    }
}
