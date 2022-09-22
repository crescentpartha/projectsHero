Table of Contents
---

- [CRUD Product Management](#crud-product-management)
  - [`Node Mongo CRUD Operation Checklist`](#node-mongo-crud-operation-checklist)
  - [`Extra Challenges`](#extra-challenges)
  - [`নোড মঙ্গো CRUD অপারেশন চেকলিস্ট`](#নোড-মঙ্গো-crud-অপারেশন-চেকলিস্ট)
  - [`এক্সট্রা চ্যালেঞ্জ`](#এক্সট্রা-চ্যালেঞ্জ)

# CRUD Product Management

## `Node Mongo CRUD Operation Checklist`

1. Create ___a Node Server___ by using ___Express___ (Follow ___5 Steps___)
2. ___Connect with database___ and  then check, it is ___connected or not___. 
3. Create a ___API of POST method___ so that you can ___send data to the database___. Must use `cors` and `express.json` as a `middleware` of the project.
4. Create a ___react application___ where ___setup some routes___ and one of the route would be `addProducts` as a ___name of Route___. In this route, create a `form` and this form could be ___normal html form___, ___react-bootstrap form___ or ___react-hook-form___. this form includes ___three fields___ such as ___Product-name___, ___price___, and ___quantity___. When we ___submit___ this form, the form data will ___store to the database going through the server___. So, you will implement `C` of `CRUD` operation. 

---

5. Create another route called `manageProducts` in your React Application. In where, you will ___show all the data___ from your database which are already stored in database. So, you have to ___create a API in server___, so that, you can ___load all products___ to display in ___UI___. Thus, you will implement `R` of `CRUD` Operation.
6. Every product must contain a ___delete___ button. If user press the delete button, then this ___particular product___ will ___remove from the database___ and also the ___UI___. So, you have to create a ___API of delete method___. So, you will implement `D` of `CRUD` Operation.

---

7. Create ___another route___, in where, user could ___update product information___. You have to add the ___update button___ of ___every product___ under the `manageProducts` route. So, If user press the update button, It will create ___a dynamic route___ for this product where you could ___update this product details___.
8. In this dynamic route, load this product's data according to this ___product id___. For this product's data, you have to ___create a API___ where you could ___bring a certain product's data by using id___ from database. After that, show some product's data.

---

9. Create a ___form in product update route___ and ___display loaded data___ in the form field. Implement a system to ___update a product___ details by updating these ___form field___.
10. Update a product so that updated data save in the ___database going through the server___. You can see updated product information in `manageProducts` route. So, you will practice how to implement `U` of `CRUD` Operations. 

**[🔼Back to Top](#table-of-contents)**

---

## `Extra Challenges`

11. Use `react hook form`, if you can.
12. Try to use `axios` to save ___POST request___.

So, you practice a `CRUD Operations` by yourself. In the meantime, you will know how to `build a project management system`.

**[🔼Back to Top](#table-of-contents)**

<br /> 

---

<br /> 

## `নোড মঙ্গো CRUD অপারেশন চেকলিস্ট`

1. এক্সপ্রেস দিয়ে ___নোড এর একটা সার্ভার___ তৈরি করবে। (পাঁচটা স্টেপে)
2. ___ডাটাবেজ এর সাথে কানেক্ট___ করবে। চেক করে দেখবে ঠিক আছে কিনা। এইটা ঠান্ডা মাথায় করতে হবে। 
3. একটা ___API তৈরি___ করবে। ___post এর API___ যেটা দিয়ে ডাটা তুমি ডাটাবেজে সেন্ড করতে পারবে। এইখানে `cors` এবং `express.json` কে `middleware` হিসেবে ইউজ করা গুরুত্বপূর্ণ। 
4. একটা সিম্পল ___React এপ্লিকেশন___ তৈরি করো। সেখানে রাউটার থাকবে। এবং একটা রাউট হবে `addProducts` নামে। সেই রাউট এ একটা ___ফর্ম___ থাকবে। সেটা সিম্পল ___html এর ফর্ম___ হতে পারে। ___react-bootstrap এর ফর্ম___ হতে পারে। বা ___react hook form___ হতে পারে। যেটাই হোক না কেন। সেখানে ___তিনটা ফিল্ড___ থাকবে। `প্রোডাক্টের নাম, দাম এবং কোয়ান্টিটি`। এরপর সেখান থেকে সাবমিট করলে সেই ___ডাটা সার্ভার হয়ে ডাটাবেজে___ গিয়ে সেইভ হবে। [ কি মজা !!!] অর্থাৎ তুমি `CRUD এর C` ইমপ্লিমেন্ট করে ফেলবে।

---

5. তোমার রিএক্ট এপ্লিকেশনে আরেকটা রাউট তৈরি করো `manageProducts` । সেখানে তোমার ডাটাবেজে যে যে প্রোডাক্টস আছে সেগুলা তুমি লোড করে দেখাবে। অর্থাৎ তোমার একটা ___API___ ক্রিয়েট করতে হবে ___সার্ভারে___। তারপর সেখান থেকে তুমি ___সব products এর ডাটা লোড করে UI___ তে দেখাবে। অর্থাৎ তুমি `CRUD এর R` ইমপ্লিমেন্ট করে ফেলবে। 
6. প্রত্যেকটা প্রোডাক্ট এ `ডিলিট` করার একটা বাটন থাকবে। সেখানে ডিলিট করলে সেই প্রোডাক্ট তোমার ___ডাটাবেজ থেকে ডিলিট___ হয়ে যাবে। অর্থাৎ এইটা করার জন্য তোমাকে ___delete এর একটা API___ তৈরি করতে হবে। এতে তোমার `CRUD এর D` ইমপ্লিমেন্ট করার প্রাকটিস হয়ে যাবে।

---

7. তোমার রিএক্ট এপ্লিকেশনে আরেকটা রাউট তৈরি করো। যেখানে ___প্রোডাক্ট আপডেট___ করা হবে। তুমি `manageProducts` এ প্রত্যেকটা product এর সাথে একটা করে ___update নামের বাটন___ যোগ করো। তারপর সেই বাটনে ক্লিক করলে ___ডাইনামিকভাবে সেই প্রোডাক্ট update করার রাউট___ এ যাবে। 
8. এই রাউট এ ___ডাইনামিক id___ অনুসারে সেই ___প্রোডাক্ট এর ডাটা লোড___ করো। এইটার জন্য তোমাকে আরেকটা ___API তৈরি___ করতে হবে। যেখানে তুমি একটা id দিলে সেই প্রোডাক্ট এর ডাটা নিয়ে আসবে। তারপর সেই প্রোডাক্ট এর কিছু ডাটা দেখাবে। 
9. প্রোডাক্ট আপডেট করার রাউটে একটা ___ফর্ম___ তৈরি করো। এবং আগের ষ্টেপের ___লোড করা ডাটা এই ফর্মে দেখাও___। এবং সেই ডাটা যাতে আপডেট করতে পারবে। সেই সিস্টেম সেট করো। যাতে প্রোডাক্ট আপডেট করতে পারো। 
10. ___প্রোডাক্ট আপডেট___ করো। অর্থাৎ আপডেট করা ___ডাটা সার্ভার হয়ে ডাটাবেজে সেইভ___ হয়ে যাবে। এবং তুমি ___ম্যানেজ প্রোডাক্টস রাউট___ এ গিয়েই আপডেট করা তথ্য দেখতে পারবে। এতে তোমার `CRUD এর U` এর কাজ করা প্রাকটিস হয়ে যাবে। 

**[🔼Back to Top](#table-of-contents)**

---

## `এক্সট্রা চ্যালেঞ্জ`

11. পারলে `react hook form` ইউজ করো 
12. চেষ্টা করো `axios` দিয়ে ___post রিকুয়েস্ট সেন্ড___ করতে। মজা পাবে। 

অর্থাৎ তুমি নিজেই নিজেই একটা `CRUD অপারেশন` এর প্রাকটিস করে ফেলবে। সাথে সাথে একটা `প্রোডাক্ট ম্যানেজ করার সিস্টেম` তোমার জানা হয়ে গেলো।

**[🔼Back to Top](#table-of-contents)**
