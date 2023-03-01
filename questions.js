const MainMenuQuestions =[
    {
        type:'list',
        name:'option',
        message:'What do you need to do?',
        choices:[
        {value:'view_departments',name:"view all departments"},
        {value:'view_roles',name:"view all roles"},
        {value:'view_employees',name:"view all employees"},
        {value:'add_department',name:"add a department"},
        {value:'add_role',name:"add a role"},
        {value:'add_employee',name:"add an employee"},
        {value:'update_role',name:"update an employee role"},   
        ],
    },
]

const AddDepartmentQuestions = [
    {
        type:'input',
        name:'department_name',
        message:'Enter the name of new dept'
    },
]

const AddRoleQuestions = [
    {
        type:'input',
        name:'title',
        message:'Enter the tiltle of new role to be added to be added'
    },
    {
        type:'number',
        name:'salary',
        message:'Enter the salary of new role to be added to',
        validate: function(value){
            const valid = !isNaN(parseInt(value));
            return valid||"enter a numeric value";
        }
    },
    {
        type:'list',
        name:'department_id',
        message:'Select a department for role ',
        choices:[
    
        ],
    },

]

const AddEmployeeQuestions=[
     {
        type:'input',
        name:'first_name',
        message:'Enter the first name of the employee'
    },
    {
        type:'input',
        name:'last_name',
        message:'Enter the last name of the employee'
    },
    {
        type:'list',
        name:'role_id',
        message:'Select a role for the employee',
        choices:[
    
        ],
    },
    {
        type:'list',
        name:'manager_id',
        message:'Select the employee manager ',
        choices:[
    
        ],
    },
]  

const UpdateEmployeeQuestions =[
    {
        type:'list',
        name:'employee_id',
        message:'Select the employee to update',
        choices:[
    
        ],
    },
    {
        type:'list',
        name:'role_id',
        message:'Select the employee new role',
        choices:[
    
        ],
    },
]

module.exports = {UpdateEmployeeQuestions,MainMenuQuestions,AddDepartmentQuestions,AddEmployeeQuestions,AddRoleQuestions}