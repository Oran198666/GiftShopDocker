class AppConfig {
    private readonly baseUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";

    public audienceUrl = this.baseUrl + "/api/audience";
    public giftsByAudienceUrl = this.baseUrl + "/api/gifts-by-audience/";
    public readonly giftUrl = this.baseUrl + "/api/gifts";

    public readonly recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
}

export const appConfig = new AppConfig();