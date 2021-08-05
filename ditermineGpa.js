function ditectgpa(mark) {
  let gpa;
  if (mark <= 100 && mark >= 80) {
    gpa = "wow Your result is A+";
    return gpa;
  } else if (mark <= 80 && mark >= 70) {
    gpa = "wow Your result is A";
    return gpa;
  } else if (mark <= 70 && mark >= 60) {
    gpa = "our result is A-";
    return gpa;
  } else if (mark <= 60 && mark >= 50) {
    gpa = "our result is B";
    return gpa;
  } else if (mark <= 50 && mark >= 40) {
    gpa = "our result is C";
    return gpa;
  } else if (mark <= 40 && mark >= 33) {
    gpa = "Your are Passed";
    return gpa;
  } else {
    console.log("Entr correct mark");
  }
}

let rejult = ditectgpa(34);
console.log(rejult);
