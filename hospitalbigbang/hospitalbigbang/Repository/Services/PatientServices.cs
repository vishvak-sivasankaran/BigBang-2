using Hospital.Models;
using hospitalbigbang.Data;
using hospitalbigbang.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace hospitalbigbang.Repository.Services
{
    public class PatientServices : IPatient

    {
        private readonly hospitalContext _UserContext;

        public PatientServices(hospitalContext context)
        {
            _UserContext = context;
        }
        //GetAllPatient
        public IEnumerable<Patient> GetAllPatients()
        {
            return _UserContext.Patients.ToList();
        }
        //GetPatientById
        public Patient GetPatientById(int User_Id)
        {
            return _UserContext.Patients.FirstOrDefault(x => x.AppointmentId == User_Id);
        }
        ////PostPatient
        public async Task<List<Patient>> Addpatient(Patient user)
        {
            _UserContext.Patients.Add(user);
            await _UserContext.SaveChangesAsync();

            return await _UserContext.Patients.ToListAsync();
        }

        //Delete
        public async Task<List<Patient>?> DeletePatientById(int id)
        {
            var users = await _UserContext.Patients.FindAsync(id);
            if (users is null)
            {
                return null;
            }
            _UserContext.Remove(users);
            await _UserContext.SaveChangesAsync();
            return await _UserContext.Patients.ToListAsync();
        }
    }
}
