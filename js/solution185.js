// Fraction to Periodic Decimal 
// Given a simple fraction compute its periodic decimal representation. Numerator n and denominator d are provided separately. Return string with exact decimal representation where repeating part (if any) is enclosed in braces ( and ). Fractional part (if any) must be separated with dot ..

// Examples
// 8/4 -> "2"
// 1/2 -> "0.5"
// 1/3 -> "0.(3)"
// 5/7 -> "0.(714285)"
// 123/65 -> "1.8(923076)"
// 10/3 -> "3.(3)"
// Constraints
// n, d - integers.
// 1 <= d < 100000.
// 1 <= n < 10 * d.

let fractionToPeriodic = function(numerator, denominator) {
    //   copied this solution-- not sure how it is working 
      if (denominator === 0) return 'NaN';
    
      let sign = numerator !== 0 && ((numerator > 0) ^ (denominator > 0));
      let num = Math.abs(numerator);
      let de = Math.abs(denominator);
      let result = sign ? '-' : '';
      let map = {};
    
      result += Math.floor(num / de);
      num %= de;
    
      if (num === 0) return result;
    
      result += '.';
    
      while (num > 0) {
        num *= 10;
    
        if (map[num] !== undefined) {
          result = result.substr(0, map[num]) + '(' + result.substr(map[num]) + ')';
          break;
        } else {
          map[num] = result.length;
        }
    
        result += Math.floor(num / de);
        num %= de;
      }
    
      return result;
    };