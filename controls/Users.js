const User = require('../models/userSCHEMA');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// ----Search User-------
const searchUser = async (req, res) => {
    try {
        const { query } = req.query;
        const result = await User.find({
            $or: [
                { firstname: { $regex: query, $options: 'i' } },
                { lastname: { $regex: query, $options: 'i' } },
            ]
        })

        if (result.length === 0) {
            return res.json({ message: "No user found with the provided query" })
        }

        res.json({
            success: true,
            message: "Find person!",
            result
        })

    } catch (error) {
        res.json({
            success: false,
            error,
            massage: "Server error!",
        })
    }
}

// ----Get Data-------
const getData = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;


        const totalUser = await User.countDocuments()


        const AllData = await User.find({},
            "username password firstname  lastname address phone birthday"
        ).skip(skip).limit(limit)

        if (!AllData) {
            return res.json({
                success: false,
                massage: "User are not found!",
                data: AllData
            })
        }
        const modifedData = AllData.map(user => ({
            ...user._doc,

        }))

        res.json({
            success: true,
            massage: "All users",
            innerData: modifedData,
            currentPage: page,
            totalUser,
            totalPage: Math.ceil(totalUser / limit)
        })

    } catch (error) {
        res.json({
            success: false,
            error,
            massage: "Foydalanuvchini olishda xatolik yuz berdi",
            innerData: error
        })
    }
}


// ----Post Login-------
const postLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Username or password is invalid!",
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Username or password is invalid!",
            });
        }

        const token = jwt.sign({ username: user.username }, "secret");
        return res.status(200).json({
            success: true,
            message: "Sign in successful!",
            token: token
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ success: false, message: "Server error: An error occurred during the login process." });
    }
};

// ---Create User----
const createUser = async (req, res) => {
    try {
        const {
            username,
            password,
            firstname,
            lastname,
            address,
            phone,
            birthday,
        } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            res.json("Username already exists!")
        } else {
            let heshedPassword = await bcrypt.hash(password, 10)
            const newUser = new User({
                username,
                password: heshedPassword,
                firstname,
                lastname,
                address,
                phone,
                birthday,
            });
            await newUser.save();
            res.json("Registration successful!")
        }
    } catch (error) {
        console.error("Error>>", error);
        res.json({
            success: false,
            message: " Server error!"
        })
    }
}

//----Delete User---
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const deleteUser = await User.findByIdAndDelete(userId);
        if (!deleteUser) {
            return res.status(404).json({ massage: 'User not found' });
        }

        res.json({ massage: 'User deleted successfully', deleteUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ massage: 'Internal server error' });
    }
}

//----Update User---
const updateUser = async (req, res) => {
    try {
        let id = req.params._id;
        let body = req.body;
        let editUser = await User.findByIdAndUpdate(id, body);

        if (!editUser) {
            return res.json({
                success: false,
                message: "User is not updated!",
            })
        }
        res.json({
            success: true,
            message: "User is updated!",
            innerData: editUser
        })

    } catch (error) {
        res.json({ success: false, message: error, })
    }
}


module.exports = {
    createUser,
    postLogin,
    getData,
    deleteUser,
    updateUser,
    searchUser
}