using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MutualArtExam.Models;

namespace MutualArtExam.Controllers {
    public class EmployeeController : ApiController {

        MUTARTEntities dbContext = new MUTARTEntities();

        // GET api/<controller>
        public IEnumerable<TblEmployees> Get() {
            return dbContext.TblEmployees;
        }

        // GET api/<controller>/5
        public string Get(int id) {
            return "value";
        }

        // POST api/<controller>
        public PostResult Post(TblEmployees employee) {

            // TODO: server validation
            if (ModelState.IsValid)
            {
                // Save employee to data base
                dbContext.TblEmployees.Add(employee);
                dbContext.SaveChanges();
            }
            else {
                return new PostResult() { State = ModelState };
            }
            return new PostResult() { ResultValue = employee.Id };
        }


        // PUT api/<controller>/5
        public void Put(int id, [FromBody]TblEmployees employee) {
            var entity = dbContext.TblEmployees.Find(employee.Id);
            if (entity == null) {
                return;
            }

            dbContext.Entry(entity).CurrentValues.SetValues(employee);
            dbContext.SaveChanges();
        }

        // DELETE api/<controller>/5
        public void Delete(int id) {
            var emp = dbContext.TblEmployees.First(x => x.Id == id);

            dbContext.Entry(emp).State = EntityState.Deleted;
            dbContext.SaveChanges();
        }
    }
}