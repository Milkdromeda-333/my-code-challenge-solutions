<?php

/**
 * 09/23/23
 * 1. if true is passed, return "Yes", if false return "No
 */
function boolToWord($bool){
if($bool)
{
    return "Yes";
} else {
    return "No";
}

return $bool;
}

boolToword(true); // "Yes"
/**
 * CONCLUSION: Little easy one. My first ever PHP challenge! Was pretty easy and I'm excited to learn mor eabout PHP. 
 * LEARNED: That PHP in fact does have tertiaries, also, it has typing for sure. 
*/

// --------------------------------------------------------------------------------------->
 
/**
 * 09/23/23
 * 2. return even or odd if passed param is even or odd respectively
*/
function even_or_odd(int $n): string {
    if($n % 2 === 0):
        return "Even";
    else:
        return "Odd";
    endif;
}
echo even_or_odd(2); // "Even

// --------------------------------------------------------------------------------------->
 
/**
 * 09/23/23
 * 3. return the summation of every number from 1 to num
 * IDEATION:
 * Use a loop and an accumulator.
*/
function summation(int $n): int 

{
  $accumulator = 0;

  for($i = 1; $i <= $n; $i++):
    $accumulator += $i;
  endfor;

  return $accumulator;
}
echo summation(5); // 15

/**
 * CONCLUSION: I SUCC at math. Found some cool internal functions such as range (creates an array using a start and an end as provided) and array_sum (calculates sum of elements in an array).
*/

// --------------------------------------------------------------------------------------->
 
/**
 * 4. 09/23/23
*/
function paperwork(int $n, int $m): int
{
    return $n < 0 || $m < 0 ? 
    0 : $n * $m ;
}
echo paperwork(5, 5); // 25
//echo paperwork(-5, 5); // 0
//echo  paperwork(5, 0); // 0

/**
 * CONCLUSION: || and "or" are NOT the same....... or returns 1 if something is truthy and 0 for falsey i think.
 *  return ($n<0 or $m<0) ? 0 : $n*$m; is cool.  
 */

 
// --------------------------------------------------------------------------------------->
 
/**
 * 5. 09/23/23
 * @param  array
 * @return int   the largest and smallest number
 * 
*/
function maximum(array $array): int {
    if(!empty($array)):
        sort($array);
        return $array[sizeof($array) - 1];
    else:
        throw new Exception ("Array is empty");
    endif;
}
function minimum(array $array): int 
{
    if(!empty($array)):
        sort($array);  
        return $array[0];
    else:
        throw new Exception ("Array is empty");
    endif;
}
/**
 * CONCLUSION: learned about javadocs documenting functions, z d sizeof array fuctions.
 * 
 * ..... turns out there are max and min arr functions in PHP. Cool.
 * You can rename in-built functions!? `use function max as maximum; use function min as minimum;`
 * came back and added error handling! soo important.
 */

// --------------------------------------------------------------------------------------->
 
/**
 * 6. 09/23/23
 * 
 * @param  array
 * @return int   the number of all of the numbers in the param multiplied together
 * 
 * ideation: array_reduce? 
*/
function grow(array $arr): int 
{
    if(!empty($arr)):
        return array_reduce($arr, fn($carry, $num)=> $carry * $num, 1);
    else:
        throw new Exception("Array is empty");
    endif;
}

echo grow([1, 2, 3]); // 6
echo grow([4, 1, 1, 1, 4]); // 16
echo grow([2, 2, 2, 2, 2, 2]); // 64

/**
 * CONCLUSION: OK so carry is the initial value on the first iteration, and after that its the value from the previous iteration. $num is the next element.
 * 
 * Learned about arrow function expressions in PHP! and array_produce......
*/

// --------------------------------------------------------------------------------------->


/**
 * 7. 09/23/23
 * 
 * @param  array [strings] 
 * @return string of the elements in the array delimited with spaces.
 * 
 * ideation: array_reduce? 
*/
function smash(array $arr): string 
{
    $result = "";
  for($i = 0; $i < count($arr); $i++){
    if($i < count($arr) - 1):
        $result .= "$arr[$i] ";
    else:
        $result .= "$arr[$i]";
    endif;
  }
  return $result;
}

var_dump(smash([])); // ""
var_dump(smash(["hello"])); // "hello"
var_dump(smash(["hello", "world"])); // "hello world"
/**
 * CONCLUSION: looked up white-space conventions, and learned that you can't use += to concatanate strings. Used var_dump to check the validity of the white space.
 * 
 * ..... learned implode(" ", $word) and join(" ", $word) not adding the delimiters to the ends lol. And .= !
 */

// --------------------------------------------------------------------------------------->
