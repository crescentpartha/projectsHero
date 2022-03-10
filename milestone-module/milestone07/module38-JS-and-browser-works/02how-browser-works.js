
// 38.2 How Browser works, DOM Tree, Render Tree

/* 
    DOM Tree = Document Object Model Tree
    CSSOM Tree = Cascading Style Sheets Object Model Tree
    Render Tree = DOM Tree + CSSOM Tree
    Render --> To show or display

    DOM Tree + Style Structures --> Render Tree --> Paint
    Render Tree Image1: https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/render-tree-construction.png
    Render Tree Image2: https://miro.medium.com/max/624/1*srfAe9f1ryMc3qoMOASmhg.png

    -------------------------------------------------------------------------------------------------------------------------------------------

    Browser is one kind of Desktop Software which need to install in PC.
    Some steps to show a static website in browser:
    1. Browser convert a html file to a tree which called DOM Tree
    2. Browser create a style tree to apply style in html file.
    3. DOM Tree & Style Tree make together a Render Tree which basically indicate a layout of a website.
    4. If you update anything in DOM Tree/Render Tree, You need to re-rendering. 
    5. After getting a Render Tree, Need to paint on it. 
    6. Re-render --> Re-paint (Reflow)
    7. Output display in User Interface (UI)

    -------------------------------------------------------------------------------------------------------------------------------------------

    Browser হল এক ধরনের desktop software যা PC তে install করে ব্যবহার করতে হয়। 
    কোনো একটি browser এ static website দেখানোর steps:
        ১. Browser আমাদের html file টা কে একটা tree তে পরিবর্তন করে যা DOM Tree হিসেবে পরিচিত।
        ২. html file এর উপর style দেওয়ার জন্য browser একটা style tree তৈরী করে।
        ৩. DOM Tree এবং Style Tree মিলে তৈরী হয় Render Tree যা website এর layout কে নির্দেশ করে। 
            DOM Tree/Render Tree তে কোনো কিছু update হলে সেই অনুযায়ী Re-rendering হয়।
        ৪. Render Tree পাওয়ার পর সেটার উপর paint করা হয়। Re-render হলে re-paint (reflow) হয়।
        ৫. সবশেষে User Interface (UI) এ output টা display হয়।

*/
