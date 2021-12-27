export default async function() {
    const userListResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )
    const userList = await userListResponse.json()
    
    const testimonialList = await userList.slice(0, 6).map((user) => ({
    name: user.name,
    text: "Dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed",
    }))
    return testimonialList;
}