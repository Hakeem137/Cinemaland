
    // مصفوفة الأفلام مع التفاصيل الخاصة بالكاروسيل في الهيرو
    const movies = [
      {
        title: "Oppenheimer 2023",
        description: "فيلم أوبنهايمر يروي قصة العالم الفيزيائي الذي قاد مشروع مانهاتن لتطوير القنبلة الذرية...",
        image: "https://i.postimg.cc/zD43xqsZ/image.png",
        category: "دراما، سيرة ذاتية، تاريخ",
        runtime: "3 ساعات",
        rating: "8.3/10",
        director: "كريستوفر نولان",
        release: "2023"
      },
      {
        title: "Venom the last dance",
        description: "فيلم فينوم يكشف المزيد عن قصة المضاد للبطل الخارق، مع تفاصيل حقيقية مثيرة.",
        image: "https://i.postimg.cc/CLyrSf3v/wp14473212-venom-the-last-dance-movie-wallpapers.png",
        category: "أكشن، رعب، خيال علمي",
        runtime: "2.5 ساعات",
        rating: "7.5/10",
        director: "أنطونيو ديلوفو",
        release: "2022"
      },
      {
        title: "Spider-Man: No Way Home",
        description: "فيلم سبايدر مان يستعرض عودة شخصيات متعددة من أبعاد مختلفة مع تفاصيل مذهلة.",
        image: "https://i.postimg.cc/ZqYDXtG4/wallpapersden-com-offical-spider-man-no-way-home-3840x2160.jpg",
        category: "أكشن، مغامرة، خيال علمي",
        runtime: "2.8 ساعات",
        rating: "8.7/10",
        director: "جون واتس",
        release: "2021"
      },
      {
        title: "The Batman",
        description: "فيلم ذا باتمان يقدم رؤية مظلمة ومختلفة لعالم البطل الشهير مع تفاصيل دقيقة.",
        image: "http://i.postimg.cc/Ss3TXXJx/543186.jpg",
        category: "أكشن، جريمة، إثارة",
        runtime: "2.5 ساعات",
        rating: "8.0/10",
        director: "مات ريفز",
        release: "2022"
      }
    ];

    let currentMovieIndex = 0;
    const hero = document.querySelector('.hero');
    const titleEl = document.querySelector('.movie-info h1');
    const descriptionEl = document.querySelector('.movie-info .description');
    const detailsEl = document.querySelector('.movie-details');

    function updateDots() {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentMovieIndex);
      });
    }

    function updateMovie() {
      const movie = movies[currentMovieIndex];
      hero.style.backgroundImage = 'url(' + movie.image + ')';
      titleEl.textContent = movie.title;
      descriptionEl.textContent = movie.description;
      detailsEl.innerHTML = `<span>التصنيف: ${movie.category}</span>
                             <span><span class="material-icons" style="vertical-align: middle;">hourglass_empty</span> ${movie.runtime}</span>
                             <span><span class="material-icons" style="vertical-align: middle;">star</span> ${movie.rating}</span>
                             <span>المخرج: ${movie.director}</span>
                             <span>تاريخ الإصدار: ${movie.release}</span>`;
      updateDots();
    }

    document.querySelector('.next').addEventListener('click', function() {
      currentMovieIndex = (currentMovieIndex + 1) % movies.length;
      updateMovie();
    });

    document.querySelector('.prev').addEventListener('click', function() {
      currentMovieIndex = (currentMovieIndex - 1 + movies.length) % movies.length;
      updateMovie();
    });

    updateMovie();

    // كود لتبديل مجموعات البوسترات في شرائح الأفلام
    document.querySelectorAll('.movie-slider-container').forEach(container => {
      const group1 = container.querySelector('.poster-group.group1');
      const group2 = container.querySelector('.poster-group.group2');
      const btnRight = container.querySelector('.slider-nav-right');
      const btnLeft = container.querySelector('.slider-nav-left');

      btnRight.addEventListener('click', () => {
        group1.style.display = 'flex';
        group2.style.display = 'none';
      });

      btnLeft.addEventListener('click', () => {
        group2.style.display = 'flex';
        group1.style.display = 'none';
      });
    });
  


  function checkUserSession() {
    const email = localStorage.getItem("userEmail");
    const name = localStorage.getItem("userName");
    if (email && name) {
      document.querySelector(".auth-buttons").innerHTML = `
        <span style="color: white; font-weight: bold;">مرحباً، ${name}</span>
        <button id="logout-btn" style="background:red;border:none;color:white;padding:10px 15px;border-radius:20px;cursor:pointer;">تسجيل الخروج</button>
      `;
      document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userName");
        location.reload();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const authModal = document.getElementById("auth-modal");
    const authTitle = document.getElementById("auth-title");
    const authEmail = document.getElementById("auth-email");
    const authPassword = document.getElementById("auth-password");
    const authUsername = document.getElementById("auth-username");
    const authSubmit = document.getElementById("auth-submit");
    const toggleAuth = document.getElementById("toggle-auth");
    let isLogin = true;

    document.querySelector(".login").addEventListener("click", () => {
      isLogin = true;
      authTitle.textContent = "تسجيل الدخول";
      authSubmit.textContent = "دخول";
      authUsername.style.display = "none";
      authModal.style.display = "flex";
    });

    document.querySelector(".register").addEventListener("click", () => {
      isLogin = false;
      authTitle.textContent = "تسجيل مستخدم جديد";
      authSubmit.textContent = "تسجيل";
      authUsername.style.display = "block";
      authModal.style.display = "flex";
    });

    toggleAuth.addEventListener("click", () => {
      isLogin = !isLogin;
      authTitle.textContent = isLogin ? "تسجيل الدخول" : "تسجيل مستخدم جديد";
      authSubmit.textContent = isLogin ? "دخول" : "تسجيل";
      authUsername.style.display = isLogin ? "none" : "block";
    });

    authSubmit.addEventListener("click", () => {
      const email = authEmail.value.trim();
      const password = authPassword.value.trim();
      const username = authUsername.value.trim();

      if (!email || !password || (!isLogin && !username)) {
        alert("يرجى ملء جميع الحقول.");
        return;
      }

      if (isLogin) {
        const storedPassword = localStorage.getItem("user:" + email);
        const storedName = localStorage.getItem("user:" + email + ":name");
        if (storedPassword && storedPassword === password) {
          localStorage.setItem("userEmail", email);
          localStorage.setItem("userName", storedName || email);
          authModal.style.display = "none";
          checkUserSession();
        } else {
          alert("بيانات غير صحيحة.");
        }
      } else {
        if (localStorage.getItem("user:" + email)) {
          alert("البريد مستخدم مسبقًا.");
        } else {
          localStorage.setItem("user:" + email, password);
          localStorage.setItem("user:" + email + ":name", username);
          localStorage.setItem("userEmail", email);
          localStorage.setItem("userName", username);
          authModal.style.display = "none";
          checkUserSession();
        }
      }
    });

    checkUserSession();
  });
