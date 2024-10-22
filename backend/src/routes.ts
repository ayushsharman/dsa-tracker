import { Application } from "express";

export const routes = (app: Application) => {

    //Server Check
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
}