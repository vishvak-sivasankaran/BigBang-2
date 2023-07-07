using hospitalbigbang.Models;
using hospitalbigbang.Repository.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace hospitalbigbang.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUser _user;
        public UsersController(IUser user)
        {
            _user = user;
        }
        //doctor
        [HttpGet("filteringdoctors")]
        public IEnumerable<User> FilterDoctor()
        {
            return _user.FilterDoctors();
        }
    }
}
