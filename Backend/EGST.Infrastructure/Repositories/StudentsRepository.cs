using EGST.Application.Dto.Student;
using EGST.Application.Interfaces;
using EGST.Domain.Entities;
using EGST.Domain.Enums;
using EGST.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace EGST.Infrastructure.Repositories
{
    public class StudentsRepository : IStudentsRepository
    {
        public EGSTDbContext _context;

        public StudentsRepository ( EGSTDbContext context )
        {
            _context = context;
        }

        public async Task<StudentApplication> ApproveStudent ( ApproveStudentDto Dto )
        {
            try
            {
                var studentApp = await _context.Applications.FindAsync(Dto.Id);
                if ((StudentApplictionSatus)Dto.Status == StudentApplictionSatus.Exam)
                {
                    studentApp.Status = (StudentApplictionSatus)Dto.Status;
                    studentApp.ExamDate = Dto.ExamDate;
                    _context.Update(studentApp);
                    await _context.SaveChangesAsync();
                }
                else if ((StudentApplictionSatus)Dto.Status == StudentApplictionSatus.Interview)
                {
                    studentApp.Status = (StudentApplictionSatus)Dto.Status;
                    studentApp.ExamStatus = (ExamStatus)Dto.ExamStatus;
                    studentApp.InterviewDate = Dto.InterviewDate;
                }
                else
                {
                    studentApp.Status = (StudentApplictionSatus)Dto.Status;
                    studentApp.ExamStatus = (ExamStatus)Dto.ExamStatus;
                }

                return studentApp;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }

        }

        public async Task<StudentApplication> CreateApplication ( NewApplicationDto dto )
        {

            var newapp = new StudentApplication
            {
                Id = Guid.NewGuid(),
                BigObject = dto.BigObject,
                Status = StudentApplictionSatus.Applicant,
                ApplicationDate = DateTime.Now.Date
            };
            try
            {
                var result = await _context.Applications.AddAsync(newapp);
                await _context.SaveChangesAsync();
                return newapp;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString(), ex);
            }

        }

        public async Task<IEnumerable<StudentApplication>> GetApplications ()
        {
            var applications = await _context.Applications.ToListAsync();

            return applications;
        }
    }
}
