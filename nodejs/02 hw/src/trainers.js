import { DataService } from "./data.service.js";
import { createPath } from "../utils.js";
import { Trainer } from "./trainers.model.js";


const TRAINERS_PATH = createPath(["data", "trainers.json"]);

const saveTrainers = async trainers => {
    await DataService.saveJSONFile(TRAINERS_PATH, trainers);
};



//1. Get all trainers
export const getAllTrainers = async () => {
    const trainers = await DataService.readJSONFile(TRAINERS_PATH);
    return trainers;
}


//2. Create a new trainer
export const createTrainer = async (firstName, lastName, email, timeEmployed, coursesFinished) => {
    const trainers = await getAllTrainers();

    const newTrainer = new Trainer(firstName, lastName, email, timeEmployed, coursesFinished);
    const updatedTrainers = [...trainers, newTrainer];

    await saveTrainers(updatedTrainers);

    return newTrainer;
};


//3. Get trainer by id
export const getTrainerById = async trainerId => {
    const trainers = await getAllTrainers();

    const foundTrainer = trainers.find(trainer => trainer.id === trainerId);
    if (!foundTrainer) throw new Error("Trainer does not exist.");

    return foundTrainer;
}


//4. Update existing trainer
export const updateTrainer = async (trainerId, updateData) => {
    const trainers = await getAllTrainers();

    if (!trainers.some(trainer => trainer.id === trainerId))
    throw new Error("Can't update info! Trainer not found!");

    const updatedTrainers = trainers.map(trainer => {
        if (trainer.id === trainerId) {
            return { ...trainer, ...updateData };
        } else {
            return trainer;
        }
    });

    await saveTrainers(updatedTrainers);
}


//5. Delete existing trainer
export const deleteTrainer = async trainerId => {
    const trainers = getAllTrainers();

    const updatedTrainers = trainers.filter(trainer => trainer.id !== trainerId);

    if (updatedTrainers.length === trainers.length) throw new Error("Can' delete non-existent trainer");

    await saveTrainers(updatedTrainers);
}


//6. Delete all trainers
export const deleteAllTrainers = async () => {
    await saveTrainers([]);
}