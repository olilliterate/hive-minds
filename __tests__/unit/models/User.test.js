const db = require("../../../server/db/connect");
const User = require("../../../server/models/User");

describe("User", () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.resetAllMocks());

  describe("getByEmail", () => {
    it("should return a user object when a user exists", async () => {
      const mockUser = {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        password: "hashedpassword",
        school: "Example School",
        year_group: "7",
        role: "student",
      };

      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [mockUser] });

      const result = await User.getByEmail("john.doe@example.com");

      expect(result).toBeInstanceOf(User);
      expect(result.email).toBe("john.doe@example.com");

      expect(db.query).toHaveBeenCalledWith(
        "SELECT * FROM user_data WHERE email = $1",
        ["john.doe@example.com"],
      );
    });

    it("should throw an error when no user is found", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });

      await expect(User.getByEmail("nonexistent@example.com")).rejects.toThrow(
        "User not found",
      );
    });
  });

  describe("create", () => {
    it("should create a new user and return the created user object", async () => {
      const newUser = {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        password: "hashedpassword",
        school: "Example School",
        yearGroup: "8",
        role: "student",
      };

      jest.spyOn(db, "query").mockResolvedValueOnce({
        rows: [
          {
            user_id: 2,
            first_name: "Jane",
            last_name: "Smith",
            email: "jane.smith@example.com",
            password: "hashedpassword",
            school: "Example School",
            year_group: "8",
            role: "student",
          },
        ],
      });

      const result = await User.create(newUser);

      expect(db.query).toHaveBeenCalledWith(
        expect.stringContaining("INSERT INTO user_data"),
        [
          newUser.firstName,
          newUser.lastName,
          newUser.email,
          newUser.password,
          newUser.school,
          newUser.yearGroup,
          newUser.role,
        ],
      );

      expect(result).toBeInstanceOf(User);
      expect(result).toHaveProperty("id", 2);
      expect(result.email).toBe("jane.smith@example.com");
    });

    it("should throw error if required fields are missing", async () => {
      const badUser = {
        firstName: "Jane",
        email: "jane@test.com",
      };

      await expect(User.create(badUser)).rejects.toThrow(
        "All fields are required",
      );
    });
  });

  describe("getStudents", () => {
    it("should return a list of students", async () => {
      const mockRows = [
        {
          user_id: 1,
          first_name: "John",
          last_name: "Doe",
          email: "john@test.com",
          password: "hashed",
          school: "Hive",
          year_group: "Year 10",
          role: "student",
        },
      ];

      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: mockRows });

      const students = await User.getStudents();

      expect(db.query).toHaveBeenCalledWith(
        "SELECT * FROM user_data WHERE role = $1",
        ["student"],
      );

      expect(students.length).toBe(1);
      expect(students[0]).toBeInstanceOf(User);
      expect(students[0].role).toBe("student");
    });

    it("should throw error when no students exist", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [] });

      await expect(User.getStudents()).rejects.toThrow("No students found");
    });
  });
  describe("User.getById", () => {
    it("should return a user when found", async () => {
      db.query.mockResolvedValue({
        rows: [
          {
            user_id: 1,
            first_name: "John",
            last_name: "Doe",
            email: "john@example.com",
            school: "ABC School",
            year_group: "10",
            role: "student",
          },
        ],
      });

      const user = await User.getById(1);

      expect(user).toBeDefined();
      expect(user.user_id).toBe(1);
      expect(user.firstName).toBe("John");
      expect(user.lastName).toBe("Doe");
    });

    it("should throw error if user not found", async () => {
      db.query.mockResolvedValue({
        rows: [],
      });

      await expect(User.getById(999)).rejects.toThrow("User not found");
    });
  });
});
