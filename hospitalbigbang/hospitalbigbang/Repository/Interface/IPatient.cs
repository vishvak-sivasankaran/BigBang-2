using Hospital.Models;

namespace hospitalbigbang.Repository.Interface
{
    public interface IPatient
    {
        IEnumerable<Patient> GetAllPatients();
        Patient GetPatientById(int User_Id);
        Task<List<Patient>> Addpatient(Patient user);
        Task<List<Patient>?> DeletePatientById(int id);
    }

}
