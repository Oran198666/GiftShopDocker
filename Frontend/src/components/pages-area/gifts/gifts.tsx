import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AudienceModel } from "../../../models/audience-model";
import { GiftsModel } from "../../../models/gift-model";
import { productService } from "../../../services/data-service";
import "./gifts.css";
import { notify } from "../../../utils/notify";

export function Gifts() {
    const [audiences, setAudiences] = useState<AudienceModel[]>([]);
    const [gifts, setGifts] = useState<GiftsModel[]>([]);
    const { audienceId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        productService.getAllAudience()
            .then(setAudiences)
            .catch(err => notify.error(err));
    }, []);

    useEffect(() => {
        if (!audienceId) {
            setGifts([]);
            return;
        }
        productService.getGiftsByAudience(+audienceId)
            .then(setGifts)
            .catch(err => notify.error(err));
    }, [audienceId]);

    function handleAudienceChange(event: ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        navigate(value ? "/gifts/" + value : "/gifts");
    }

    return (
        <div className="Gifts">
            <h2>Filter Gifts by Audience</h2>

            <select value={audienceId ?? ""} onChange={handleAudienceChange}>
                <option value="" disabled>Select Target Audience...</option>
                {audiences.map(a => (
                    <option key={a.targetAudienceCode} value={a.targetAudienceCode}>
                        {a.type}
                    </option>
                ))}
            </select>

            {gifts.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gifts.map(g => (
                            <tr key={g.id}>
                                <td>{g.name}</td>
                                <td>{g.description}</td>
                                <td>${g.price}</td>
                                <td>{g.discount}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}