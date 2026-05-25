 export default async function Page(){

    const data=await getData();
    console.log(data);
    return(
        <div>
            <div>
                <h1>here we  use loader</h1>
            </div>
            <div>
                <ShowApi props={{data}}></ShowApi>
                

            </div>

        </div>
    )
}

async function getData(){
    const res=await fetch('https://www.arbeitnow.com/api/job-board-api');
    const data=await res.json();
    return data.data;
}

function ShowApi({props}){
    return(
        <div>
            {
                props.data.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.slug}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}