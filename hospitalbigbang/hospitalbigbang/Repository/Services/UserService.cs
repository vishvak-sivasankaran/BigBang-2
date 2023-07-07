using hospitalbigbang.Models.DTO;
using hospitalbigbang.Models;
using hospitalbigbang.Repository.Interface;
using System.Security.Cryptography;
using System.Text;

namespace hospitalbigbang.Repository.Services
{
    public class UserService
    {
        private IBaseRepo<string, User> _repo;
        private ITokenGenerate _tokenService;

        public UserService(IBaseRepo<string, User> repo, ITokenGenerate tokenGenerate)
        {
            _repo = repo;
            _tokenService = tokenGenerate;
        }
        public UserDTO Login(UserDTO userDTO)
        {
            UserDTO user = null;
            var userData = _repo.Get(userDTO.email);
            if (userData != null)
            {
                var hmac = new HMACSHA512(userData.Hashkey);
                var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.password));
                for (int i = 0; i < userPass.Length; i++)
                {
                    if (userPass[i] != userData.password[i])
                        return null;
                }
                user = new UserDTO();
                user.email = userData.email;
                user.role = userData.role;
                user.token = _tokenService.GenerateToken(user);
            }
            return user;
        }
        public UserDTO Register(UserRegisterDTO userDTO)
        {
            UserDTO user = null;
            var hmac = new HMACSHA512();
            userDTO.password = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.PasswordClear));
            userDTO.Hashkey = hmac.Key;
            var resultUser = _repo.Add(userDTO);
            if (resultUser != null)
            {
                user = new UserDTO();
                user.name = resultUser.name;
                user.email = resultUser.email;
                user.role = resultUser.role;
                user.token = _tokenService.GenerateToken(user);
            }
            return user;
        }
    }
}
