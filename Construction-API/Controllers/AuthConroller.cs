using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Construction_API.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;


namespace Construction_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase{
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }

        [HttpPost ("register")]
        public async Task <IActionResult> Register (UserForRegisterDto regDto)
        {
            regDto.Username = regDto.Username.ToLower();

           if(await _repo.userExist(regDto.Username))
            return BadRequest ("Exist");

            var UserToCreate = new Users{
                username = regDto.Username
            };

            var CreatedUser = await _repo.Register(UserToCreate, regDto.password);
            return StatusCode (201);
        }

        [HttpPost ("login")]

        public async Task <IActionResult> Login (UserForLoginDto loginDto){
           var userFromRepo = await _repo.Login(loginDto.username, loginDto.password);
            if(userFromRepo == null)
            return Unauthorized();

            var claims = new []
            {
                    new Claim(ClaimTypes.NameIdentifier, userFromRepo.id.ToString()),
                    new Claim(ClaimTypes.Name, userFromRepo.username)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));


            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

           var tokenDescriptor = new SecurityTokenDescriptor{
        Subject = new ClaimsIdentity(claims),
          Expires= DateTime.Now.AddDays(1),
             SigningCredentials = creds
             };
             var tokenHandler = new JwtSecurityTokenHandler();

             var token = tokenHandler.CreateToken(tokenDescriptor);
            return Ok(new {
                token = tokenHandler.WriteToken(token)
         });
        }
    }
    }