import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {StorageLibros} from '../controller/storageLibros.js'
import {validate} from 'class-validator';

const proxyUser = express();
proxyUser.use(async(req,res,next)=>{
    try {
        let data = plainToClass(StorageLibros, req.body, { excludeExtraneousValues: true });
        console.log(data)
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(JSON.stringify(err));
    }
})

export default proxyUser;