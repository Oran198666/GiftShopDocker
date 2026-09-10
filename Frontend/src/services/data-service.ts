import axios from "axios";
import { AudienceModel } from "../models/audience-model";
import { appConfig } from "../utils/app-config";
import { GiftsModel } from "../models/gift-model";

class ProductService {

    public async getAllAudience(): Promise<AudienceModel[]> {
        const response = await axios.get<AudienceModel[]>(appConfig.audienceUrl);
        return response.data;
    }

    public async getGiftsByAudience(audienceId: number): Promise<GiftsModel[]> {
        const response = await axios.get<GiftsModel[]>(appConfig.giftsByAudienceUrl + audienceId);
        return response.data;
    }

    public async addGift(gift: GiftsModel): Promise<void> {
        const response = await axios.post<GiftsModel>(appConfig.giftUrl, gift);
        const dbGift = response.data;
        console.log(dbGift);
    }
}

export const productService = new ProductService();