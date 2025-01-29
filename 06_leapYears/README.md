# Exercise 06 - leapYears

Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

> Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
>
> -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```


## Hints
- use an `if` statement and `&&` to make sure all the conditions are met properly


my own summary

Summary of Leap Year Rules:
Divisible by 4: Most leap years fall under this rule.
Not Divisible by 100: Century years are skipped unless...
Divisible by 400: Fixes the rare cases where skipping century years causes under-correction.

EXPLAINED
Every year divisible by 4 is a leap year.
This rule works for most cases. But...

Centuries (divisible by 100) are NOT leap years.
Because centuries are divisible by 4 automatically (like 1800, 1900), we skip them to avoid over-correcting the calendar.

However, years divisible by 400 ARE leap years.
This rule adds back some leap years (like 1600, 2000) to perfectly balance the calendar over a long time.

This way, the leap year rules fix the tiny differences in Earth’s orbit and keep our calendar accurate over centuries