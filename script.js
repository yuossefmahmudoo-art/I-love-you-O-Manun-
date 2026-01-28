/* --- Configuration & Data --- */
const CONFIG = {
    loginPass: '3/11/2004',
    albumPass: 'I love you',
    // الصور المحددة (4 صور فقط)
    images: [
        "https://i.postimg.cc/C5CpFVYP/01K399MW4936BB4TJPP53PHVSG.jpg",
        "https://i.postimg.cc/VLBzwXkF/01K399D6KJCXSGPV7TZTHSHV8T.jpg",
        "https://i.postimg.cc/4yvRJTsR/01K111R8AHJS5G8S9ZY6V23MPX.jpg",
        "https://i.postimg.cc/90Hj5f3J/01K39A2MG2C6PGM7YQS3RX6CGN.jpg"
    ]
};

// Random Quotes List (Feature 6)
const loveQuotes = [
    "أنتِ أجمل ما حدث في حياتي..",
    "قلبي حرف واحد بس: M.",
    "لو قدرت أختار حاجة تانية غيرك.. هختاركك مرة تانية.",
    "بحبك من قلبي لآخر دم.",
    "ضحكتك دواء لكل وجعي.",
    "أنتِ بيتي وسماي وكل دنيتي.",
    "أعشق طيبة قلبك.",
    "ربنا يحفظك ليا من كل شر.",
    "أنتِ النور اللي حيي قلبي.",
    "مش بس بحبك.. أنا أعيش بيك.",
    "كل يوم بحبك أكتر من أمس.",
    "أنتِ هدية ربنا الكبرى ليا."
];

const daysMessages = {
    1: { title: "اليوم الأول: الإيمان", text: "يا أول يوم، أتمنى لك إيمان بلا شك، وقلب رضي عن ربه وعن الدنيا. ربنا يخليكي ليا طول العمر." },
    2: { title: "اليوم الثاني: الأمل", text: "يا ثاني يوم، الأمل دائم موجود مهما كان الليل قاتم. ضحكتك هي ضوءي وفرحتي هي هدفي في حياتي." },
    3: { title: "اليوم الثالث: الحب", text: "يا ثالث يوم، الحب هو اللغة اللي نفهمها بلا كلام. بحبك ياقلبي بحب لا ينتهي ولا يبدأ، مجرد حقيقة." },
    4: { title: "اليوم الرابع: النجاح", text: "يا رابع يوم، النجاح يبدأ بمحاولة بسيطة والانتهاء بتفوق عظيم. أنتي ناجحة لأنك طموحة جداً." },
    5: { title: "اليوم الخامس: العناية", text: "يا خامس يوم، العناية فيك تعني العناية بنا. ربنا يحفظك ويسترنا في حماه من كل شر." },
    6: { title: "اليوم السادس: الفرحة", text: "يا سادس يوم، الفرحة الحقيقية هي اللي بتنبع من جوا قلبك مرتاحة بالضماعة. استمتعي بكل لحظة." },
    7: { title: "اليوم السابع: الحياة", text: "يا سابع يوم، الحياة حلوة لما تكوني بجانب الشخص الصح. أجمل حاجة في حياتي إني شفتك عيني." },
    8: { title: "اليوم الثامن: الحقيقة", text: "يا ثامن يوم، الحقيقة قاسية لكنها جميلة. أنتي هي الحقيقة اللي ببحث عنها في دنيا كذابة، وبيني وبينك هي الحقيقة الوحيدة." },
    9: { title: "اليوم التاسع: السعادة", text: "يا تاسع يوم، السعادة مش بديه، هي لحظة بسيطة بتحس بيها أنك كامل. بحبك أنا سعيد ياقلبي، وهذا أغلى سعادة." },
    10: { title: "اليوم العاشر: الأبدية", text: "يا يوم عاشر، الحب اللي بينا مش له وقت محدود ولا نهاية. أبداً هحبك في كل وقت وفي كل مكان، مهما تغيرت الأيام والليالي." },
    11: { title: "اليوم الحادي عشر: السلام", text: "يا يوم حادي عشر، السلام هو اللي بينا محقق. معاك الدنيا بتصبح أهدأ والقلب بيرتاح. ربنا يخليكي ليا وتسلمي أمان دنيا وأخرة." },
    12: { title: "اليوم الثاني عشر: الصبر", text: "يا يوم 12، الصبر مفتاح الفرج، وصبري عليكي هو سر سعادتي. ربنا يلهمك الصبر على كل حلوة." },
    13: { title: "اليوم الثالث عشر: الأحلام", text: "يا يوم 13، الأحلام بتبقى واقع لما تكوني معاي. انتي حلم اللي عشته وبقى حقيقي." },
    14: { title: "اليوم الرابع عشر: العشق", text: "يا يوم 14، العشق هو اللي بيحكم قلبي تجاهك. مش بس حب، دي حالة وجدانية مش تفارقني." },
    15: { title: "اليوم الخامس عشر: الوفاء", text: "يا يوم 15، الوفاء هو الصداقة والحب في آن واحد. ربنا يديم الوفاء بيننا ويخليك أهل ثقتي كل يوم أكتر." },
    16: { title: "اليوم السادس عشر: الثقة", text: "يا يوم 16، الثقة هي جسر العبور لقلبك. أثق فيكي يا قلبي فوق كل الثقة، وكلي أمل في مستقبلنا مع بعض." },
    17: { title: "اليوم السابع عشر: القدر", text: "يا يوم 17، قدرك في حياتي هو أجمل ما كتبه الله لي. قابلك مش صدفة، هو القدر الحلو اللي جمعنا." },
    
    // الأيام الجديدة من 18 إلى 28
    18: { title: "اليوم الثامن عشر: الدفء", text: "يا يوم 18، في برد الدنيا، أنتي هو الدفء اللي بيدفني. روحك دي حاجة بتنساني إن فيه برد في الدنيا." },
    19: { title: "اليوم التاسع عشر: الصداقة", text: "يا يوم 19، قبل ما تكوني حبيبتي، أنتي أغلى صديقة في حياتي. الصداقة الأساس اللي بني عليه حبي ليك." },
    20: { title: "اليوم العشرون: التضحية", text: "يا يوم 20، التضحية الحقيقية هي اللي بتدل إنك بتحب حد لدرجة الإيثار. مستعد أبقى أي حاجة عشان بس تضحكي." },
    21: { title: "اليوم الواحد والعشرون: الحماية", text: "يا يوم 21، حلمي إني أحميك من كل حاجة زعلتكي في اللي فات. ربنا يخليك في حفظه يا دنيتي." },
    22: { title: "اليوم الثاني والعشرون: الراحة", text: "يا يوم 22، معاكي بلاقي راحة البال والقلب اللي ملقتهاش مع حد تاني. أنتي ملاذي يا حبيبتي." },
    23: { title: "اليوم الثالث والعشرون: النور", text: "يا يوم 23، كنت ب.walk في الظلام لحد ما طلعتي في حياتي. أنتي النور اللي بنيي ليا الدروب." },
    24: { title: "اليوم الرابع والعشرون: اللطف", text: "يا يوم 24، طيبة قلبك ولطف معاملتك دي أغلى ما فيكي. ربنا يحبك يا قلب طيب." },
    25: { title: "اليوم الخامس والعشرون: الوحدة", text: "يا يوم 25، إحنا مش اتنين، إحنا روح واحدة في جسمين. كل حاجة بتعملها بتحس بيها فيايا." },
    26: { title: "اليوم السادس والعشرون: الامتنان", text: "يا يوم 26، حمد ربنا كثير إنه خلقك ورزقني بيك. أكتر نعمة في حياتي يا منون." },
    27: { title: "اليوم السابع والعشرون: المستقبل", text: "يا يوم 27، مستقبلي مش بس هوي، هو مستقبلنا مع بعض. شايفنا قدام بأحلام حلوة وضحكات ملهاش نهاية." },
    28: { title: "اليوم الثامن والعشرون: الاحتفال", text: "يا يوم 28، كل يوم معاك هو احتفال. ألف مبارك لينا على كل يوم بعدنا وببقى طول العمر معاك." }
};

/* --- Initialization --- */
document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initBackgroundHearts();
    initImagesGrid();
    initLoginHearts();
    initFloatingNotes(); // Feature 4 Init
});

/* --- Password System --- */
function handleEnter(e) { if(e.key === "Enter") checkPassword(); }
 
function checkPassword() {
    const input = document.getElementById('secret-code');
    const errorMsg = document.getElementById('error-msg');
 
    if(input.value.trim() === CONFIG.loginPass) {
        playSound('magic');
        const overlay = document.getElementById('gift-overlay');
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
 
        setTimeout(() => {
            overlay.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            const audio = document.querySelector('audio');
            if(audio) audio.play().catch(e => console.log('Auto-play prevented'));
        }, 1000);
    } else {
        playSound('click');
        errorMsg.classList.add('visible');
        input.classList.add('shake-anim');
        setTimeout(() => {
            input.classList.remove('shake-anim');
            errorMsg.classList.remove('visible');
        }, 1500);
    }
}

/* --- Album Lock System --- */
function handleAlbumEnter(e) { if(e.key === "Enter") checkAlbumPass(); }

function checkAlbumPass() {
    const input = document.getElementById('album-pass');
    const errorMsg = document.getElementById('album-error');
    const val = input.value.trim();
 
    if (val.toLowerCase() === CONFIG.albumPass.toLowerCase()) {
        playSound('magic');
        const lockWrapper = document.getElementById('memories-lock');
        const grid = document.getElementById('memories-grid');
 
        lockWrapper.style.transform = 'scale(0.9)';
        lockWrapper.style.opacity = '0';
 
        setTimeout(() => {
            lockWrapper.style.display = 'none';
            grid.style.display = 'grid';
        },500);
 
    } else {
        playSound('click');
        errorMsg.classList.add('visible');
        input.classList.add('shake-anim');
        setTimeout(() => {
            input.classList.remove('shake-anim');
            errorMsg.classList.remove('visible');
        }, 1000);
    }
}

/* --- Modals --- */
const imgModal = document.getElementById('image-modal');
const textModal = document.getElementById('text-modal');

function openImageModal(src) {
    document.getElementById('modal-img-display').src = src;
    imgModal.classList.add('show');
    playSound('click');
}
function closeImageModal() { imgModal.classList.remove('show'); }
 
imgModal.addEventListener('click', (e) => { if (e.target === imgModal) closeImageModal(); });

// Feature 2: Typewriter Effect Function
function typeWriter(text, element, speed = 30) {
    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function openTextModal(day) {
    playSound('magic');
    document.getElementById('text-modal-title').innerText = daysMessages[day].title;
    const messageElement = document.getElementById('text-modal-message');
    
    textModal.style.display = 'flex';
    setTimeout(() => textModal.classList.add('show'), 10);
    
    // Use Typewriter Effect
    typeWriter(daysMessages[day].text, messageElement);
}

function closeTextModal() {
    playSound('click');
    textModal.classList.remove('show');
    setTimeout(() => textModal.style.display = 'none', 300);
}
textModal.addEventListener('click', (e) => { if (e.target === textModal) closeTextModal(); });

// Feature 6: Random Quote Function
function showRandomQuote() {
    playSound('click');
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    const randomQuote = loveQuotes[randomIndex];
    
    document.getElementById('text-modal-title').innerText = "رسالة خاصة لك ❤️";
    const messageElement = document.getElementById('text-modal-message');
    
    textModal.style.display = 'flex';
    setTimeout(() => textModal.classList.add('show'), 10);
    
    typeWriter(randomQuote, messageElement);
}

/* --- Visual Effects: Stars --- */
function initStars() {
    const canvas = document.getElementById('stars-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
 
    function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    resize();

    const stars = Array.from({ length: window.innerWidth < 600 ? 80 : 150 }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        r: Math.random() * 1.5, a: Math.random(),
        s: Math.random() * 0.15 + 0.05
    }));

    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "white";
        stars.forEach(s => {
            ctx.globalAlpha = s.a;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
            s.y -= s.s;
            if(s.y < 0) s.y = height;
        });
        requestAnimationFrame(animate);
    }
    animate();
}

/* --- Visual Effects: Falling Hearts with M on Login --- */
function initLoginHearts() {
    const container = document.getElementById('login-falling-hearts');
    const count = 15;
 
    for (let i = 0; i < count; i++) {
        const heartWrapper = document.createElement('div');
        heartWrapper.className = 'm-heart-fall';
 
        const icon = document.createElement('i');
        icon.className = 'fas fa-heart';
        heartWrapper.appendChild(icon);
 
        const span = document.createElement('span');
        span.innerText = 'M';
        heartWrapper.appendChild(span);

        heartWrapper.style.left = Math.random() * 100 + '%';
        heartWrapper.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heartWrapper.style.animationDelay = Math.random() * 5 + 's';
 
        const size = 1.5 + Math.random() * 1.5;
        heartWrapper.style.fontSize = size + 'rem';
 
        container.appendChild(heartWrapper);
    }
}

/* --- Feature 4: Floating Notes --- */
function initFloatingNotes() {
    const container = document.getElementById('floating-notes-container');
    const notesContent = ["أنتِ الأحلى", "بحبك", "M forever", "أنتي كل حاجة", "قلبي"];
    const colors = ['floating-note', 'floating-note blue', 'floating-note pink'];
    
    for (let i = 0; i < 6; i++) {
        const note = document.createElement('div');
        note.className = colors[Math.floor(Math.random() * colors.length)];
        note.innerText = notesContent[i % notesContent.length];
        
        note.style.left = Math.random() * 90 + '%'; // Avoid extremes
        note.style.fontSize = (0.8 + Math.random() * 0.4) + 'rem';
        note.style.animationDuration = (15 + Math.random() * 10) + 's';
        note.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(note);
    }
}

/* --- Visual Effects: Background Hearts --- */
function initBackgroundHearts() {
    const container = document.getElementById('bg-hearts');
    const count = window.innerWidth < 600 ? 12 : 25;
 
    for (let i = 0; i < count; i++) {
        const h = document.createElement('div');
        h.className = 'heart-particle';
        h.innerHTML = '<i class="fas fa-heart"></i>';
        h.style.left = Math.random() * 100 + 'vw';
        h.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
        h.style.animationDuration = (Math.random() * 10 + 12) + 's';
        h.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(h);
    }
}

/* --- Visual Effects: Explosion --- */
function explodeHearts(e) {
    playSound('love');
    const count = window.innerWidth < 600 ? 20 : 35;
 
    for(let i=0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        heart.style.position = 'fixed';
        heart.style.color = ['#ff0055', '#ff2e63', '#ffd700', '#fff'][Math.floor(Math.random()*4)];
        heart.style.fontSize = '1.2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.transition = 'all 0.8s ease-out';
        document.body.appendChild(heart);
 
        setTimeout(() => {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 150 + 50;
            heart.style.transform = `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px) scale(0) rotate(${Math.random()*360}deg)`;
        }, 10);
        setTimeout(() => heart.remove(), 800);
    }
}

/* --- Interaction Logic --- */
function toggleLike(btn) {
    playSound('love');
    btn.classList.toggle('liked');
    if(btn.classList.contains('liked')) {
        const rect = btn.getBoundingClientRect();
        explodeHearts({ clientX: rect.left + rect.width/2, clientY: rect.top + rect.height/2 });
    }
}

function initImagesGrid() {
    const grid = document.getElementById('memories-grid');
    CONFIG.images.forEach((src, idx) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.onclick = () => openImageModal(src);
        card.style.animation = `fadeInGrid 0.5s ease forwards ${idx * 0.1}s`;
        card.style.opacity = '0'; 
        const img = document.createElement('img');
        img.src = src;
        card.appendChild(img);
        grid.appendChild(card);
    });
}

/* --- Audio Context (Synthesized Sounds) --- */
let audioCtx;
function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playSound(type) {
    initAudio();
    const osc = audioCtx.createOscillator(); 
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
 
    const now = audioCtx.currentTime;
 
    if(type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, now); 
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
        gain.gain.setValueAtTime(0.05, now); 
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(); osc.stop(now + 0.1);
    } else if (type === 'magic') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now); 
        osc.frequency.linearRampToValueAtTime(800, now + 0.3);
        gain.gain.setValueAtTime(0.05, now); 
        gain.gain.linearRampToValueAtTime(0, now + 0.3);
        osc.start(); osc.stop(now + 0.3);
    } else if (type === 'love') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, now); 
        osc.frequency.linearRampToValueAtTime(600, now + 0.2);
        gain.gain.setValueAtTime(0.1, now); 
        gain.gain.linearRampToValueAtTime(0, now + 0.2);
        osc.start(); osc.stop(now + 0.2);
    }
}