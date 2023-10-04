import mongoose from "mongoose";
import { madSchema } from "../models/madModel";

const Mad = mongoose.model("Mad", madSchema);

export const addNewMad  = (req, res) => {
    let newMad = new Mad(req.body);
    newMad.save().then((mad) => {
        res.json(mad);
    }).catch((err) => {
        res.send(err);
    })
};

export const gatAllMad = (req, res) => {
    Mad.find({}).then((mad) => {
        res.json(mad);
    }).catch((err) => {
        res.send(err);
    });
}

export const gatOneMad = (req, res) => {
    Mad.findById(req.params.id).then((mad) => {
        res.json(mad);
    }).catch((err) => {
        res.send(err);
    });
}