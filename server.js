const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "a9F#2kL!7QxP@eZ4M$rW8N1C",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true
    }
  })
);

const users = [];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    username,
    password: hashedPassword
  });

  res.json({ message: "Registration successful" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  req.session.user = { username: user.username };

  res.json({ message: "Login successful" });
});

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

app.get("/dashboard", isAuthenticated, (req, res) => {
  res.json({
   message: "Welcome to protected route",
    user: req.session.user
  });
});

app.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Logout successful" });
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
