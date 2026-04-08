const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
title: String,
description: String,
priority: {
type: String,
enum: ["Critical", "Major", "Minor"],
default: "Minor"
},
status: {
type: String,
enum: ["Open", "In Progress", "Resolved"],
default: "Open"
},
assignedTo: String,
createdAt: {
type: Date,
default: Date.now
}
});

module.exports = mongoose.model("Bug", bugSchema);