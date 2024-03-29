import express from "express";
import {getAllTrainers, createTrainer, getTrainerById, updateTrainer, deleteTrainer, deleteAllTrainers} from "./src/trainers.js"
import { createPath } from "./utils.js";


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";


const app = express();
app.use(express.json());


const STATIC_ROUTE = createPath("public", "index.html")
app.use('/home', express.static(STATIC_ROUTE))


//1. Get all trainers
app.get("/trainers", async (req,res) => {
    try {
        const trainers = await getAllTrainers();

        return res.json(trainers);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
})


//Bonus: get currently teaching !!NOT WORKING
app.get("/trainers/teaching", async (filters) => {
    try {
        const trainers = await getAllTrainers();

        if (filters?.isCurrentlyTeaching) {
            trainers = trainers.filteer(trainer => {
                if (filters.isCurrentlyTeaching === "true") trainer.isCurrentlyTeaching;
                if (filters.isCurrentlyTeaching === "false") !trainer.isCurrentlyTeaching;
            })
        }

        return res.json(trainers);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
})


//2. Create new trainer
app.post("/trainers", async (req, res) => {
    try {
        const { firstName, lastName, email, timeEmployed, coursesFinished } = req.body;

        if (!firstName || !lastName || !email || !timeEmployed || !coursesFinished) throw new Error("Invalid data");

        const newTrainer = await createTrainer(firstName, lastName, email, timeEmployed, coursesFinished);

        return res.status(201).json(newTrainer);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: error.message});
    }
})



//3. get trainer by id
app.get("/trainers/:id", async (req, res) => {
    try {
        const trainerId = req.params.id;
        const foundTrainer = await getTrainerById(trainerId);

        return res.json(foundTrainer);
    } catch (error) {
        return res.status(404).json({ msg: error.message});
    }
});


//4. Update trainer
app.patch("/trainers/:id", async (req, res) => {
    try {
        const trainerId = req.params.id;
        const updateData = req.body;

        if (updateData.id) throw new Error("Invalid data");

        await updateTrainer(trainerId, updateData);

        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ msg:error.message });
    }
})



//5. Delete all trainers
app.delete("/trainers/all", async (req, res) => {
    try {
        await deleteAllTrainers();
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});



//6. Delete single trainer
app.delete("trainers/:id", async (req, res) => {
    try {
        const trainerId = req.params.id;

        await deleteTrainer(trainerId);

        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ msg: error.message });
    }
});


app.listen(PORT, HOST, () => {
    console.log(`Server is up at port ${PORT}`);
});