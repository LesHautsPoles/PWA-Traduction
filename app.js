// Liste des termes et traductions
const terms = {
  "à première vue": "at first sight",
  "en fait": "as a matter of fact, in fact",
  "de toutes façons": "anyway",
  "dans la plupart des cas": "in most cases",
  "à cet égard": "in this respect",
  "dans une certaine mesure": "to some extent",
  "en ce qui concerne": "as far as ... is concerned",
  "parce que": "because",
  "car": "for",
  "puisque": "since",
  "C'est la raison pour laquelle": "This is the reason why",
  "à cause de": "because of",
  "en raison de": "owing to",
  "grâce à": "thanks to",
  "du fait de": "due to",
  "par + nom": "out of + noun",
  "étant donné": "on account of",
  "de telle sorte que": "so that",
  "Si... que": "so...that",
  "à tel point que": "so much so that",
  "c'est pourquoi": "that's why",
  "en conséquence de": "as a result of",
  "c'est pourquoi": "therefore",
  "en conséquence": "accordingly",
  "par conséquent": "consequently",
  "ainsi": "so, thus",
  "d'où": "hence",
  "finalement": "eventually",
  "jusqu'à ce que": "till / until",
  "pendant que": "while",
  "tant que": "as long as",
  "chaque fois que": "whenever",
  "depuis que": "since",
  "une fois que": "once",
  "pendant ce temps là": "meanwhile",
  "entre temps": "in the meantime",
  "parfois": "at times",
  "outre": "in addition to",
  "d'ailleurs": "besides",
  "en outre": "furthermore",
  "de plus": "moreover, what is more, on top of that",
  "aussi": "as well, also, too",
  "de même": "similarly",
  "bien que": "although / though",
  "comme si": "as though / as if",
  "même si": "even though / even if",
  "peu importe ce que": "no matter what",
  "quel que soit": "whatever",
  "peu importe comment": "no matter how",
  "si + adj, soit-il / elle": "however + adj.",
  "à moins que": "unless",
  "que ... ou que...": "whether ... or ...",
  "pourtant": "yet / still",
  "cependant": "however",
  "néanmoins": "nevertheless, nonetheless",
  "c'est-à-dire": "namely",
  "surtout": "above all",
  "tandis que": "whereas / while",
  "à la différence de": "unlike",
  "contrairement": "contrary to",
  "en opposition à": "as against",
  "d'une part..., d'autre part": "on the one hand.., on the other hand...",
  "inversement": "conversely",
  "au contraire": "on the contrary",
  "en contraste avec": "in contrast to",
  "ou alors": "or else",
  "autrement": "otherwise",
  "si on suppose que": "suppose/ supposing",
  "pourvu que": "provided/providing",
  "à condition que": "on condition that",
  "à condition que": "so long as / as long as",
  "si": "if",
  "au cas où": "in case"
};

// Fonction pour obtenir un terme aléatoire
function getRandomTerm() {
  const termsKeys = Object.keys(terms);
  const randomIndex = Math.floor(Math.random() * termsKeys.length);
  const randomTerm = termsKeys[randomIndex];
  
  document.getElementById("french-term").textContent = randomTerm;
}

// Vérification de la réponse
document.getElementById("check-answer").addEventListener("click", function() {
  const userInput = document.getElementById("user-input").value.toLowerCase();
  const correctAnswer = terms[document.getElementById("french-term").textContent].toLowerCase();

  if (userInput === correctAnswer) {
    document.getElementById("result").textContent = "Correct!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent = `Incorrect! La bonne réponse est: ${correctAnswer}`;
    document.getElementById("result").style.color = "red";
  }

  // Réinitialiser l'input et afficher un nouveau terme
  document.getElementById("user-input").value = "";
  getRandomTerm();
});

// Enregistrer le Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker enregistré avec succès:', registration);
      })
      .catch(error => {
        console.log('Échec de l\'enregistrement du Service Worker:', error);
      });
  });
}

// Initialiser avec un terme aléatoire
window.onload = getRandomTerm;
