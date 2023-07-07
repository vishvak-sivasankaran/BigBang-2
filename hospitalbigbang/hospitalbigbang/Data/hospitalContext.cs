using Hospital.Models;
using hospitalbigbang.Models;
using Microsoft.EntityFrameworkCore;

namespace hospitalbigbang.Data
{
    public class hospitalContext : DbContext
    {
        public hospitalContext(DbContextOptions<hospitalContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Patient> Patients { get; set; }
    }
}
