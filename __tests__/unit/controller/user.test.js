const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { register, login } = require("../../../server/controllers/user");
const User = require("../../../server/models/User");

jest.mock("bcrypt");
jest.mock("jsonwebtoken");
jest.mock("../../../server/models/User");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockEnd = jest.fn();

const mockStatus = jest.fn(() => ({
  send: mockSend,
  json: mockJson,
  end: mockEnd,
}));

const mockRes = {
  status: mockStatus,
};

describe("User Controller", () => {
  let req;
  let res;
  beforeEach(() => {
    req = {
      body: {},
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    jest.clearAllMocks();
  });
  describe("register", () => {
    it("should hash password and create user", async () => {
      req.body = {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@test.com",
        password: "plainpassword",
      };

      bcrypt.genSalt.mockResolvedValue("salt");
      bcrypt.hash.mockResolvedValue("hashedPassword");

      User.create.mockResolvedValue({
        id: 1,
        email: "jane@test.com",
      });

      await register(req, res);

      expect(bcrypt.genSalt).toHaveBeenCalled();
      expect(bcrypt.hash).toHaveBeenCalledWith("plainpassword", "salt");

      expect(User.create).toHaveBeenCalled();

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        id: 1,
        email: "jane@test.com",
      });
    });

    it("should return 500 on error", async () => {
      req.body = { password: "test" };

      bcrypt.genSalt.mockRejectedValue(new Error("bcrypt error"));

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        err: "bcrypt error",
      });
    });
  });
  describe("login", () => {
    it("should login user and return token", async () => {
      req.body = {
        email: "john@test.com",
        password: "123456",
      };

      const mockUser = {
        id: 1,
        email: "john@test.com",
        password: "hashedPassword",
        role: "student",
      };

      User.getByEmail.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue("fakeToken");

      await login(req, res);

      expect(User.getByEmail).toHaveBeenCalledWith("john@test.com");
      expect(bcrypt.compare).toHaveBeenCalledWith("123456", "hashedPassword");

      expect(jwt.sign).toHaveBeenCalledWith(
        { id: 1, role: "student" },
        process.env.SECRET_TOKEN,
        { expiresIn: "1h" },
      );

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        token: "fakeToken",
      });
    });

    it("should return 401 if user not found", async () => {
      req.body = {
        email: "notfound@test.com",
        password: "123456",
      };

      User.getByEmail.mockResolvedValue(null);

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        err: "Invalid email or password",
      });
    });

    it("should return 401 if password does not match", async () => {
      req.body = {
        email: "john@test.com",
        password: "wrongpassword",
      };

      User.getByEmail.mockResolvedValue({
        password: "hashedPassword",
        role: "student",
        id: 1,
      });

      bcrypt.compare.mockResolvedValue(false);

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        err: "Invalid email or password",
      });
    });

    it("should return 500 on error", async () => {
      req.body = {
        email: "john@test.com",
        password: "123456",
      };

      User.getByEmail.mockRejectedValue(new Error("DB error"));

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        err: "DB error",
      });
    });
  });
});
