using System.Threading.Tasks;

public interface IAuthRepository
{
    Task <Users> Register (Users users, string password);
    Task <Users> Login (string username, string password);
    Task <bool>  userExist (string username);
}