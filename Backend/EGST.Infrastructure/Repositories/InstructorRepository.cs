using AutoMapper;
using EGST.Application.Dto.Instructor;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using EGST.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace EGST.Infrastructure.Repositories
{
    public class InstructorRepository : IInstructorRepository
    {
        private readonly EGSTDbContext _dbcontext;
        private readonly IMapper _mapper;
        public InstructorRepository(EGSTDbContext dbContext, IMapper mapper)
        {
            _dbcontext = dbContext;
            _mapper = mapper;
        }
        public async Task<Instructor> Create(CreateInstructorDto dto)
        {
            try
            {
                var instructor = _mapper.Map<Instructor>(dto);
                await _dbcontext.Instructors.AddAsync(instructor);
                await _dbcontext.SaveChangesAsync();
                return instructor;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }



        }

        public async Task<string> Delete(Guid id)
        {
            try
            {
                var tobeDeleted = await _dbcontext.Instructors.FindAsync(id);
                tobeDeleted.IsDeleted = true;
                _dbcontext.Update(tobeDeleted);
                await _dbcontext.SaveChangesAsync();
                return "Deleted Successfully";
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }

        }

        public async Task<IEnumerable<Instructor>> GetAll()
        {
            var instructors = await _dbcontext.Instructors.Where(i => i.IsDeleted == false).ToListAsync();
            return instructors;
        }

        public async Task<Instructor> Update(UpdateInstructorDto dto)
        {
            try
            {
                var toupdate = await _dbcontext.Instructors.FindAsync(dto.Id);
                toupdate = _mapper.Map(dto, toupdate);
                //  _dbcontext.Update(toupdate);
                await _dbcontext.SaveChangesAsync();
                return toupdate;
            }
            catch (Exception ex)
            {

                throw new Exception(ex.ToString());
            }
        }
    }
}
