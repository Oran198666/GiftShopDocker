import { useForm } from "react-hook-form";
import "./add-gifts.css";
import { GiftsModel } from "../../../models/gift-model";
import { useEffect, useState } from "react";
import { AudienceModel } from "../../../models/audience-model";
import { productService } from "../../../services/data-service";
import { notify } from "../../../utils/notify";
import { useNavigate } from "react-router-dom";



export function AddGifts() {

    const [audience, setAudience] = useState<AudienceModel[]>([]);
    const { register, handleSubmit } = useForm<GiftsModel>();
    const navigate = useNavigate();

    useEffect(() => {
        productService.getAllAudience()
            .then(audience => setAudience(audience))
            .catch(err => notify.error(err));
    }, []);

    async function send(gift: GiftsModel) {
        try {
            await productService.addGift(gift);
            notify.success("Gift added.");
            navigate("/gifts/" + gift.audienceId);
        }
        catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="AddGift">

            <form onSubmit={handleSubmit(send)}>

                <label>Target Audience: </label>
                <select defaultValue="" {...register("audienceId", { valueAsNumber: true })}>
                    <option disabled value="">Select Audience</option>
                    {audience.map(a => <option key={a.targetAudienceCode} value={a.targetAudienceCode}>{a.type}</option>)}
                </select>

                <label>Name</label>
                <input type="text" {...register("name")} required minLength={2} maxLength={100} />

                <label>Description</label>
                <textarea {...register("description")} required minLength={10} maxLength={5000}></textarea>

                <label>Price</label>
                <input type="number" {...register("price", { valueAsNumber: true })} required min={0} max={10000} step="0.01" />                <label>Discount</label>
                <input type="number" step="0.01" {...register("discount", { valueAsNumber: true })} />

                <button>Add</button>

            </form>

        </div>
    );
}