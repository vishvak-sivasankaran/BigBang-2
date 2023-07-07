using System.ComponentModel.DataAnnotations;

namespace hospitalbigbang.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public byte[]? password { get; set; }
        public byte[]? Hashkey { get; set; }
        public string role { get; set; } = string.Empty;
        public string specialization { get; set; } = string.Empty;

    }
}
