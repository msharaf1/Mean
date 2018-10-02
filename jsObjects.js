function PrintStudents(){
    let students = [
        {name: 'Remy', cohort: 'Jan'},
        {name: 'Genevieve', cohort: 'March'},
        {name: 'Chuck', cohort: 'Jan'},
        {name: 'Osmund', cohort: 'June'},
        {name: 'Nikki', cohort: 'June'},
        {name: 'Boris', cohort: 'June'}
    ];

    for(let i = 0; i < students.length; i++){
        // console.log(students[i].name);
        // console.log(students[i].cohort);
        console.log("Name: " + students[i].name +"  "+ students[i].cohort +"Cohor: ");
    }

}

// PrintStudents();

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function PrintEmptAndManagersA(users){
    for(user in users){
        console.log(user.toUpperCase());
        for(let i =0; i < users[user].length; i++){
            console.log(users[user][i].first_name +", "+ users[user][i].last_name);

        }

    }
    // console.log(users);

}

PrintEmptAndManagersA(users);