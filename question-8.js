// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let getUser = () => {
    return fetch ("https://jsonplaceholder.typicode.com/users")
}


async function getUserAsync () {
    try {
        const getUserFN = await getUser()
        const uSer = await getUserFN.json()
        const newUser = uSer.map((user) => user.name)        //ถ้าอยากรู้ว่ามีข้อมูลอะไรบ้าง ก็ ลบ .name ทิ้งมาหมดเลย
        console.log(newUser)
    } catch (error) {
        console.log("Error")
    }
    
}


getUserAsync()