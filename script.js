<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>هدية حب - Ultimate Edition</title>
    
    <!-- Fonts & Icons -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;800&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Background Layers -->
    <div class="noise-overlay"></div>
    <canvas id="stars-canvas" class="stars-canvas"></canvas>
    <div class="floating-hearts-container" id="bg-hearts"></div>

    <!-- Login Screen (Overlay) -->
    <div id="gift-overlay">
        <!-- Falling Hearts with M inside -->
        <div class="login-falling-hearts-container" id="login-falling-hearts"></div>

        <div class="logo-container">
            <div class="letter-y">Y</div>
            <!-- Modified Logo: Heart with YM -->
            <div class="heart-logo-wrapper">
                <i class="fas fa-heart heart-bg-icon"></i>
                <span class="heart-logo-text">YM</span>
            </div>
        </div>
        <div class="login-container">
            <div class="pass-title">بحبك ياقلبي....💘M💍</div>
            <div style="margin-bottom:12px; font-size:0.8rem; color:rgba(255,255,255,0.5);">اكتب الباسورد يا حبيبت قلبي انتي يا منون.....💍💘</div>
            <input type="text" id="secret-code" placeholder="DD/MM/YYYY" autocomplete="off" onkeypress="handleEnter(event)">
            <button id="open-btn" onclick="checkPassword()">افتح يا منتي 💍</button>
            <div id="error-msg" class="error-text">كلمة المرور خاطئة</div>
        </div>
    </div>

    <!-- Image Modal -->
    <div id="image-modal" class="modal">
        <div class="modal-close-img" onclick="closeImageModal()">×</div>
        <img id="modal-img-display" class="modal-content-img" src="" alt="Memory">
    </div>

    <!-- Text Modal -->
    <div id="text-modal" class="text-modal">
        <div class="text-modal-content">
            <span class="text-modal-close" onclick="closeTextModal()">×</span>
            <h3 class="text-modal-title" id="text-modal-title"></h3>
            <p class="text-modal-text" id="text-modal-message"></p>
        </div>
    </div>

    <!-- Main Content -->
    <main id="main-content">
        <header>
            <h1>يا روح قلبي انتي كل سنه وانتي حب قلبي 2026</h1>
            <p class="subtitle">قلبي و روحي و دنيتي كله حبيبت قلبي منون.....💘💍</p>
        </header>

        <!-- Audio -->
        <section class="audio-section">
            <div class="music-note-icon"><i class="fas fa-music"></i></div>
            <audio controls loop>
                <source src="https://files.catbox.moe/czweiy.opus" type="audio/ogg">
                Your browser does not support audio element.
            </audio>
            <p style="margin-top:12px; font-size:0.8rem; color:rgba(255,255,255,0.5);">حبيب قلبي منون..... 🎧</p>
        </section>

        <!-- 17 Days Grid -->
        <section class="days-grid">
            <div class="day-card" onclick="openTextModal(1)"><div class="day-number">يوم 1</div><div class="day-icon">🤲</div><div class="day-name">إيمان</div></div>
            <div class="day-card" onclick="openTextModal(2)"><div class="day-number">يوم 2</div><div class="day-icon">🕯</div><div class="day-name">أمل</div></div>
            <div class="day-card" onclick="openTextModal(3)"><div class="day-number">يوم 3</div><div class="day-icon">❤</div><div class="day-name">حب</div></div>
            <div class="day-card" onclick="openTextModal(4)"><div class="day-number">يوم 4</div><div class="day-icon">🏆</div><div class="day-name">نجاح</div></div>
            <div class="day-card" onclick="openTextModal(5)"><div class="day-number">يوم 5</div><div class="day-icon">🤗</div><div class="day-name">عناية</div></div>
            <div class="day-card" onclick="openTextModal(6)"><div class="day-number">يوم 6</div><div class="day-icon">😃</div><div class="day-name">فرحة</div></div>
            <div class="day-card" onclick="openTextModal(7)"><div class="day-number">يوم 7</div><div class="day-icon">🌍</div><div class="day-name">حياة</div></div>
            <div class="day-card" onclick="openTextModal(8)"><div class="day-number">يوم 8</div><div class="day-icon">🔐</div><div class="day-name">الحقيقة</div></div>
            <div class="day-card" onclick="openTextModal(9)"><div class="day-number">يوم 9</div><div class="day-icon">🌈</div><div class="day-name">السعادة</div></div>
            <div class="day-card" onclick="openTextModal(10)"><div class="day-number">يوم 10</div><div class="day-icon">⏳</div><div class="day-name">الأبدية</div></div>
            <div class="day-card" onclick="openTextModal(11)"><div class="day-number">يوم 11</div><div class="day-icon">☮</div><div class="day-name">السلام</div></div>
            <div class="day-card" onclick="openTextModal(12)"><div class="day-number">يوم 12</div><div class="day-icon">⏳</div><div class="day-name">الصبر</div></div>
            <div class="day-card" onclick="openTextModal(13)"><div class="day-number">يوم 13</div><div class="day-icon">💫</div><div class="day-name">الأحلام</div></div>
            <div class="day-card" onclick="openTextModal(14)"><div class="day-number">يوم 14</div><div class="day-icon">🔥</div><div class="day-name">العشق</div></div>
            <div class="day-card" onclick="openTextModal(15)"><div class="day-number">يوم 15</div><div class="day-icon">🌹</div><div class="day-name">الوفاء</div></div>
            <div class="day-card" onclick="openTextModal(16)"><div class="day-number">يوم 16</div><div class="day-icon">🤝</div><div class="day-name">الثقة</div></div>
            <div class="day-card" onclick="openTextModal(17)"><div class="day-number">يوم 17</div><div class="day-icon">🌠</div><div class="day-name">القدر</div></div>
        </section>

        <!-- Love Post -->
        <article class="love-post">
            <div class="post-header">
                <div class="post-info">
                    <h3>لا روح قلبي منون......💍M💘</h3>
                    <span>منذ 17 يوماً • <i class="fas fa-heart"></i></span>
                </div>
            </div>
            <div class="post-content">
                <p>
                    في هذه الأيام الجميلة، اكتشفت أن الحب مش له نهاية ولا بداية، بل هو رحلة مستمرة. 
                    كل يوم معك هو <span class="highlight">بداية جديدة</span>، وكل لحظة معك هي أجمل هدية.
                    <br><br>
                    أتمنى أن يكون هذا العام هو أجمل فصول قصتنا، وأن نكمل معاً أجمل أيامنا. 
                    أنتِ لم تكوني مجرد بداية سنة، بل أنتِ كل السنوات القادمة.
                </p>
            </div>
            <div class="post-actions">
                <button class="action-btn" onclick="toggleLike(this)"><i class="fas fa-heart"></i><span>بحبك</span></button>
                <button class="action-btn"><i class="fas fa-comment"></i></button>
                <button class="action-btn"><i class="fas fa-share"></i></button>
            </div>
        </article>

        <!-- Memories Lock Section -->
        <section class="memories-section">
            <h2 class="section-title">ألبوم ذكرياتنا يا منتي و احلى ايام حياتي معاكي.... 💖</h2>
            
            <div class="memories-lock-wrapper" id="memories-lock">
                <div class="heart-shape-bg"></div>
                <div class="lock-card">
                    <!-- Modified Lock: Heart with MY -->
                    <div class="my-heart-lock">
                        <i class="fas fa-heart my-heart-icon"></i>
                        <span class="my-heart-text">MY</span>
                    </div>

                    <div class="lock-inputs">
                        <input type="text" id="album-pass" class="memories-lock-input" placeholder="كلمة السر" autocomplete="off" onkeypress="handleAlbumEnter(event)">
                        <button class="memories-lock-btn" onclick="checkAlbumPass()">افتحي يا قلبي ....💍M🥹</button>
                    </div>
                    <div id="album-error" class="album-error">كلمة السر غلط!</div>
                </div>
            </div>

            <div class="memories-grid" id="memories-grid"></div>
        </section>

        <div class="interaction-area">
            <button class="big-heart-btn" onclick="explodeHearts(event)">MY</button>
            <p style="margin-top: 20px; color: var(--primary); font-weight: bold; letter-spacing: 1px;">بحبك يا منون يا قلبي انتي....💍</p>
        </div>
    </main>

    <script src="script.js" defer></script>
</body>
</html>