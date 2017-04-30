using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MutualArtExam {
    public class EmployeeMetadata {

        [StringLength(70)]
        [Required(ErrorMessage = "The FirstName is required")]
        public string FirstName;

        [StringLength(70)]
        [Required(ErrorMessage = "The LastName is required")]
        public string LastName;

        [StringLength(15)]
        public string Phone;

        [StringLength(50)]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email;

        [Range(0, 670, ErrorMessage = "Please enter valid decimal Number")]
        //[Required(ErrorMessage = "The WorkHours is required")]
        public decimal WorkHours;

        [Range(1, 3, ErrorMessage = "Please enter one of the floowing values: 1, 2 ,3")]
        //[RegularExpression("([1-9][0-9]*)", ErrorMessage = "Please enter valid Number (natural number)")]
        //[Required(ErrorMessage = "The WageType is required")]
        public byte WageType;

        [Range(1, 80000, ErrorMessage = "Please enter valid Number (max 80000)")]
        //[RegularExpression("([1-9][0-9]*)", ErrorMessage = "Please enter valid Number (natural number)")]
        //[Required(ErrorMessage = "The Wage is required")]
        public int Wage;

        [Range(1, byte.MaxValue, ErrorMessage = "Please enter valid Number (max 255)")]
        //[RegularExpression("([1-9][0-9]*)", ErrorMessage = "Please enter valid Number (natural number)")]
        //[Required(ErrorMessage = "The Department code is required")]
        public byte Department;
        
    }
}