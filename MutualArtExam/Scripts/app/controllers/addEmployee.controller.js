(function () {
    angular.module('mutart')
    .controller('AddEmployee', ['employeeService', function (employeeService) {
        var self = this;

        self.employee = {};

        //
        self.addEmployee = function () {
            //TODO: copy self.employee

            employeeService.addEmployee(self.employee);
        }
    }])
}())