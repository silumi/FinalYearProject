using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

public class AuthRepository : IAuthRepository{
    private readonly DataContext _context;

    public AuthRepository(DataContext context){
        
       _context = context;
    }

    public async Task<Users> Login(string username, string password)
    {
       var user = await _context.user.FirstOrDefaultAsync(x => x.username == username);
       if(user==null) return null;
        if(!VerifiedPasswordHash(password, user.passwordHash, user.passwordSalt))
        return null;
        return user;
       
       
    }
     private bool VerifiedPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
    {
       using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
       {
           var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
           for(int i = 0; i<computedHash.Length;i++){
               if(computedHash[i] != passwordHash[i])
               return false;
           }
       }
       return true;
    }

    

    public async Task<Users> Register(Users users, string password)
    {
        byte[] passwordHash, passwordSalt;
       createPasswordHash(password, out passwordHash, out passwordSalt);
       users.passwordHash = passwordHash;
       users.passwordSalt = passwordSalt;
       await _context.user.AddAsync(users);
       await _context.SaveChangesAsync();
       return users;

       
    }
    private void createPasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
       using (var hmac= new System.Security.Cryptography.HMACSHA512())
       {
           passwordSalt = hmac.Key;
           passwordHash =hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
       }
    }

    public async Task<bool> userExist(string username)
    {
       if (await _context.user.AnyAsync(x => x.username == username))
       return true;
       return false; 
    }

    // Task<Users> IAuthRepository.Register(Users users, string password)
    // {
    //     throw new System.NotImplementedException();
    // }

    // Task<Users> IAuthRepository.Login(string username, string password)
    // {
    //     throw new System.NotImplementedException();
    // }

    // Task<bool> IAuthRepository.userExist(string username)
    // {
    //     throw new System.NotImplementedException();
    // }
}