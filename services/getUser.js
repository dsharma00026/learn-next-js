export default async function getUser()
{

const result = await fetch('https://jsonplaceholder.typicode.com/users');
return await result.json();
}

export async function getUserById(id)
{
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await result.json();
}
