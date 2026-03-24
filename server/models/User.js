const db = require("../db/connect");

class User {
  constructor(
    id,
    firstName,
    lastName,
    email,
    password,
    school,
    yearGroup,
    role,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.school = school;
    this.yearGroup = yearGroup;
    this.role = role;
  }

  static async getStudents() {
    const result = await db.query("SELECT * FROM users WHERE role = $1", [
      "student",
    ]);
    if (result.rows.length === 0) {
      throw new Error("No students found");
    }

    return result.rows.map(
      (row) =>
        new User(
          row.id,
          row.first_name,
          row.last_name,
          row.email,
          row.password,
          row.school,
          row.year_group,
          row.role,
        ),
    );
  }

  static async getByEmail(email) {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      throw new Error("User not found");
    }

    const row = result.rows[0];

    return new User(
      row.id,
      row.first_name,
      row.last_name,
      row.email,
      row.password,
      row.school,
      row.year_group,
      row.role,
    );
  }

  static async create(user) {
    const { firstName, lastName, email, password, school, yearGroup, role } =
      user;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !school ||
      !yearGroup ||
      !role
    ) {
      throw new Error("All fields are required");
    }

    const result = await db.query(
      `INSERT INTO users 
    (first_name, last_name, email, password, school, year_group, role) 
    VALUES ($1, $2, $3, $4, $5, $6, $7) 
    RETURNING *`,
      [firstName, lastName, email, password, school, yearGroup, role],
    );

    const row = result.rows[0];

    return new User(
      row.id,
      row.first_name,
      row.last_name,
      row.email,
      row.password,
      row.school,
      row.year_group,
      row.role,
    );
  }
}
module.exports = User;
