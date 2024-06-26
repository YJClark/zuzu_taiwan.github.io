var male = [
    { id: "Bobo", price: 1000, imgSrc: "bobo.jpg" },
    { id: "Yorick", price: 1250, imgSrc: "yorick.jpg" },
    { id: "Clark", price: 1600, imgSrc: "clark.jpg" },
    { id: "Edison", price: 1200, imgSrc: "edison.jpg" },
    { id: "Jeff", price: 1000, imgSrc: "jeff.jpg" },
    { id: "Lu", price: 1800, imgSrc: "lu.jpg" },
    { id: "Ma", price: 1500, imgSrc: "ma.jpg" },
    { id: "Marc", price: 1450, imgSrc: "marc.jpg"},
    { id: "Austin", price: 1350, imgSrc: "min.jpg"},
    { id: "Peko", price: 1500, imgSrc: "peko.jpg"},
    { id: "Oscar", price: 2000, imgSrc: "yang.jpg" },
    { id: "Kazushun", price: 1500, imgSrc: "kozushun.JPG" }
]

var detail = [
    { mbti: "LOVE", height:"183", loc:"台中", aca:"台中一中", career:"CCP小組長", feature:"肌肉棒子", mar:"穩交", lan:"中文、英文", age:'21'},
    { mbti: "ESTJ", height:"173", loc:"台北", aca:"成功高中", career:"超級男模", feature:"男友不管，男模會館", mar:"穩交", lan:"中文、英文", age:'21'},
    { mbti: "EMO", height:"174", loc:"台南", aca:"台南一中", career:"期貨看空小丑", feature:"Sana現暈", mar:"穩單", lan:"中文、英文", age:'21'},
    { mbti: "ADHD", height:"183", loc:"台南", aca:"台南一中", career:"發明大王", feature:"顧肺", mar:"不明", lan:"中文、英文", age:'21'},
    { mbti: "AIDS", height:"170", loc:"台東", aca:"台東高中", career:"學生", feature:"內捲", mar:"穩交", lan:"中文、英文", age:'21'},
    { mbti: "ESFP", height:"183", loc:"高雄", aca:"高雄高中", career:"中捷救世主", feature:"長髮男", mar:"穩單", lan:"中文", age:'21'},
    { mbti: "ESTP", height:"183", loc:"台北", aca:"成功高中", career:"32紀錄保持人", feature:"重修就好", mar:"穩交", lan:"中文、英文", age:'21'},
    { mbti: "Notion", height:"172", loc:"台北", aca:"建國高中", career:"筆記提供者", feature:"沒腹肌+<175", mar:"穩交", lan:"中文、英文", age:'21'},
    { mbti: "ISTP", height:"178", loc:"台中",aca:"清水高中", career:"投手", feature:"小便般的曲球", mar:"穩單", lan:"中文、英文", age:'21'},
    { mbti: "INFP", height:"176", loc:"高雄",aca:"明誠高中", career:"睡魔", feature:"正在玩nm", mar:"單身", lan:"中文、英文", age:'21'},
    { mbti: "ENFJ", height:"175", loc:"台北",aca:"成功大學", career:"學生", feature:"爵士音樂", mar:"單身", lan:"中文、英文", age:'22'},
    { mbti: "Japan", height:"175", loc:"熊本",aca:"熊本某五專", career:"日本武士", feature:"我有居留證!", mar:"穩交", lan:"中文、日文", age:'22'},
]

var service = [
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、旅遊陪同、朋友聚會"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、旅遊陪同、專業職人、朋友聚會、商業應酬"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、專業職人、商業應酬、朋友聚會"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、旅遊陪同、專業職人、朋友聚會、商業應酬"},
]


function createProductTable(f) {
    var container = document.querySelector('.product-table-container');

    var table = document.createElement('table');
    table.classList.add('product-table');

        var rowNum = Math.ceil(f.length / 4);

    for (var i = 0; i < rowNum; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < 4; j++) {
            var index = i * 4 + j;
            if (index < f.length) {
                var idol = f[index];

                var td = document.createElement('td');
                td.id = idol.id;
                td.classList.add('product-item');

                var img = document.createElement('img');
                img.src = "media/male/" + idol.imgSrc;
                img.alt = idol.id;

                var p = document.createElement('p');
                p.innerHTML = idol.id + "<br>";

                var button = document.createElement('button');
                button.classList.add('detail_btn');
                button.textContent = "more";
                //這邊要改生成detail頁面的function
                button.setAttribute('data-index', index);
                td.appendChild(img);
                td.appendChild(p);
                td.appendChild(button);
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
}

createProductTable(male);

document.querySelectorAll('.detail_btn').forEach(button => {
    button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        console.log(index);
        const person = male[index];
        const personDetail = detail[index];
        const ser = service[index];
        const circle_pic = document.getElementById('circle_pic');
        
        circle_pic.src = `media/male/${person.imgSrc}`;
        circle_pic.alt = person.id;
        document.getElementById('modal-mbti').textContent = personDetail.mbti;
        document.getElementById('modal-name').textContent = person.id;
        document.getElementById('modal-height').textContent = `${personDetail.height} 公分`;
        document.getElementById('modal-aca').textContent = personDetail.aca;
        document.getElementById('modal-career').textContent = personDetail.career;
        document.getElementById('modal-mar').textContent = personDetail.mar;
        document.getElementById('modal-lan').textContent = personDetail.lan;
        document.getElementById('modal-feature').textContent = personDetail.feature;
        document.getElementById('modal-loc').textContent = personDetail.loc;
        document.getElementById('modal-age').textContent = personDetail.age;
        document.getElementById('modal-services').textContent = ser.services;
        // document.getElementById('modal-price').textContent = `NT ${person.price}`;

        document.getElementById('modal').style.opacity = 0;
        document.getElementById('modal').style.display = "block";
        setTimeout(function() {
            document.getElementById('modal').style.transition = "opacity 0.5s ease";
            document.getElementById('modal').style.opacity = 1;
        }, 10);
    });
});

document.querySelector('.close').addEventListener('click', function() {

    document.getElementById('modal').style.transition = "opacity 0.5s ease";
    document.getElementById('modal').style.opacity = 0;
    setTimeout(function() {
        document.getElementById('modal').style.display = "none";
    }, 500);
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeBtns = document.querySelectorAll('.close');
    const reserveIcon = document.getElementById('reserve-icon');
    const datePicker = document.getElementById('date-picker');
    const scheduleButton = document.getElementById('schedule-button');
    const scheduleModal = document.getElementById('schedule-modal');
    const calendar = document.getElementById('calendar');

    // Close modals
    closeBtns.forEach(btn => {
        btn.onclick = function() {
            btn.parentElement.parentElement.style.display = 'none';
            enableBackgroundInteraction();
        };
    });

    // Show date picker on icon click
    reserveIcon.onclick = function() {
        datePicker.style.display = 'block';
        scheduleButton.classList.remove('hidden');
    };

    // Set the minimum date to today for date picker
    const today = new Date().toISOString().split('T')[0];
    datePicker.setAttribute('min', today);

    // Schedule the date
    scheduleButton.onclick = function() {
        const selectedDate = datePicker.value;
        const selectedDateObj = new Date(selectedDate);
        if (selectedDate) {
            if (selectedDateObj.getMonth() > 5) {
                alert("Only June is available");
            } else {
                addScheduleToCalendar(selectedDate);
                datePicker.style.display = 'none';
                scheduleButton.classList.add('hidden');
                scheduleModal.style.display = 'block';
                disableBackgroundInteraction();
            }
        } else {
            alert('Please select a date.');
        }
    };

    // Function to add scheduled date to calendar
    function addScheduleToCalendar(date) {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
			alert('預約成功！\n電話：34101282\n姓名：克拉克');
        const calendarDays = calendar.querySelectorAll('.calendar-day');
        calendarDays.forEach(dayElem => {
            const dayDate = new Date(dayElem.dataset.date);
            if (dayDate.getDate() === day && dayDate.getMonth() + 1 === month && dayDate.getFullYear() === year) {
                const input = dayElem.querySelector('input');
                input.value = '克先生 已預定';
                dayElem.classList.add('blocked'); // Add blocked class to visually indicate it's reserved
            }
        });
    }

    // Function to create calendar for the current month
    function createCalendar() {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

        // Display current month and year in the schedule modal
        const monthYearText = document.createElement('p');
        monthYearText.textContent = `${startOfMonth.toLocaleString('default', { month: 'long' })} ${startOfMonth.getFullYear()}`;
        monthYearText.classList.add('month-year-text');
        scheduleModal.querySelector('.modal-content').insertBefore(monthYearText, calendar);

        for (let i = 1; i <= endOfMonth.getDate(); i++) {
            const day = document.createElement('div');
            day.className = 'calendar-day';
            day.dataset.date = new Date(now.getFullYear(), now.getMonth(), i).toISOString();

            const span = document.createElement('span');
            span.textContent = i;

            const input = document.createElement('input');
            input.type = 'text';
            input.disabled = true;

            day.appendChild(span);
            day.appendChild(input);
            calendar.appendChild(day);
        }
    }

    createCalendar();

    // Disable background interaction
    function disableBackgroundInteraction() {
        const elements = document.querySelectorAll('body > :not(.modal)');
        elements.forEach(element => {
            element.classList.add('disabled');
        });
    }

    // Enable background interaction
    function enableBackgroundInteraction() {
        const elements = document.querySelectorAll('body > :not(.modal)');
        elements.forEach(element => {
            element.classList.remove('disabled');
        });
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal || event.target == scheduleModal) {
            event.target.style.display = 'none';
            enableBackgroundInteraction();
        }
    };
});
