using hospitalbigbang.Models.DTO;

namespace hospitalbigbang.Repository.Interface
{
    public interface ITokenGenerate
    {
        public string GenerateToken(UserDTO user);
    }
}
