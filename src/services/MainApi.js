import axios from "axios";

const REVEL_TENANT = process.env.TENANT;
const REVEL_APIGATEWAY_URL = process.env.APIGATEWAY_URL;

let token = "";
if (typeof window !== "undefined") {
  token = JSON.parse(localStorage.getItem("token"));
}

export const REVEL_TENANT_API = {
  POST: (link, data) =>
    axios.post(REVEL_TENANT + REVEL_APIGATEWAY_URL + link, data),

  GET: (link, data) =>
    axios.get(
      REVEL_TENANT + REVEL_APIGATEWAY_URL + link,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "*/*",
          "Cache-Control": "no-cache",
        },
      },
      data
    ),
};
//Get : http://master.revel-dev.test:9876

