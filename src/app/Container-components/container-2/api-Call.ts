"use server"
const API_GET = async function () {
    const users = await fetch("https://fakerapi.it/api/v2/creditCards?_quantity=1" , {next:{revalidate:15}})
    const response = await users.json()
    return response
}

export default API_GET