const db = require('../config/firebaseConfig');
const User = require('../models/userModel');

class UserController {
    static async createUser(req, res) {
        try {
            console.log('Request Body:', req.body);

            const { firstName, lastName, email, contactNumber, role , address} = req.body;

            const user = new User(firstName, lastName, email, role, contactNumber, address);

            const newUserRef = db.ref(User.collection()).push();
            // console.log(newUserRef);
            console.log(user);
            await newUserRef.set(user);

            console.log('User created with ID:', newUserRef.key);

            let userData = {
                status: "success",
                message: "User created successfully",
                data: {
                    id: newUserRef.key,
                    ...user
                }
            }
            res.status(201).json(userData);
        } catch (error) {
            console.error('Error in creating User:', error.message);
            let userData = {
                status: "failure",
                message: error.message,
            }
            res.status(500).json(userData);
        }
    }

    static async getUserById(req, res) {
        try {
            const { id } = req.params;
            const userRef = db.ref(`${User.collection()}/${id}`);

            const snapshot = await userRef.once('value');
            const userData = snapshot.val();

            if (!userData) {
                return res.status(404).json({
                    status: "failure",
                    message: "User not found"
                });
            }

            res.status(200).json({
                status: "success",
                message: "User fetched successfully",
                data: {
                    id,
                    ...userData
                }
            });
        } catch (error) {
            console.error('Error in getUserById:', error.message);
            res.status(500).json({
                status: "failure",
                message: "An error occurred while fetching the user"
            });
        }
    }

    static async getAllUsers(req, res) {
        try {
            const collectionName = User.collection();
            const usersRef = db.ref(collectionName);

            const snapshot = await usersRef.once('value');
            const usersData = snapshot.val();

            if (!usersData) {
                return res.status(404).json({
                    status: "failure",
                    message: "No users found"
                });
            }

            const users = Object.entries(usersData).map(([id, data]) => ({
                id,
                ...data
            }));

            res.status(200).json({
                status: "success",
                message: "Users fetched successfully",
                data: users
            });
        } catch (error) {
            console.error('Error in getAllUsers:', error.message);
            res.status(500).json({
                status: "failure",
                message: "An error occurred while fetching users"
            });
        }
    }
}

module.exports = UserController;