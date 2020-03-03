using System.ComponentModel.DataAnnotations;

namespace Construction_API.Dtos{
    public class UserForRegisterDto{
   [Required]
    public string Username {get; set;}
    [Required]
    [StringLength(8, MinimumLength = 4, ErrorMessage= "Please enter valid password")]
    public string password {get; set;}
}

}