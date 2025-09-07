// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice(order) {
  // เริ่มเขียนโค้ดตรงนี้
  let total = 0
  for (let item in order) {
    let result = order[item].price * order[item].quantity
    total += result
  }
  return total
}

// ตัวอย่างการใช้งาน


const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50


