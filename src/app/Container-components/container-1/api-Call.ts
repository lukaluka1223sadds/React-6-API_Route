"use server"

type Link = string;

const API_GET = async function (link: Link) {
    const users = await fetch(link);
    const response = await users.json();
    return response;
};

export default API_GET;