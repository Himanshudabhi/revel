import { useEffect, useState } from "react";
import queryString from "query-string";
import { ROUTE_URL } from "@/src/constant/url";
import { useRouter } from "next/router";
import { loginImg } from "@/src/assets/img";

const Loginmiddleware = () => {
    const router = useRouter();
    useEffect(() => {
        // debugger
        const authorizationCode = queryString.parse(window.location.search).code;
        console.log("authorizationCode",authorizationCode);
        const payload = {
            grant_type: "authorization_code",
            code: authorizationCode,
            redirect_uri: "http://master.revel-himanshu.test:3000/loginmiddleware",
            client_id: "master",
        };

        const encodedPayload = new URLSearchParams(payload).toString();
        console.log("authorizationCode1",encodedPayload);
        var authorizationEndpoint = "http://master.revel-dev.test:8051/oauth2/token";
        // var authorizationEndpoint = "http://master.revel-jaydeep.test:8151/oauth2/token";


        fetch(authorizationEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: " Basic bWFzdGVyOnNlY3JldA==",
            },
            body: encodedPayload,
        })
        
            .then((resp) => resp.json())
            .then((json) =>
                localStorage.setItem("token", JSON.stringify(json.access_token))
            );
           
        router.push(ROUTE_URL.MANAGE_TENANT);
    }, []);

    return <></>;
};
export default Loginmiddleware;
