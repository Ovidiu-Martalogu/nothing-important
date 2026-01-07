console.log(`loading program....`);

const students = [];
let addMore = true;

// 1. function get user info
function getUserInfo() {
    const name = prompt("Enter your name:");
    let age = prompt("Enter your age:");
    age = Number(age);
    const attendance = confirm("Are you present?");

    return {
        name: name,
        age: age,
        attendance: attendance
    };
}

// 2. collect data for multiple students

while (addMore) {
    const student = getUserInfo();
    students.push(student);
    addMore = confirm("Do you want to add another student?");
}
console.log(students);
console.log(students.attendance);


//3. show the attendance percentage

let presentStudents = 0;

for (let i = 0; i < students.length; i++) {
    if (students[i].attendance === true) {
        console.log(students[i].name + " este prezent");
        presentStudents++;
    }
} console.log(presentStudents);

const percentageAttendance = (presentStudents / students.length) * 100;

console.log(`The attendance percentage is ${percentageAttendance}%`);
alert(`The attendance percentage is ${percentageAttendance}%`);

//4. function createTeams

function createTeams(numberOfTeams) {
    //store only present student as array;
    const presentStudentsArray = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].attendance === true) {
            console.log(students[i].name + " este prezent");
            presentStudentsArray.push(students[i].name);
        }
    }

    // shuffle the students
    for (let i = presentStudentsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [presentStudentsArray[i], presentStudentsArray[j]] =
            [presentStudentsArray[j], presentStudentsArray[i]];
    }

    // Teams
    const teams = [];
    for (let i = 0; i < numberOfTeams; i++) {
        teams.push([]);
    }

    // distribute students
    for (let i = 0; i < presentStudentsArray.length; i++) {
        const teamIndex = i % numberOfTeams;
        teams[teamIndex].push(presentStudentsArray[i]);
    }

    // show teams
    for (let i = 0; i < teams.length; i++) {
        console.log(`TEAM: ${i + 1}`);
        for (const student of teams[i]) {
            console.log(student);
        }
    }
}createTeams(3);