using System.ComponentModel.DataAnnotations;

namespace Construction_API.Dtos{
    public class UserForRegisterDto{
   [Required]
    public string Username {get; set;}
    [Required]
    [StringLength(8, MinimumLength = 4, ErrorMessage = "Reuired length between 4 and 8")]
    public string password {get; set;}
}

}