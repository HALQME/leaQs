chrome.runtime.onMessage.addListener((e=>{"displaySummary"===e.action&&function(e,t){const n=document.getElementById("container"),c=document.createElement("h1");c.textContent=`${t}`,info.appendChild(c),e.forEach(((e,t)=>{if(e.index!==t){const c=document.createElement("p");c.textContent=`Error: Quiz index mismatch. Expected: ${t}, Actual: ${e.index}`,c.style.color="red",c.style.fontWeight="bold",n.appendChild(c)}const c=document.createElement("div");c.classList.add("quiz-item");const d=document.createElement("h2");d.textContent=`（${t+1}）`,c.appendChild(d);const o=document.createElement("div");if(o.classList.add("quiz-question"),e.question.forEach((e=>{const t=document.createElement("p");t.textContent=e,o.appendChild(t)})),c.appendChild(o),e.image)for(let t=0;t<e.image.length;t++){console.log(e.image[t]);const n=document.createElement("img");n.src=e.image[t],n.alt=`問題の画像 #${t+1} `,c.appendChild(n)}if(e.choices){const t=document.createElement("ul");if(e.choices.forEach((e=>{const n=document.createElement("li");e.forEach((e=>{const t=document.createElement("p");t.textContent=e,n.appendChild(t)})),t.appendChild(n)})),c.appendChild(t),e.correct&&e.answer){const t=document.createElement("p");t.classList.add("quiz-example"),t.textContent=`正解: ${e.correct}`,c.appendChild(t);const n=document.createElement("p");n.classList.add("quiz-userAnswer-incorrect"),n.textContent=`回答: ${e.answer}`,c.appendChild(n)}}else{if(e.correct){const t=document.createElement("p");t.classList.add("quiz-example"),t.textContent=`正解: ${e.correct}`,c.appendChild(t)}if(e.answer){const t=document.createElement("p");t.classList.add("quiz-userAnswer"),t.textContent=`回答: ${e.answer}`,c.appendChild(t)}}n.appendChild(c)}))}(e.quizData,e.classAndSection)}));