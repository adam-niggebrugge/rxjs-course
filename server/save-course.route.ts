import {Request, Response} from 'express';
import {COURSES} from "./db-data";
import {setTimeout} from 'timers';

const CORS_HEADER = "Access-Control-Allow-Origin";
const allowed_dev_proxy = "http://localhost:4200";

export function saveCourse(req: Request, res: Response) {

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving course", id, JSON.stringify(changes));


    COURSES[id] = {
        ...COURSES[id],
        ...changes
    };

    setTimeout(() => {

        res.status(200).set(CORS_HEADER, allowed_dev_proxy).json(COURSES[id]);

    }, 2000);



}
