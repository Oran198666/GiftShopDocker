import express, { Request, Response, NextFunction, Router } from "express";
import { giftService } from "../services/gift-service";
import { GiftModel } from "../models/gift-model";
import { StatusCode } from "../models/enums"

class DataController {

    // Initialize the Express router
    public router: Router = express.Router();

    public constructor() {
        this.router.get("/api/audience", this.getAllAudience);
        this.router.get("/api/gifts-by-audience/:audienceId", this.getGiftsByAudience);
        this.router.post("/api/gifts", this.addGift);
    }

    // GET /api/audience
    private getAllAudience = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const audience = await giftService.getAllAudience();
            response.status(StatusCode.OK).json(audience);
        } catch (err: any) {
            next(err);
        }
    };

    // GET /api/gifts-by-audience/:audienceId
    private getGiftsByAudience = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const audienceId = +request.params.audienceId;
            const gifts = await giftService.getGiftsByAudience(audienceId);
            response.status(StatusCode.OK).json(gifts);
        } catch (err: any) {
            console.error("SQL ERROR:", err); // <--- Add this log to see the exact crash reason in terminal!
            next(err);
        }
    };

    // POST /api/gifts
    private addGift = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const gift = new GiftModel(request.body);
            const addedGift = await giftService.addGift(gift);
            response.status(StatusCode.Created).json(addedGift);
        } catch (err: any) {
            next(err);
        }
    };

}

export const dataController = new DataController();