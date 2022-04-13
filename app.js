//      1. Create a loop that will rotate from 1000 to 300

/**
 * 
for( i = 1000 ; i >= 300 ; i-- ){
    console.log(i);
}
 */


//      2. Find the even and odd numbers from 1 and 1000 through for loop

/**
 * 
for( i = 1 ; i <= 1000 ; i++ ){
    if( i % 2 == 0 ){
        console.log('Even ' + i);
    }else{
        console.log('Odd ' + i);
    }
}
 */


//      3. Find the number divisible by 7 between 1 and 1000


/**
 * 
for( i = 1 ; i <= 1000 ; i++ ){
    if( i % 7 == 0 ){
        console.log(i);
    }
}
 */

//      4. Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11 

/**
 * 
for( i = 1 ; i <= 1000 ; i = i + 3 ){
    console.log(i);
    if( i % 11 == 0 ){
        break ;
    }
}
 */


//      5. Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4

/**
 * 
for( i = 1 ; i <= 500 ; i++ ){
    if( i % 3 == 0 && i % 4 == 0 ){
        console.log(i);
    }
}
 */


/**
 * 
for( i = 1 ; i <= 500 ; i++ ){
    i % 3 == 0 && i % 4 == 0 ? console.log( i ) : '' ;
}
 */


//      6. Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operator twice. 

/**
 * 
for( i = 10000 ; i <= 10050 ; i++ ){
    console.log(i);
}
 */
/**
 * 
for( i = 10000 ; i >= 9950 ; i-- ){
    console.log(i);
}
 */