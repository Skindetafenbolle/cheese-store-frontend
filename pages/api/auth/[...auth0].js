import {handleAuth} from "@auth0/nextjs-auth0";

export default handleAuth({
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
});
