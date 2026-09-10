import { OkPacketParams } from "mysql2";
import { AudienceModel } from "../models/audience-model";
import { GiftModel } from "../models/gift-model";
import { dal } from "../utils/dal";

class GiftService {

    public async getAllAudience(): Promise<AudienceModel[]> {
        // Fixed table name from "audience" to "targetaudiences"
        const sql = "SELECT * FROM targetaudiences";
        const audience = await dal.execute(sql) as AudienceModel[];
        return audience;
    }

    // gift-service.ts
    public async getGiftsByAudience(audienceId: number): Promise<GiftModel[]> {
        // Match the column name used in your table (audienceId)
        const sql = "SELECT * FROM gifts WHERE audienceId = ?";
        const gifts = await dal.execute(sql, [audienceId]) as GiftModel[];
        return gifts;
    }

    public async addGift(gift: GiftModel): Promise<GiftModel> {
        // Runs validation schema (Joi / custom validation)
        gift.validate();

        const sql = "INSERT INTO gifts(audienceId, name, description, price, discount) VALUES(?, ?, ?, ?, ?)";
        const values = [gift.audienceId, gift.name, gift.description, gift.price, gift.discount];

        const info: OkPacketParams = await dal.execute(sql, values) as OkPacketParams;
        gift.id = info.insertId!;

        return gift;
    }

}

export const giftService = new GiftService();