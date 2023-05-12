import request from "./base";

export async function getAddresses() {
  return await request({
    url: `karfarmas/address`,
    method: "get",
  });
}

export async function createAddress(data: object) {
  return await request({
    url: `karfarmas/address`,
    method: "post",
    data,
  });
}
