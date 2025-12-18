# Express Session Authentication API

A simple **Node.js** and **Express.js** project demonstrating **session-based authentication** using `express-session`. It includes user registration, login, logout, and protected routes.

---

## 🚀 Features

* User registration
* User login
* User logout
* Session management with `express-session`
* Protected routes using middleware
* In-memory user storage (for learning purposes)

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* express-session
* bcryptjs
* cookie-parser

---

## 📂 Project Structure

```bash
express-session-auth/
├── server.js
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

```bash
git clone https://github.com/USERNAME/express-session-auth.git
cd express-session-auth
npm install
```

---

## ▶️ Run the Project

This project runs directly with Node.js:

```bash
node server.js
```

The server will start on:

```
http://localhost:3000
```

---

## 🔐 API Endpoints

### Register

```http
POST /register
```

**Request Body:**

```json
{
  "username": "hamza",
  "password": "123456"
}
```

---

### Login

```http
POST /login
```

**Request Body:**

```json
{
  "username": "hamza",
  "password": "123456"
}
```

---

### Logout

```http
POST /logout
```

---

### Protected Route

```http
GET /dashboard
```

🔒 Requires an active session (authenticated user)

---

## 🧠 How It Works

* Passwords are hashed using **bcryptjs**
* On login, a session is created and stored on the server
* The session keeps the authenticated user data
* Protected routes check for an existing session
* On logout, the session is destroyed and the cookie is cleared

---

## ⚠️ Notes

* This project is for **learning purposes only**
* User data is stored in memory (will reset on server restart)
* Not recommended for production use

---

## 🚀 Possible Improvements

* Add a database (MongoDB / MySQL)
* Add session store (Redis / MongoDB)
* Implement JWT authentication
* Add user roles and permissions

---

## 👨‍💻 Author

**Hamza Channouf**
Junior Full‑Stack Developer (MERN)

---

⭐ If you find this project helpful, don’t forget to give it a star on GitHub!
