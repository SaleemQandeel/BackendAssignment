# 🎬 Movie Backend API (Node.js Only)

## 📌 Overview

This project is a simple backend server for a movie browsing application built using **Node.js only (no frameworks)**.

The server reads and writes movie data from a JSON file and provides a REST API to manage movies.

---

## 🚀 How to Run the Server

1. Clone the repository:

```bash
git clone <your-repo-link>
cd <project-folder>
```

2. Run the server:

```bash
node server.js
```

3. Open in browser or Postman:

```
http://localhost:5050
```

---

## 📡 API Endpoints

### 1. Get all movies

```
GET /movies
```

---

### 2. Get movie by ID

```
GET /movies/:id
```

---

### 3. Create a new movie

```
POST /movies
```

---

### 4. Update a movie

```
PATCH /movies/:id
```

---

### 5. Delete a movie

```
DELETE /movies/:id
```

---

## 🧾 Example Request Body

### POST /movies

```json
{
  "title": "Inception",
  "year": 2010,
  "rating": 8.8,
  "description": "A mind-bending thriller"
}
```

---

### PATCH /movies/:id

```json
{
  "title": "Updated Title",
  "rating": 9
}
```

---

## ⚙️ Assumptions

* If no rating is provided, it defaults to `0`
* If no description is provided, it defaults to an empty string
* Movie ID is generated using `Date.now()`
* Year and rating must be numbers
* title is required when creating a movie
---

## ⚠️ Known Limitations

* No authentication system
* No pagination
* Search is not implemented (bonus)
* Data is stored in a JSON file (not suitable for production)
* No advanced validation (only basic checks)

---

## ✅ Completed Features

* ✔️ GET all movies
* ✔️ GET movie by ID
* ✔️ POST new movie
* ✔️ PATCH update movie
* ✔️ DELETE movie
* ✔️ JSON file read/write
* ✔️ Basic validation
* ✔️ Error handling
* ✔️ Proper status codes

---

## ❌ Not Completed

* ❌ Search functionality (bonus)
* ❌ Limit results (bonus)
* ❌ External API integration (bonus)

---

## 💪 Challenges Faced

* Handling raw HTTP requests without Express
* Parsing request body manually
* Managing file read/write correctly
* Implementing routing logic manually

---

## 🧪 Testing

The API was tested using **Postman** to ensure all endpoints work correctly.

---

## 📝 Notes

This project was built without using any external libraries or frameworks to better understand how Node.js works internally.

---
