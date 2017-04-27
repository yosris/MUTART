(function () {
    angular.module('mutart')
    .controller('EmployeeList', ['$scope', 'employeeService', function ($scope, employeeService) {
        var self = this;

        self.employeeList = employeeService.employees;

        //employeeService.getEmployeeList().then(function (result) {
        //    self.employeeList = result.data;
        //})

        employeeService.getEmployeeList();

        self.deleteEmployee = function (employee, indx) {
            employeeService.deleteEmployee(employee, indx);
        }

        self.updateEmployee = function (employee) {
            employeeService.updateEmployee(employee);
        }

        self.calcTotalWage = function (employee) {
            switch (employee.WageType) {
                case 1: {
                    return employee.WorkHours * employee.Wage;
                }
                case 2: {
                    return employee.Wage;
                }
                case 3: {
                    if (employee.WorkHours > 100) {
                        return employee.Wage;
                    }
                    else {
                        console.log(employee.WorkHours / 100);
                        console.log(employee.Wage * 0.75);
                        return (employee.WorkHours / 100) * (employee.Wage * 0.75)
                    }
                }

                return '';
            }
        }

    }])
}())