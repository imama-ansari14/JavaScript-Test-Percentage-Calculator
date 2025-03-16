// OBTAINED MARKS PROMPT HERE... 
let mathsMarks = +prompt("Enter the Marks of your Maths Test");
let physicsMarks = +prompt("Enter the Marks of your Physics Test");
let compMarks = +prompt("Enter the Marks of your Computer Test");
let urduMarks = +prompt("Enter the Marks of your Urdu Test");
let engMarks = +prompt("Enter the Marks of your English Test");
// ONE SUBJECT TOTAL MARKS HERE...
let subTmarks=100;
// TOTAL MARKS OF ALL SUBJECTS...
let tMarks=500;
// SUB TOTAL OF OBTAINED MARKS...
let tObtMarks=mathsMarks+physicsMarks+compMarks+urduMarks+engMarks 
// PERCENTAGE FUNCTION HERE....
let mathsPer = (mathsMarks/subTmarks)*100
let physicsPer = (physicsMarks/subTmarks)*100
let compPer = (compMarks/subTmarks)*100
let urduPer = (urduMarks/subTmarks)*100
let engPer = (engMarks/subTmarks)*100
let totalPer=(tObtMarks/tMarks)*100
// GRADING OF ALL SUBJECTS 
function grade(tObtMarks) {
    if (tObtMarks >= 80) return "A+";
    else if (tObtMarks >= 70) return "A";
    else if (tObtMarks >= 60) return "B";
    else if (tObtMarks >= 50) return "C";
    else return "Fail";
}

document.write("<table> <tr><th>Subject</th> <th>Total Marks</th> <th>Marks Obtained</th><th>Grade</th><th>Percentage</th></tr>           <tr><td>Maths</td> <td>"+ subTmarks+ "</td><td>"+mathsMarks+"</td><td>"+grade(mathsMarks)+"</td><td>"+mathsPer+"</td></tr>         <tr><td> Physics</td> <td>"+subTmarks+" </td> <td>"+physicsMarks+"</td> <td>"+grade(physicsMarks)+" </td> <td>"+physicsPer+"</td></tr>   <tr><td>Computer</td> <td>"+subTmarks+"</td> <td>"+compMarks+"</td> <td>"+grade(compMarks)+" </td> <td>"+compPer+"</td></tr>      <tr><td>Urdu</td> <td>"+subTmarks+"</td> <td>"+urduMarks+"</td> <td>"+grade(urduMarks)+" </td> <td>"+urduPer+"</td></tr>                   <tr><td>English</td> <td>"+subTmarks+"</td><td>"+engMarks+"</td><td>"+grade(engMarks)+"</td><td>"+engPer+"</td></tr>    <tr><td>SubTotal</td><td>"+tMarks+"</td><td>"+tObtMarks+"</td><td>"+grade(totalPer)+"</td><td>"+totalPer+"</td></tr> </table>")