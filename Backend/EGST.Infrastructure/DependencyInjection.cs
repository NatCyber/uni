using EGST.Application.Interfaces;
using EGST.Infrastructure.Context;
using EGST.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace EGST.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure ( this IServiceCollection services, IConfiguration configuration )
        {
            var deafultConnetionString = configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<EGSTDbContext>(options => options.UseSqlServer(deafultConnetionString));

            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ICourseRepository, CourseRepository>();
            services.AddScoped<IProgramRepository, ProgramsRepository>();
            services.AddScoped<IModuleRepository, ModuleRepository>();
            services.AddScoped<IStudentsRepository, StudentsRepository>();
            services.AddScoped<ICourseOfferingRepository, CourseOfferingRepository>();
            services.AddScoped<IBatchRepository, BatchRepository>();
            services.AddScoped<IConcentrationRepository, ConcentrationRepository>();
            services.AddScoped<IInstructorRepository, InstructorRepository>();

            return services;
        }
    }
}
