import { runGetApi, runPostApi } from "../api";

export async function LoginApi(data) {
    const result = await runPostApi("api/token/", data);
    let AuthStr = result.data.access;
    console.log(result.data.access);
    localStorage.setItem("AccessToken", AuthStr);
    return result;
}

export async function LoginUserApi() {
    const res = await runGetApi("api/user/", {} , true);
    return res;
}