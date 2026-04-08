const Bug = require("../models/Bug");

exports.createBug = async (req, res) => {
try {
const bug = new Bug(req.body);
await bug.save();
res.json(bug);
} catch (error) {
res.status(500).json(error);
}
};

exports.getBugs = async (req, res) => {
try {
const bugs = await Bug.find();
res.json(bugs);
} catch (error) {
res.status(500).json(error);
}
};

exports.updateBug = async (req, res) => {
try {
const bug = await Bug.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true }
);
res.json(bug);
} catch (error) {
res.status(500).json(error);
}
};