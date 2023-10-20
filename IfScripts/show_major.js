let studentName  = "Tom"; 
let studentMajor = Biology;
let departmentLocation;

switch (studentMajor) { 
    case Biology:
        departmentLocation = "Biology";
        break;
     case Computer_Science:
        departmentLocation = "Computer Science";
        break;
    case English:
        departmentLocation = "English";
        break;
    case History:
        departmentLocation = "History";
        break;
    case Marketing:
        departmentLocation = "Marketing";
        break;
    default:
        departmentLocation="unknown";
        break;
    }

console.log("Student Name:" + studentName );
console.log("Student Major:" + studentMajor );
console.log("Advising Location:" + departmentLocation );

