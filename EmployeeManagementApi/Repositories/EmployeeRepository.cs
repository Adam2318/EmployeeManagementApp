using EmployeeManagementApi.Data;
using EmployeeManagementApi.Models;

namespace EmployeeManagementApi.Repositories
{
    public class EmployeeRepository(AppDbContext context) : IEmployeeRepository
    {
        private readonly AppDbContext _context = context;

        public async Task AddEmployeeAsync(Employee employee)
        {
            await _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();
        }

        public Task DeleteEmployeeAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Employee>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Employee> GetByIdAsync()
        {
            throw new NotImplementedException();
        }

        public Task UpdateEmployeeAsync(Employee employee)
        {
            throw new NotImplementedException();
        }
    }
}
