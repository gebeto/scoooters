// import json

// from .utils import post_json, HEADERS, url_base

// async def request_sms(phone_number):
//     url_request_sms = f"{url_base}/auth/request/sms-code"
//     response = await post_json(
//         url_request_sms,
//         headers=HEADERS,
//         data=json.dumps({
//             "phoneNumber": phone_number
//         })
//     )
//     return response

// async def confirm_sms(phone_number, code):
//     url_confirm_sms = f"{url_base}/auth/login/sms-code"
//     response = await post_json(
//         url_confirm_sms,
//         headers=HEADERS,
//         data=json.dumps({
//             "phoneNumber": phone_number,
//             "smsCode": code
//         })
//     )
//     return response["data"]["token"]

// async def login():
//     phone_number = input("Phone number: ")
//     res = await request_sms(phone_number)
//     code = input("Code from SMS: ")
//     token = await confirm_sms(phone_number, code)
//     return token

import got, { RequestError } from "got";

const name = "ewings";
const urlBase = "https://api.scootapi.com";

const HEADERS = {
  Accept: "*/*",
  "samokatoapp-client": "7d53c81d-dede-490c-a6b0-5f2e93f2cc91",
  "samokatoapp-platform": "ios",
  "Accept-Language": "en-GB,en;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  "Content-Type": "application/json",
  "User-Agent": "E-wings/1 CFNetwork/1331.0.7 Darwin/21.4.0",
  "samokatoapp-lang": "en-UA",
  "samokatoapp-tenant": "f56a90e4-893b-414e-ba52-a51591a0e909",
  "samokatoapp-appversion": "1.9.58",
  "samokatoapp-version": "14",
};

export const requestSms = async (phoneNumber: string) => {
  const stripedNumber = phoneNumber.replace(/^3?8?0/, "");
  try {
    const result = await got(`${urlBase}/auth/request/sms-code`, {
      method: "POST",
      headers: HEADERS,
      json: {
        phoneNumber: stripedNumber,
      },
    }).json();

    return {
      ok: true,
      phoneNumber: stripedNumber,
    };
  } catch (err) {
    if (err instanceof RequestError) {
      return { error: true, message: err.message };
    }

    return { error: true };
  }
};

export const confirmSms = async (phoneNumber: string, code: string) => {
  const result = await got(`${urlBase}/auth/login/sms-code`, {
    method: "POST",
    headers: HEADERS,
    json: {
      phoneNumber: phoneNumber,
      msCode: code,
    },
  }).json();

  return result;
};

// async def confirm_sms(phone_number, code):
//     url_confirm_sms = f"{url_base}/auth/login/sms-code"
//     response = await post_json(
//         url_confirm_sms,
//         headers=HEADERS,
//         data=json.dumps({
//             "phoneNumber": phone_number,
//             "smsCode": code
//         })
//     )
//     return response["data"]["token"]
