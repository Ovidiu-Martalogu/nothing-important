console.log(`loading program....`);
/*
let students = [];

function getUserInfo() {
    const name = prompt(`Insert your name`);
    let age = prompt(`Insert your age`);
    age = Number(age);
    const attendance = confirm(`Are you present?`);

    return {
        name: name,
        age: age,
        attendance: attendance
    }
}
console.log(getUserInfo());
// colect data for multiple students

function addMultipleStudents() {
    let addMore = true;
    while (addMore) {
        const student = getUserInfo();
        addMore = confirm(`Add another student?`);
        students.push(student);

    }
} addMultipleStudents();
console.log(students);
*/
let students = [{
    name: "Ali",
    age: 30,
    attendance: true,
},
{
    name: "dan",
    age: 29,
    attendance: true,
},
{
    name: "Sandu",
    age: 19,
    attendance: false,
},
{
    name: "Alina",
    age: 45,
    attendance: true,
},
{
    name: "Sergiu",
    age: 26,
    attendance: true,
},
{
    name: "Eduard",
    age: 21,
    attendance: false,
},
{
    name: "Seby",
    age: 31,
    attendance: false,
},
{
    name: "Sandy",
    age: 22,
    attendance: true,
},
{
    name: "Aurel",
    age: 23,
    attendance: true,
},
{
    name: "Ion",
    age: 18,
    attendance: true,
},
{
    name: "Lara",
    age: 33,
    attendance: true,
},
{
    name: "Aura",
    age: 21,
    attendance: true,
},
{
    name: "Gina",
    age: 22,
    attendance: true,
},
{
    name: "Dana",
    age: 21,
    attendance: true,
},
{
    name: "Nicu",
    age: 22,
    attendance: true,
}

];


//function create percentage

function showAttendancePercentage() {
    let presentStudents = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].attendance == true) {
            presentStudents++;
        }
        // const presentStudentShow = presentStudent/students.length*100;
        // console.log(`present student are ${presentStudentShow} %`);
    } console.log(presentStudents);

    const percentageAttendance = (presentStudents / students.length) * 100;

    console.log(`The attendance percentage is ${percentageAttendance}%`);
    // alert(`The attendance percentage is ${percentageAttendance}%`);


} showAttendancePercentage();

//function teams


function teams(numberOfTeams) {
    let presentStudentsArry = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].attendance == true) {
            presentStudentsArry.push(students[i].name);
            console.log(students[i].name + " este prezent");
        }
    }
    console.log(presentStudentsArry);


    // sufle yells

    for (let i = presentStudentsArry.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [presentStudentsArry[i], presentStudentsArry[randomIndex]] = [presentStudentsArry[randomIndex], presentStudentsArry[i]];

    }
    console.log(presentStudentsArry);
    //teams
    const team = [];
    for (let i = 0; i < numberOfTeams; i++) {
        team.push([i + 1]);
        console.log(`Team ${team[i]} is:${presentStudentsArry[i]}`);
    }
    //student to distribute
 for (let i = 0; i < presentStudentsArry.length; i++) {
        const teamIndex = i % numberOfTeams;
        team[teamIndex].push(presentStudentsArry[i]);
        console.log(`${team[teamIndex]}`);
    }
    console.log(team);
    

} teams(5);

