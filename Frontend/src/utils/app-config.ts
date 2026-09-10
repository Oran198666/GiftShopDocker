class AppConfig {
    public audienceUrl = "http://localhost:4000/api/audience";
    public giftsByAudienceUrl = "http://localhost:4000/api/gifts-by-audience/";
    public readonly giftUrl = "http://localhost:4000/api/gifts";

    public readonly recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
}

export const appConfig = new AppConfig();
