(function () {
    angular.module('mutart')
    .factory('employeeService', ['$http', '$rootScope', function ($http) {

        var employees = [];

        // init
        //getEmployeeList();

        function getEmployeeList() {
            return $http.get('api/Employee')
            .then(function (result, status) {
                console.log(result);
                //employees = result.data;

                for (var i = 0; i < result.data.length; i++) {
                    employees.push(result.data[i]);
                }
            });
        }


        function addEmployee(employee) {
            $http.post('api/Employee', employee, {})
            .then(function (data, status) {
                console.log(data);

                // TODO: get new id from database
                employee.Id = 999;
                employees.push(employee);
            });
        }

        function deleteEmployee(employee, indx) {
            $http.delete('api/Employee/' + employee.Id, {})
            .then(function (result) {
                console.log(result);
                employees.splice(indx, 1);
            })  
        }

        function updateEmployee(employee) {
            $http.put('api/Employee/' + employee.Id, employee)
            .then(function (result) {
                console.log(result);
            })
        }

        return {
            addEmployee: addEmployee,
            getEmployeeList: getEmployeeList,
            employees: employees,
            deleteEmployee: deleteEmployee,
            updateEmployee: updateEmployee
        }
    }])
}())