


import {Request, Response} from 'express';
import {LESSONS} from "./db-data";
import {setTimeout} from "timers";

const CORS_HEADER = "Access-Control-Allow-Origin";
const allowed_dev_proxy = "http://localhost:4200";

export function searchLessons(req: Request, res: Response) {

    const queryParams = req.query;

    const courseId = parseInt(queryParams.courseId as string),
          filter:string = queryParams.filter as string || '',
          sortOrder = queryParams.sortOrder || 'asc',
          pageNumber = parseInt(queryParams.pageNumber as string) || 0,
          pageSize = parseInt(queryParams.pageSize as string) || 3;

    let lessons = Object.values(LESSONS).filter(lesson => lesson.courseId == courseId).sort((l1, l2) => l1.id - l2.id);

    if (filter) {
       lessons = lessons.filter(lesson => lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0); //original
    }

    if (sortOrder == "desc") {
        lessons = lessons.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
      res.status(200).set(CORS_HEADER, allowed_dev_proxy).json({payload: lessonsPage});
    },1000);


}