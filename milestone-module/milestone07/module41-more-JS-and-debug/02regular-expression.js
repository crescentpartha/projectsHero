
// 41.8 Simple Introduction to Regular Expression

/* 
    # Regular Expression is used to check or match a short string or character in a long string.
    # A regular expression is a sequence of characters that specifies a search pattern in text.
    # A regular expression is a method used in programming for pattern matching. Regular expressions provide a flexible and concise means to match strings of text. 
      For example, a regular expression could be used to search through large volumes of text and change all occurrences of "cat" to "dog".

    Some keyword: 
        1. regular expression for beginners javascript
            Learn Regex: A Beginner’s Guide (Link: https://www.sitepoint.com/learn-regex/)
        2. regular expression two special characters
            (Link: https://stackoverflow.com/questions/30648699/regular-expression-to-match-at-least-two-special-characters-in-any-order)
        3. regular expression javascript password strength
            (Link: https://stackoverflow.com/questions/5142103/regex-to-validate-password-strength)

    Regular Expressions - MDN web docs (Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

*/

/* 
    1. const myPassword = 'RastarMatiTumiKhati'
       myPassword.includes('A') || myPassword.includes('B')

    It is dificut to check manually. That's why we use Regular Expression

    Regular Expression: //
    1. /[0-9]/.test(myPassword) // false
    2. /[A-Z]/.test(myPassword) // true
    3. /[A-Z].*[A-Z]/.test(myPassword) // true
    4. /[A-Z].*[A-F]/.test(myPassword) // false
    5. /[0-5]/.test('today20') // true
    6. /[0-5]/.test('today70') // true
    7. /[0-5]/.test('today50') // true
    8. /[0-5]/.test('today76') // false
    
    // regular expression two special characters 
    9. /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/.test('RastarMati') // false
    10. /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/.test('RastarMati$') // false
    11. /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/.test('RastarMati$*') // true
    // regular expression javascript password strength
    12. /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test('TY%@ab0578asd12#@!') // false
    13. /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test('ama12QY#') // true

*/

/* 

    Regular Expression FUll Cheatsheet (For quick look) :)
    note: for downloading visit https://buggyprogrammer.com/regular-expression-cheatsheet/
    ------x-------------------x----------------x------------x----------------x-------------

    # -------------- Anchors --------------
    ^   →  Start of string, or start of line in multiline pattern
    \A  →  Start of string
    $   →  End of string, or end of line in multi-line pattern
    \Z  →  End of string
    \b  →  Word boundary
    \B  →  Not word boundary
    \<  →  Start of word
    \>  →  End of word


    # ---------- Character Classes --------
    \c  →  Control character
    \s  →  White space
    \S  →  Not white space
    \d  →  Digit
    \D  →  Not digit
    \w  →  Word
    \W  →  Not word
    \x  →  Hexadecimal digit
    \O  →  Octal digit


    # --------- Quantifiers -----------------
    *     →    0 or more 
    {3}   →    Exactly 3
    +     →    1 or more 
    {3,}  →    3 or more
    ?     →    0 or 1 
    {3,5} →    3, 4 or 5
    Add a ? to a quantifier to make it ungreedy.


    # ------- Special Characters -------------
    \n   →  New line
    \r   →  Carriage return
    \t   →  Tab
    \v   →  Vertical tab
    \f   →  Form feed
    \xxx →  Octal character xxx
    \xhh →  Hex character hh


    # --------- Groups and Ranges -------------
    .       →  Any character except new line (\n)
    (a|b)   →  a or b
    (...)   →  Group
    (?:...) →  Passive (non-capturing) group
    [abc]   →  Range (a or b or c)
    [^abc]  →  Not (a or b or c)
    [a-q]   →  Lower case letter from a to q
    [A-Q]   →  Upper case letter from A to Q
    [0-7]   →  Digit from 0 to 7
    \x      →  Group/subpattern number "x"
    Ranges are inclusive.


    # ----------- Assertions ---------------
    ?=         →  Lookahead assertion
    ?!         →  Negative lookahead
    ?<=        →  Lookbehind assertion
    ?!= or ?<! →  Negative lookbehind
    ?>         →  Once-only Subexpression
    ?()        →  Condition [if then]
    ?()|       →  Condition [if then else]
    ?#         →  Comment


    # ------ Pattern Modifiers --------
    g   →  Global match
    i*  →  Case-insensitive
    m*  →  Multiple lines
    s*  →  Treat string as single line
    x*  →  Allow comments and whitespace in pattern
    e*  →  Evaluate replacement
    U*  →  Ungreedy pattern
    *   →  PCRE modifier


    # ------ String Replacement ------
    $n  →  nth non-passive group
    $2  →  "xyz" in /^(abc(xyz))$/
    $1  →  "xyz" in /^(?:abc)(xyz)$/
    $`  →  Before matched string
    $'  →  After matched string
    $+  →  Last matched string
    $&  →  Entire matched string
    Some regex implementations use \ instead of $


    # ---------- Escape Sequences ------------
    \ Escape following character
    \Q Begin literal sequence
    \E End literal sequence

    "Escaping" is a way of treating characters which have a special meaning in regular expressions literally, rather than as special characters.


    # --------- Common Metacharacters ---------
    ^ 
    [
    .
    $
    {
    *
    (
    \
    +
    )
    |
    <
    >
    The escape character is usually \


    # ------------ POSIX ----------------
    [:upper:]  →  Upper case letters
    [:lower:]  →  Lower case letters
    [:alpha:]  →  All letters
    [:alnum:]  →  Digits and letters
    [:digit:]  →  Digits
    [:xdigit:] →  Hexadecimal digits
    [:punct:]  →  Punctuation
    [:blank:]  →  Space and tab
    [:space:]  →  Blank characters
    [:cntrl:]  →  Control characters
    [:graph:]  →  Printed characters
    [:print:]  →  Printed characters and spaces
    [:word:]   →  Digits, letters and underscore

*/


