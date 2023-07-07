using hospitalbigbang.Data;
using hospitalbigbang.Models;
using hospitalbigbang.Repository.Interface;
using System.Diagnostics;

namespace hospitalbigbang.Repository.Services
{
    public class UserRepo : IBaseRepo<string, User>
    {
        private readonly hospitalContext _context;

        public UserRepo(hospitalContext context)
        {
            _context = context;
        }
        public User Add(User item)
        {
            try
            {
                _context.Users.Add(item);
                _context.SaveChanges();
                return item;
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                Debug.WriteLine(item);
            }
            return null;
        }
        public User Get(string key)
        {
            var user = _context.Users.FirstOrDefault(u => u.email == key);
            return user;
        }
    }
}
