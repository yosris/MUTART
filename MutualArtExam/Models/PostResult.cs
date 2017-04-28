using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.ModelBinding;

namespace MutualArtExam.Models {
    public class PostResult {
        public ModelStateDictionary State { get; set; }
        public int ResultValue { get; set; }
    }
}