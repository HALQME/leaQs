chrome.runtime.onMessage.addListener(((e,t,n)=>{"displaySummary"===e.action&&function(e,t){const n=document.getElementById("container"),c=document.createElement("h2");c.textContent=`${t}`,info.appendChild(c),e.forEach(((e,t)=>{const c=document.createElement("div");c.classList.add("quiz-item");const a=document.createElement("h2");if(a.textContent=`（${t+1}） ${e.question}`,c.appendChild(a),e.image)for(let t=0;t<e.choices.length;t++){const n=document.createElement("img");n.src=e.image[t],n.alt=`問題の画像 #${t+1} `,c.appendChild(n)}if(e.choices){const t=document.createElement("ul");e.choices.forEach((e=>{const n=document.createElement("li");n.textContent=e,t.appendChild(n)})),c.appendChild(t)}if(e.correct){const t=document.createElement("p");t.classList.add("quiz-example"),t.textContent=`正解: ${e.correct}`,c.appendChild(t)}if(e.answer){const t=document.createElement("p");t.classList.add("quiz-userAnswer"),t.textContent=`回答: ${e.answer}`,c.appendChild(t)}n.appendChild(c)}))}(e.quizData,e.classAndSection)}));