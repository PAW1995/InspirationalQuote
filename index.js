const part1 = [
    "Believe in your ability to",
    "Every challenge you face will",
    "Success is found when you",
    "Strength comes when you",
    "The journey to growth begins as you",
    "You have the power to",
    "Your potential can",
    "True happiness comes when you",
    "The path to greatness begins when you",
    "Progress is made when you",
    "Courage lies in your decision to",
    "Hard work will always",
    "Your dreams will start to",
    "A positive mindset can",
    "Opportunities will arise when you",
    "The future is shaped by your decision to",
    "Persistence will always",
    "Growth begins when you",
    "Change happens when you",
    "Success is built when you",
    "Every setback will",
    "The power to achieve lies in your ability to",
    "Your vision can",
    "Focus and determination will",
    "Each step forward will",
    "Trust yourself to",
    "Each day is an opportunity to",
    "Your resilience will",
    "Inner strength is built when you",
    "True greatness comes when you"
  ];
  
  const part2 = [
    "embrace the possibilities ahead,",
    "take one more step,",
    "focus on your goals,",
    "keep pushing through the doubts,",
    "trust in your journey,",
    "turn obstacles into opportunities,",
    "stay consistent in your efforts,",
    "keep moving forward,",
    "stay committed to your path,",
    "face every challenge head-on,",
    "rise after each fall,",
    "remain patient and focused,",
    "take action with purpose,",
    "see every setback as a lesson,",
    "hold onto your dreams,",
    "make the most of every moment,",
    "continue striving for more,",
    "maintain belief in yourself,",
    "let go of your fears,",
    "stay true to your vision,",
    "adapt to every change,",
    "use failure as a stepping stone,",
    "embrace the unknown,",
    "focus on progress,",
    "stay grounded in your values,",
    "face adversity with courage,",
    "overcome every challenge,",
    "learn from every experience,",
    "never lose sight of your purpose,"
  ];
  
  const part3 = [
    "and you will achieve greatness.",
    "and success will follow.",
    "and you will find strength within.",
    "and you will discover new possibilities.",
    "and your dreams will become reality.",
    "and you will unlock your full potential.",
    "and you will inspire those around you.",
    "and you will rise above any obstacle.",
    "and you will achieve more than you imagined.",
    "and you will see the results you desire.",
    "and you will grow stronger every day.",
    "and your path will become clearer.",
    "and you will thrive in all circumstances.",
    "and every step will bring you closer to your goals.",
    "and fulfillment will follow.",
    "and you will reach new heights.",
    "and your hard work will pay off.",
    "and you will find joy in the journey.",
    "and you will conquer every challenge.",
    "and your future will be bright.",
    "and you will see your vision come to life.",
    "and the best is yet to come.",
    "and you will find peace in the process.",
    "and you will realize how far you have come.",
    "and success will be inevitable.",
    "and your efforts will be rewarded.",
    "and you will become unstoppable.",
    "and your journey will be worth it.",
    "and new doors will open for you."
  ];
  
function generateQuote() {
    const part1Selector = () => part1[Math.floor(Math.random() * part1.length)];
    const part2Selector = () => part2[Math.floor(Math.random() * part2.length)];
    const part3Selector = () => part3[Math.floor(Math.random() * part3.length)];
    
    return part1Selector() + " " + part2Selector() + " " + part3Selector();
}

function displayQuote() {
    const linkToHtml = document.getElementById('quoteDisplay');
    const newQuote = generateQuote();
    linkToHtml.innerHTML = newQuote;
}
