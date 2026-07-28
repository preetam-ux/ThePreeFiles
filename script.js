console.log("ThePreeFiles Loaded");
function sayNamaskar() {
    // Ek naya speech object banayein
    const speech = new SpeechSynthesisUtterance("Aapko Preetam ka namaskar!");
    
    // Language ko Hindi ya English-India set karein
    speech.lang = 'hi-IN'; 
    speech.rate = 0.9; // Bolne ki speed (thoda natural lagne ke liye)
    
    // Browser se bolne ke liye kahein
    window.speechSynthesis.speak(speech);
}