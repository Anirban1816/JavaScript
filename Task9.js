/* Task 9 : Object + for...in
একটি Object তৈরি করো।

{

   name: "Rahim",

   age: 22,

   city: "Dhaka"

}

for...in ব্যবহার করে সব Key এবং Value Console-এ দেখাও। */

var person = {
  name: 'Rahim',
  age: 22,
  city: 'Dhaka',
};

for (const key in person) {
  console.log(key + ': ' + person[key]);
}
