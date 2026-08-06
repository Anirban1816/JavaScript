/* Task 5 : switch-case
একটি Variable তৈরি করো।

let day = 3;

Output হবে

Wednesday

(১ থেকে ৭ পর্যন্ত Day দেখাতে হবে।) */

let day = 3;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Invalid day');
}
