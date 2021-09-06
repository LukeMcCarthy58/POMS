using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string StaffRealName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage = "Password must be at least 6 characters and contain an uppercase and lowervase letter, as well as a number.")]
        public string Password { get; set; }
        [Required]
        public string UserName { get; set; }
    }
}