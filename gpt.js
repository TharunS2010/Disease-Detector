const apiKey = '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';
   const apiUrl = 'https://api.openai.com/v1/chat/completions';
   
   const query = 'What is the capital of France?';
   const messages = [
     { 'role': 'system', 'content': 'You are a helpful assistant.' },
     { 'role': 'user', 'content': query },
   ];
   
   fetch(apiUrl, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${apiKey}`
     },
     body: JSON.stringify({
       'messages': messages,
     })
   })
     .then(response => response.json())
     .then(data => {
       const reply = data.choices[0].message.content;
       console.log('Reply:', reply);
       // Handle the generated response here
     })
     .catch(error => {
       console.error('Error:', error);
       // Handle the error here
     });
   