using hospitalbigbang.Data;
using hospitalbigbang.Models;
using hospitalbigbang.Repository.Interface;

namespace hospitalbigbang.Repository.Services
{
    public class UsersService:IUser
    {
        private readonly hospitalContext _context;
        public UsersService(hospitalContext context)
        {
            _context = context; 
        }
       
        //Filtering doctors
        public IEnumerable<User> FilterDoctors()
        {
            List<User> users = _context.Users.Where(x => x.role == "Doctor").ToList();
            return users;

        }
    }
}
