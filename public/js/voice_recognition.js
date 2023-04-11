  if ("webkitSpeechRecognition" in window) {
    let speechRecognition = new webkitSpeechRecognition();
  
    let final_transcript = "";
    let recognizing = false
    // Set the properties for the Speech Recognition object
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = "en_IN";
  
    // Callback Function for the onStart Event
    speechRecognition.onstart = (event) => {
      recognizing = true
      document.querySelector("#mic-medicine-name").setAttribute('class', 'fa-duotone fa-circle-microphon');
    };
    speechRecognition.onerror = () => {
      document.querySelector("#mic-medicine-name").setAttribute('class', 'fas fa-microphone');
    };
    speechRecognition.onend = () => {
      document.querySelector("#mic-medicine-name").setAttribute('class', 'fas fa-microphone');
    };
  
    speechRecognition.onresult = (event) => {
      // Create the interim transcript string locally because we don't want it to persist like final transcript
      let interim_transcript = "";
  
      // Loop through the results from the speech recognition object.
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
  
      // Set the Final transcript and Interim transcript.
      document.querySelector("#medicine_name").setAttribute('value', final_transcript + interim_transcript);
    };

    function startButton(event) {
      if (recognizing) {
        speechRecognition.stop();
        recognizing = false
        document.querySelector("#medicine_name").setAttribute('value', final_transcript);
        console.log(final_transcript);
        return;
      }
      final_transcript = '';
      // recognition.lang = 'en-IN'
      speechRecognition.start();
      // ignore_onend = false;
      // final_span.innerHTML = '';
      // interim_span.innerHTML = '';
      // start_img.src = '/intl/en/chrome/assets/common/images/content/mic-slash.gif';
    }
  } else {
    console.log("Speech Recognition Not Available");
  }

  // <i class="fa-duotone fa-circle-microphone"></i>