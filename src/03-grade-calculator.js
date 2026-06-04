/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */  
export function calculateGrade(score, hasExtraCredit) {
  // Your code here
   let Grade 
  let number = score ;
   if (score <0 || score >100 ) {
    return "INVALID"}

  else if (hasExtraCredit == true ) {
  number = (score += 5) 
}
if (score >95 && hasExtraCredit == true) {
    number = 100
  } 
  if (number >100) {
    number =100
  }
  else if (number <0 || number >100 ) {
  return "INVALID"}
  
  

  else if ( number >=0 && number <=59 ) {
    Grade = "F"
   } 
  else if ( number >=60 && number <=69 ) {
    Grade = "D"
   } 
  else if ( number >=70 && number <=79 ) {
    Grade = "C"
   } 
  else if ( number >=80 && number <=89 ) {
    Grade = "B"
   } 
  else if ( number>=90 && number <=100 ) {
    Grade = "A"
   }  
   return Grade

}
