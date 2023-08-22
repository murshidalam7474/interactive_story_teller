document.addEventListener("DOMContentLoaded", function () {
  const story1 = ["Once upon a time, in a quiet countryside, there stood an old and abandoned mansion known as Hollow Manor.",
  "The mansion had a dark history, with rumors of mysterious disappearances and strange occurrences surrounding it.",
  "Local villagers believed that the mansion was haunted by the ghost of a woman named Eleanor, who had tragically died in the mansion decades ago.",
  "Legend had it that Eleanor's spirit wandered the halls of Hollow Manor, seeking to find peace and justice for the wrongs that had been done to her.",
  "On moonlit nights, eerie whispers could be heard echoing through the corridors, sending shivers down anyone's spine who dared to venture near the mansion.",
  "Curiosity got the better of a group of adventurous friends, who decided to spend a night inside Hollow Manor to test the legends.",
  "As they entered the mansion, they noticed flickering candles that seemed to light up on their own, casting eerie shadows on the walls.",
  "The group set up in the grand hall, sharing nervous laughter as they told each other stories to ease their anxiety.",
  "As the night grew darker, strange creaking sounds echoed through the mansion, as if unseen footsteps were wandering the rooms.",
  "One of the friends claimed to have seen a faint figure dressed in white moving through the hallway, disappearing into thin air.",
  "Heartbeats quickened as they realized that Eleanor's ghost might be real, and the legends might hold some truth after all.",
  "They decided to communicate with the spirit, setting up an old Ouija board they found in one of the rooms.",
  "As they asked questions, the planchette moved on its own, spelling out chilling messages that seemed to come from another world.",
  "Suddenly, the temperature dropped drastically, and a cold breeze swept through the room, extinguishing the candles.",
  "Panic set in as the friends realized they might have awakened something they couldn't control.",
  "In a desperate attempt to escape, they rushed towards the exit, but the doors slammed shut before they could reach them.",
  "Trapped inside Hollow Manor, the friends felt the presence of Eleanor's spirit growing stronger, as if she were trying to communicate her story.",
  "Using their wits and courage, they pieced together the pieces of Eleanor's tragic tale, a story of betrayal and revenge that had left her soul unrestful.",
  "Realizing that Eleanor sought closure, they worked together to uncover the truth behind her death and the injustices that had befallen her.",
  "With newfound determination, they managed to break the curse that bound Eleanor to the mansion, releasing her spirit into the afterlife.",
  "As dawn broke, the friends found themselves outside Hollow Manor, the air feeling lighter, and the mansion now devoid of its eerie atmosphere.",
  "They had not only survived a night in a haunted mansion but had helped a tormented soul find peace at last.",
  "From that day on, Hollow Manor stood as a reminder that even in the darkest of places, there is room for redemption and closure.",
  "And so, the story of the haunting of Hollow Manor became a tale of friendship, bravery, and the power of uncovering the truth."];
  let cwi = 0;

  const story1Paragraph = document.getElementById("story1");
  const prevButton1 = document.querySelector(".prev-button1");
  const nextButton1 = document.querySelector(".next-button1");
  const readButton1 = document.querySelector(".read-button1");

  function updateWordDisplay1() {
    story1Paragraph.textContent = story1[cwi];
  }

  function goToNextWord1() {
    if (cwi < story1.length - 1) {
      cwi++;
      updateWordDisplay1();
    }
  }

  function goToPreviousWord1() {
    if (cwi > 0) {
      cwi--;
      updateWordDisplay1();
    }
  }

  function readCurrentWord1() {
    const speechText1 = story1[cwi];
    const utterance1 = new SpeechSynthesisUtterance(speechText1);
    window.speechSynthesis.speak(utterance1);
  }

  prevButton1.addEventListener("click", goToPreviousWord1);
  nextButton1.addEventListener("click", goToNextWord1);
  readButton1.addEventListener("click", readCurrentWord1);

  updateWordDisplay1();
});
//story two
document.addEventListener("DOMContentLoaded", function () {
    const story2 = ["In the bustling city of Lumina, there lived an artist named Ava, known for her ability to capture the essence of emotions in her paintings.",
  "Ava's studio was nestled in a quaint corner of the city, adorned with colorful canvases and the sweet aroma of oil paints.",
  "Her most prized possession was a mysterious antique paintbrush that had been passed down through generations in her family.",
  "Legend had it that this paintbrush held the power to bring life to the emotions depicted in the paintings.",
  "As Ava painted, she felt an inexplicable connection to her subjects, as if their feelings flowed through her fingertips.",
  "One stormy night, as rain lashed against her window, Ava received an unexpected visitor—a stray cat with eyes as vibrant as gemstones.",
  "Moved by the feline's gaze, Ava picked up the antique brush and began to paint. To her astonishment, the cat's image came to life on the canvas.",
  "With each stroke of the brush, Ava infused her creation with the cat's essence, and it transformed into a living, breathing companion.",
  "She named her newfound friend Luna and marveled at the bond they shared—the art of connection beyond words.",
  "News of Ava's incredible talent spread, attracting curious souls from all corners of the city.",
  "Eager to experience this magical connection, people brought their emotions to Ava's studio, hoping to see them come alive on canvas.",
  "Ava embraced her role as a bridge between emotions and art, painting joy, sorrow, and love with unparalleled empathy.",
  "However, as the demand for her work grew, Ava's connection to her art began to wane. She felt like a vessel rather than a creator.",
  "One day, Luna disappeared, leaving Ava heartbroken. Desperate to reconnect with her own emotions, she locked herself in her studio.",
  "Amidst tears and paint, Ava realized that the true art of connection was not merely replicating feelings, but experiencing them deeply.",
  "She rediscovered her own voice and painted a canvas that expressed her journey—a tapestry of vulnerability, strength, and growth.",
  "Word of Ava's transformation spread, inspiring others to seek connection within themselves and their art.",
  "Luna eventually returned, a reminder that connections were forged not only in the extraordinary but also in the everyday moments.",
  "Ava continued to paint, not to mimic emotions, but to capture the raw beauty of the human experience—imperfect, genuine, and alive.",
  "And so, the story of Ava and Luna became a testament to the profound art of connection—a reminder that true creation stems from the heart."];
    let currentWordIndex = 0;

    const story2Paragraph = document.getElementById("story2");
    const prevButton = document.querySelector(".prev-button2");
    const nextButton = document.querySelector(".next-button2");
    const readButton = document.querySelector(".read-button2");

    function updateWordDisplay() {
      story2Paragraph.textContent = story2[currentWordIndex];
    }

    function goToNextWord() {
      if (currentWordIndex < story2.length - 1) {
        currentWordIndex++;
        updateWordDisplay();
      }
    }

    function goToPreviousWord() {
      if (currentWordIndex > 0) {
        currentWordIndex--;
        updateWordDisplay();
      }
    }

    function readCurrentWord() {
      const speechText = story2[currentWordIndex];
      const utterance = new SpeechSynthesisUtterance(speechText);
      window.speechSynthesis.speak(utterance);
    }

    prevButton.addEventListener("click", goToPreviousWord);
    nextButton.addEventListener("click", goToNextWord);
    readButton.addEventListener("click", readCurrentWord);

    updateWordDisplay();
  });
  //story3
  document.addEventListener("DOMContentLoaded", function () {
    const story3 = ["In the quiet village of Seren, nestled between rolling hills, lived a young girl named Mia who possessed an extraordinary gift—the ability to see and communicate with spirits.",
    "Mia's gift was known to only a few, and she kept it hidden from most of the villagers, fearing they wouldn't understand.",
    "One day, while wandering in the forest, Mia encountered a mischievous spirit named Kip. Unlike others, Kip was intrigued by Mia's ability and didn't shun her.",
    "As they spent time together, Mia and Kip's bond grew stronger. They explored the hidden corners of the forest, sharing stories and laughter.",
    "Mia's connection with Kip gave her a unique perspective on the world—the magic of the unseen interwoven with the ordinary.",
    "However, a dark cloud loomed over Seren as rumors of a spirit's presence spread. Fear and mistrust swept through the village, casting a shadow on Mia's world.",
    "Determined to protect her newfound friendship, Mia ventured into the heart of the village to confront the rumors head-on.",
    "With courage in her heart, she shared her secret with the villagers, revealing her ability to communicate with spirits.",
    "Initially met with skepticism, Mia's sincerity and the truth of her words began to resonate with the villagers.",
    "As they opened their hearts, they realized that their fears were born from misunderstanding and ignorance.",
    "In an unexpected turn of events, the villagers discovered that Kip was not a malicious spirit, but a playful guardian of the forest.",
    "The once-feared spirit became a symbol of unity, bridging the gap between the seen and the unseen.",
    "Mia's friendship with Kip became a beacon of hope and understanding, teaching Seren that acceptance and connection went beyond the visible.",
    "With newfound harmony, the villagers and spirits coexisted, sharing a bond that enriched their lives in ways they never imagined.",
    "Mia's gift was no longer a secret but a source of inspiration, reminding everyone that the world was far more complex—and beautiful—than they had believed.",
    "And so, the story of Mia and Kip became a testament to the power of friendship that transcended the boundaries of the seen and the unseen."];
    let currentWordIndex3 = 0;

    const story3Paragraph = document.getElementById("story3");
    const prevButton3 = document.querySelector(".prev-button3");
    const nextButton3 = document.querySelector(".next-button3");
    const readButton3 = document.querySelector(".read-button3");

    function updateWordDisplay3() {
      story3Paragraph.textContent = story3[currentWordIndex3];
    }

    function goToNextWord3() {
      if (currentWordIndex3 < story3.length - 1) {
        currentWordIndex3++;
        updateWordDisplay3();
      }
    }

    function goToPreviousWord3() {
      if (currentWordIndex3 > 0) {
        currentWordIndex3--;
        updateWordDisplay3();
      }
    }

    function readCurrentWord3() {
      const speechText3 = story3[currentWordIndex3];
      const utterance3 = new SpeechSynthesisUtterance(speechText3);
      window.speechSynthesis.speak(utterance3);
    }

    prevButton3.addEventListener("click", goToPreviousWord3);
    nextButton3.addEventListener("click", goToNextWord3);
    readButton3.addEventListener("click", readCurrentWord3);

    updateWordDisplay3();
  });