const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5172;
const uri = "mongodb+srv://game:game@cluster1.xfa43.mongodb.net/game"
mongoose.connect(uri)
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Database connection error:', err.message);

    });

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', userSchema);

app.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


app.post('/register', async(req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        console.log(newUser);
        res.status(200).json({ message: 'User registered successfully', newUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
