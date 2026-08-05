// Register User
const registerUser = (req, res) => {

    console.log(req.body);

    res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user: req.body
    });

};

// Get User by ID
const getUser = (req, res) => {

    const id = req.params.id;

    res.json({
        success: true,
        message: "User Found",
        userId: id
    });

};

// Search User
const searchUser = (req, res) => {

    const name = req.query.name;

    res.json({
        success: true,
        message: "Search Completed",
        searchedName: name
    });

};

module.exports = {
    registerUser,
    getUser,
    searchUser
};