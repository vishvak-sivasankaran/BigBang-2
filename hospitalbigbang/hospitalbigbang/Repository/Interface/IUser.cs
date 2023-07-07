using hospitalbigbang.Models;

namespace hospitalbigbang.Repository.Interface
{
    public interface IUser
    {
        IEnumerable<User> FilterDoctors();
    }
}
