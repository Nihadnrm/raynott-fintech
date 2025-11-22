import base_url from "./base_url";
import commonApi from "./commonApi";


// users

export const registerApi = async (data) => {

    return await commonApi(`${base_url}/register`,"POST","", data)

}
export const loginApi = async (data) => {

    return await commonApi(`${base_url}/login`,"POST","",data)
}

// money
export const addApi = async (data) => {
    const header = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    };

    return await commonApi(`${base_url}/addmoney`,"POST",header,data)

}
export const getmoneyApi = async () => {
    const header = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    };

    return await commonApi(`${base_url}/getmoney`,"GET",header)

}
export const gettransactionApi = async () => {
    const header = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    };

    return await commonApi(`${base_url}/gettransactions`,"GET",header)

}

export const retriveApi = async (data) => {
    const header = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    };

    return await commonApi(`${base_url}/retrievemoney`,"POST",header,data)

}
export const addLoanApi = async (data) => {
    const header = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    };

    return await commonApi(`${base_url}/addloan`,"POST",header,data)

}
export const addContactApi = async (data) => {
    const header = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    };

    return await commonApi(`${base_url}/addcontact`,"POST",header,data)

}
