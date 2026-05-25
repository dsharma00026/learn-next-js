export default async function CustomerDetials({ params }) {
 const resolvedParam = await params;
 const customer =
  [
   {
    id: 1,
    name: "deepak1",
    email: "deepak1@example.com"
   },
   {
    id: 2,
    name: "deepak2",
    email: "deepak2@example.com"
   },
   {
    id: 3,
    name: "deepak3",
    email: "deepak3@example.com"
   },
   {
    id: 4,
    name: "deepak4",
    email: "deepak4@example.com"
   },
  ];
 const customerData = customer.find((item) =>
  item.id === parseInt(resolvedParam.customer[0]));
 return (
  <div>
   <h2>Customer Details</h2>
   <div>
    <h2>id is:{customerData.id}</h2>
    <h2>name is:{customerData.name}</h2>
    <h2>email is:{customerData.email}</h2>
   </div>
   <div>
   </div>
  </div>
 )
}