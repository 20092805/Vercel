// const express = require('express');
// const app = express();

// app.use(express.json());

// const jsonData = [

//     {
//         id: 1,
//         firstname: "Behbud",
//         lastname: "Abdurashidov",
//         phonenumber: +998946941028,
//         email: "behbud@gmail.com",
//         address: "Namangan Go'zal",
//         age: 14,
//     },

//     {
//         id: 2,
//         firstname: "Abduvohid",
//         lastname: "Sharipov",
//         phonenumber: +998992440061,
//         email: "abduvohid@gmail.com",
//         address: "Namangan Parsez",
//         age: 15,
//     },

//     {
//         id: 3,
//         firstname: "Oybek",
//         lastname: "Xamidullayev",
//         phonenumber: +998941485002,
//         email: "oybek@gmail.com",
//         address: "Namangan Nurabod",
//         age: 15,
//     },

//     {
//         id: 4,
//         firstname: "Axadov",
//         lastname: "Mirshohid",
//         phonenumber: +998951202250,
//         email: "mirshohid@gmail.com",
//         address: "Namangan Dashkola",
//         age: 15,
//     },

//     {
//         id: 5,
//         firstname: "Go'zal",
//         lastname: "Sharipova",
//         phonenumber: +998910060097,
//         email: "go'zal@gmail.com",
//         address: "Namangan G'uncha",
//         age: 18,
//     },

//     {
//         id: 6,
//         firstname: "Sevinch",
//         lastname: "Shamsiddinov",
//         phonenumber: +998338848990,
//         email: "sevinch@gmail.com",
//         address: "Namangan Mikrayon",
//         age: 20,
//     },

//     {
//         id: 7,
//         firstname: "Madina",
//         lastname: "Sharipova",
//         phonenumber: +998770988998,
//         email: "madina@gmail.com",
//         address: "Namangan Parsez",
//         age: 15,
//     },

//     {
//         id: 8,
//         firstname: "Azimjon",
//         lastname: "Mamutaliyev",
//         phonenumber: +998944324454,
//         email: "azimjon@gmail.com",
//         address: "Namangan POP",
//         age: 28,
//     },

//     {
//         id: 9,
//         firstname: "Ayubxon",
//         lastname: "Sobitov",
//         phonenumber: +998333703050,
//         email: "ayubxon@gmail.com",
//         address: "Namangan Dashkola",
//         age: 15,
//     },

//     {
//         id: 10,
//         firstname: "Madina",
//         lastname: "Sharipovna",
//         phonenumber: +998770988900,
//         email: "madina@gmail.com",
//         address: "Namangan prez",
//         age: 30,
//     },
// ]


// app.get('/api/data', (req, res) => {
//     res.json(jsonData);
// })

// const filteredPeople = jsonData.filter(scr => {
//     return scr.age > 18;
// })

// const PORT = process.env.PORT || 5000
// app.listen(PORT, () => {
//     console.log(`Server in running on port ${PORT}` , filteredPeople);
// })

// ---------------------------------------------------------------------------------------------------------------

// const express = require("express");
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))

// let user = [];

// //GET So'rovi!
// app.get('/', (req, res) => {
//     res.json("Salom, Node.js")
// })

// //GET So'rovi bilan malumot olish
// app.get('/getUsers', (req, res) => {
//     res.json(user)
// })

// //POST So'rovi bilan malumot yaratish
// app.post('/postUsers', (req, res) => {
//     const newUser = req.body;
//     user.push(newUser)
//     res.json(newUser)
// })

// //Put user malumotlarni UPDATE qilish (id bo'yicha)!
// app.put("/updateUser/:id", (req, res) => {
//     const userId = req.params.id;
//     const updateUser = req.body;
//     // userni iozlash id bo'yicha
//     const userInx = user.find((i) => i.id === userId);
//     if (userInx !== -1) {
//         let result = user[userInx] = { ...user[userInx], ...updateUser }
//         res.json(user(userInx))
//     } else {
//         //Foydalanuvchi topilmagan xolatda xato qaytarish
//         res.json({ error: "User not found" })
//     }
// })

// //Delete user id bo'yicha
// app.delete("/deleteUser/:id", (req, res) => {
//     const userId = req.params.id;
//     //Foydalanuvchi obbektini izlash
//     const userInx = user.find((i) => i.id === userId);
//     if (userInx !== -1) {
//         const deleteUser = user.splice(userInx, 1)
//         res.json({masage: "User is deleted" , data: deleteUser})
//     } else {
//         res.json({error: "User not found"});
//     }
// })

// const PORT = process.env.PORT || 5000;
// //Serverni Eshitish

// app.listen(PORT, () => {
//     console.log(`Server http://localhost: ${PORT} portda ishga tushiriladi!`)
// })

// --------------------------------------------------1-------------------------------------------


// const express = require('express');
// const cors = require('cors');
// require("dotenv").config();

// // Veritabani o'rniga oddiy massivdan foydalanamiz
// let books = [];

// const app = express();
// app.use(express.json())
// app.use(cors());

// // Barcha kitoblarni olish
// app.get('/books', (req, res) => {
//     res.json(books);
// });

// // Yangi kitob qo'shish
// app.post('/postBooks', (req, res) => {
//     const { title, author } = req.body;
//     const newBook = { id: books.length + 1, title, author }; // har bir kitob uchun unikal ID
//     books.push(newBook);
//     res.status(201).send('Kitob qo\'shildi.');
// });

// // Kitobni yangilash
// app.put('/books/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const { title, author } = req.body;
//     const index = books.findIndex(book => book.id === id);
//     if (index !== -1) {
//         books[index] = { ...books[index], title, author };
//         res.send('Kitob yangilandi.');
//     } else {
//         res.status(404).send('Kitob topilmadi.');
//     }
// });

// // Kitobni o'chirish
// app.delete('/books/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     books = books.filter(book => book.id !== id);
//     res.send('Kitob o\'chirildi.');
// });

// const PORT = process.env.PORT || 5000
// app.listen(PORT, () => {
//     console.log(`Server ${PORT}-portda ishga tushdi.`);
// });

// --------------------------------------------------2------------------------------------------

const express = require("express");
const { connect } = require("mongoose")
const cors = require("cors")
require("dotenv").config();

const app = express()
app.use(express.json());

app.use(cors())

// -----Data-Base-----

async function connectToDB() {
    await connect(process.env.MONGO_URL)
        .then(() => console.log("MongoDb is conneted!"))
        .catch(() => console.log("MogoDb is not conneted!"))
}

connectToDB();

app.get("/", (req, res) => {
    res.json("Salom Node.js")
})

//-----------Routes-----------

const user = require('./routes/userRoute');
app.use('/users' , user);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} portda ishga tushdi!`);
})


// server.js










// server.js



// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// let users = [];

// app.post('/register', (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }
//   const existingUser = users.find(u => u.username === username);
//   if (existingUser) {
//     return res.status(400).json({ message: 'Username already exists' });
//   }
//   const newUser = { id: users.length + 1, username, password };
//   users.push(newUser);
//   res.status(201).json({ message: 'User registered successfully', user: newUser });
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username && u.password === password);
//   if (user) {
//     res.status(200).json({ message: 'Login successful', user });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
