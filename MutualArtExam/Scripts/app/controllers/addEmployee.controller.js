(function () {
    angular.module('mutart')
    .controller('AddEmployee', ['employeeService', function (employeeService) {
        var self = this;

        self.employee = {};


        //
        self.addEmployee = function (form) {
            //TODO: copy self.employee

            fixVals();

            var copy = angular.copy(self.employee);
            employeeService.addEmployee(copy);

            // reset
            reset(form);
        }

        var fixVals = function () {
            self.employee.WorkHours = self.employee.WorkHours.toFixed(2);
        }

        var reset = function (form) {
            self.employee = {};
            form.$setPristine();
            form.$setUntouched();
        }
    
    }])
}())