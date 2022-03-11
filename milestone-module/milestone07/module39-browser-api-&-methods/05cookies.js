
// 39.5 (advanced) Cookies, dev tool application tab, get cookie value

/* 
    # Cookies are text files with small pieces of data — like a username and password — 
      that are used to identify your computer as you use a computer network.
    # HTTP cookies are used to identify specific users and improve your web browsing experience.
    # HTTP cookies, or internet cookies, are built specifically for Internet web browsers to track, personalize, 
      and save information about each user’s session.
    # Cookies are created to identify you when you visit a new website.
    # Browser cookies are identified and read by “name-value” pairs.

    # Cookies are small pieces of information websites store on your computer. Cookies only contain bits of text, not anything else. 
      The text can be a user ID, session ID, or any other text.
    # If you clear your cookies, you’ll be logged out of all websites and websites won’t remember any settings you’ve changed on them.
    # Your web browser stores and manages cookies. 

    Good Uses for Cookies:
        1. Cookies store your login state. Websites use cookies to remember and identify you.
        2. Cookies store preferences on websites.
        3. Cookies allow websites to provide personalized content.

    Bad Uses for Cookies:
        1. Advertising and tracking networks use tracking cookies to track you across the web.
        2. Tracking networks can also use selling aggregated browsing data to others.

    cookie are intended to be used:
        1. Session management
        2. Personalization / Authentication
        3. Tracking
    
    Articles: 
        1. https://www.kaspersky.com/resource-center/definitions/cookies
        2. https://www.howtogeek.com/119458/htg-explains-whats-a-browser-cookie/
        3. https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
        
*/

/* Some Commands in console panel:

    01. document.cookie
    02. document.cookie.split('; ')
    03. document.cookie.split('; ').map(c => console.log(c));
    04. document.cookie.split('; ').map(c => console.log(c.split('=')));
    05. document.cookie.split('; ').find(c => c.includes('country')); // 'eskucgkwiu72frkqawfcountry=BD'
    06. document.cookie.split('; ').find(c => c.includes('1P_JAR')); // '1P_JAR=2022-03-11-20'
    07. document.cookie.split('; ').find(c => c.includes('1P_JAR')).split('='); // (2) ['1P_JAR', '2022-03-11-20']
    08. document.cookie.split('; ').find(c => c.includes('1P_JAR')).split('=')[1]; // '2022-03-11-20'

*/

const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        // 'country=US'
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}

