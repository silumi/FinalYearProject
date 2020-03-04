using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Construction_API.Helpers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Construction_API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
              IServiceCollection serviceCollection = services.AddDbContext<DataContext>(x =>
            x.UseSqlServer("server=localhost; database = Construction; Integrated Security= SSPI"));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            services.AddCors();
            services.AddScoped<IAuthRepository, AuthRepository> ();
           
        
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    
    app.UseHttpsRedirection();
  app.UseExceptionHandler(builder => {
      builder.Run(async context => {
          context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
          var error = context.Features.Get<IExceptionHandlerFeature>();
          if(error != null){
              context.Response.AddApplicationError(error.Error.Message);
              await context.Response.WriteAsync(error.Error.Message);
          }
      });
  });
    app.UseRouting();
     app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

   app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
        }}}
    

