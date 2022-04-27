class student {
  constructor(
    ID,
    name,
    date,
    gpa,
    gender,
    level,
    departement,
    Email,
    mobile,
    status
  ) {
    this.data = [
      ID,
      name,
      date,
      gpa,
      gender,
      level,
      departement,
      Email,
      mobile,
      status,
    ];
  }
}
var dummyData = [];
dummyData[0] = new student(20200, "ahmed mohamed", "10-5-2000", 4, "male", 1, "computer science", "ahmed@", "00000000", true);
dummyData[1] = new student(20200, "mohamed", "10-5-2000", 4, "male", 1, "computer science", "mohamed@", "00000000", true);
dummyData[2] = new student(20200, "sherif", "10-5-2000", 4, "male", 1, "computer science", "sherif@", "00000000", false);



