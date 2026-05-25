
export default async function Page({params}){

    const paramData=await params;
    const userData=await GetApiData(paramData.userId);
    console.log('user data from api',userData);
    return(
        
        <div>
            <div>
                <h1>
                   User Details here
                </h1>
            </div>
            <div>
             <h2> Id = {userData.id}</h2><br></br>
             <h2>Name = {userData.name}</h2><br></br>
             <h2>Email = {userData.email}</h2><br></br>
             <h2>Age = {userData.age}</h2><br></br>
            </div>
        </div>
    )
}

export  async function GetApiData(id){
    const res= await fetch(`http://localhost:3000/server/api/users/${id}`);
    const data=await res.json();
    return data;
}