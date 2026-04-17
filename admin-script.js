// ===================================================
//   admin-script.js — PS:LAB Admin Dashboard v2
// ===================================================

// ---- Real Student Data (sourced from all 10 report.html files) ----
const STUDENTS = [
    {
        id: 1,
        name: '홍지민',
        school: '인천신현고등학교 3학년 (일반고)',
        grade: '3학년',
        major: '사회학/미디어 지망',
        gpa: 2.27,
        gpaHistory: [3.1, 2.5, 2.7, 2.1],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '국3 / 수3 / 영3 / 탐3',
        mentors: ['전동훈 (한양대 공과대학)', '배제욱 (한양대 자연과학대학)', '유준환 (고려대 경영학부)'],
        targets: ['한양대 경영학부 (소신)', '경희대 경영대학 (적정)', '국민대 경영학부 (안정)'],
        status: 'complete',
        date: '2026.04.16',
        report: './reports/hong/report.html',
        note: '리포트 완성 및 배포 완료. 1학년 3.1에서 출발 후 2-2학기 2.1로 극적 우상향. 수능 최저 리스크 주의, 3학년 수학·국어 내신 방어 최우선.',
        color: '#3b82f6',
    },
    {
        id: 2,
        name: '윤혜정',
        school: '상원고등학교 2학년 (경기권 일반고)',
        grade: '2학년',
        major: '화학공학 전문가',
        gpa: 1.56,
        gpaHistory: [1.42, 1.69],
        gpaLabels: ['1-1', '1-2'],
        mock: '해당 없음 (2학년)',
        mentors: ['전동훈 (한양대 공과대학)', '고대현 (경희대 이과대학)'],
        targets: ['연세대·고려대 화공생명공학 (상향)', '서강대·성균관대·한양대 화학공학 (소신)', '중앙대·경희대 화학공학 (적정)'],
        status: 'complete',
        date: '2026.04.15',
        report: './reports/yoon/report.html',
        note: '리포트 완성 및 배포 완료. 5등급제 1.56 최상위권. 1-2학기 공통수학 B 성취도가 아쉬움. 톡사이언스반 비타민C 아이오딘 적정 실험 일반고 최고급 평가. 비교과 파편화 금지.',
        color: '#8b5cf6',
    },
    {
        id: 3,
        name: '박지윤',
        school: '상일여자고등학교 3학년',
        grade: '3학년',
        major: '글로벌 커뮤니케이션',
        gpa: 2.67,
        gpaHistory: [2.32, 2.32, 3.15, 3.15],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '국2 / 수3 / 영2 / 탐2',
        mentors: ['유준환 (고려대 경영학부)', '고대현 (경희대 이과대학)'],
        targets: ['중앙대 영어영문/글로벌·경희대 국제학과 (상향)', '숙명여대 홍보광고·동국대 미디어커뮤니케이션 (소신)', '세종대·국민대·숭실대 (안정)'],
        status: 'complete',
        date: '2026.04.14',
        report: './reports/park-jiyoon/report.html',
        note: '리포트 완성 및 배포 완료. 1학년 2.32 → 2학년 3.15 우하락. 영어연극반 연출·번역 및 카피 창작 탁월. 3-1 V자 반등이 핵심. 모의고사 국2·탐2로 최저 확보 가능.',
        color: '#10b981',
    },
    {
        id: 4,
        name: '황예린',
        school: '고림고등학교 3학년',
        grade: '3학년',
        major: '화학공학 etc',
        gpa: 2.69,
        gpaHistory: [2.5, 2.7, 2.8, 2.8],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '국3 / 수4 / 영3 / 탐3',
        mentors: ['전동훈 (한양대 공과대학)', '고대현 (경희대 이과대학)'],
        targets: ['한양대·중앙대·경희대 화학공학 (소신)', '인하대·아주대 화학공학 (적정)', '국민대·세종대 (안정)'],
        status: 'complete',
        date: '2026.04.13',
        report: './reports/hwang/report.html',
        note: '리포트 전달 완료. 학부모 만족도 확인 예정. 화학공학 세특 보강 조언 완료.',
        color: '#f59e0b',
    },
    {
        id: 5,
        name: '조이현',
        school: '산본고등학교 3학년 (일반고)',
        grade: '3학년',
        major: '행정학 / 공공 정책 지망',
        gpa: 3.4,
        gpaHistory: [3.2, 3.5, 3.6, 3.3],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '국4 / 수5 / 영3 / 탐3',
        mentors: ['유준환 (고려대 경영학부)', '고대현 (경희대 이과대학)'],
        targets: ['서울시립대·경희대 행정학 (소신)', '국민대·세종대·숙명여대 (적정)', '인하대·단국대 (안정)'],
        status: 'complete',
        date: '2026.04.13',
        report: './reports/cho/report.html',
        note: '리포트 전달 완료. 공행 계열 생기부 맞춤 완성.',
        color: '#ec4899',
    },
    {
        id: 6,
        name: '정은진',
        school: '진건고등학교 3학년 (경기권 일반고)',
        grade: '3학년',
        major: '법학과 지망',
        gpa: 3.39,
        gpaHistory: [3.0, 3.5, 3.8, 3.1],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '국3 / 수4 / 영3 / 탐3',
        mentors: ['유준환 (고려대 경영학부)', '고대현 (경희대 이과대학)'],
        targets: ['경희대·한국외대 법학(상향)', '숙명여대·동국대(소신)', '세종대·국민대(안정)'],
        status: 'complete',
        date: '2026.04.12',
        report: './reports/jeong/report.html',
        note: '법학 계열 최고 완성도. 최초 레퍼런스 사례. 전달 완료.',
        color: '#14b8a6',
    },
    {
        id: 7,
        name: '손용주',
        school: '용남고등학교 3학년 (충남 계룡 · 일반고)',
        grade: '3학년',
        major: '건설/환경공학 지망',
        gpa: 1.85,
        gpaHistory: [1.7, 1.9, 1.95, 1.85],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '국2 / 수3 / 영2 / 탐2',
        mentors: ['전동훈 (한양대 공과대학)', '고대현 (경희대 이과대학)'],
        targets: ['한양대·중앙대 건설환경공학 (소신)', '인하대·아주대 (적정)', '국민대·세종대 (안정)'],
        status: 'complete',
        date: '2026.04.11',
        report: './reports/son/report.html',
        note: '충남 계룡. 농어촌 전형 혜택 여부 검토 완료. 내신 1.85 안정권, 건설환경공학 세특 우수.',
        color: '#f97316',
    },
    {
        id: 8,
        name: '심지후',
        school: '안중고 3학년 (농어촌 대상)',
        grade: '3학년',
        major: '화학공학 기술자',
        gpa: 2.02,
        gpaHistory: [1.8, 2.1, 2.2, 2.0],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '국3 / 수4 / 영3 / 탐3',
        mentors: ['전동훈 (한양대 공과대학)', '배제욱 (한양대 자연과학대학)', '고대현 (경희대 이과대학)'],
        targets: ['충남대·충북대·경북대 화학공학 (소신, 농어촌)', '한양대ERICA·인하대·아주대 (적정)', '국민대·세종대 (안정)'],
        status: 'complete',
        date: '2026.04.10',
        report: './reports/shim/report.html',
        note: '안중읍 소재 → 농어촌 전형 대상. 화학공학 세특 보강 조언 완료.',
        color: '#6366f1',
    },
    {
        id: 9,
        name: '박정은',
        school: '남해제일고등학교 3학년 (농어촌 전형 가능)',
        grade: '3학년',
        major: '환경공학 지망',
        gpa: 2.52,
        gpaHistory: [1.86, 2.5, 3.0, 2.88],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '국4 / 수4 / 영2 / 탐4',
        mentors: ['전동훈 (한양대 공과대학)', '배제욱 (한양대 자연과학대학)', '고대현 (경희대 이과대학)'],
        targets: ['서강대·성균관대·한양대 환경공학 (소신, 농어촌)', '중앙대 탐구형·경희대 네오르네상스 (소신)', '인하대·아주대·국민대 (안정)'],
        status: 'complete',
        date: '2026.04.09',
        report: './reports/park/report.html',
        note: '남해 소재 → 농어촌 전형 가능. 비스페놀A 45일 실험, 죽방렴 해양쓰레기 포집 등 생기부 압도적. 수능 최저 리스크 매우 높음. 탐구형/면접형 학종 우선.',
        color: '#a855f7',
    },
    {
        id: 10,
        name: '김채윤',
        school: '경기 일반고 3학년 진학 예정',
        grade: '3학년 진학 예정',
        major: '국어국문/미디어',
        gpa: 2.02,
        gpaHistory: [1.9, 1.95, 2.0, 2.09],
        gpaLabels: ['1-1', '1-2', '2-1', '2-2'],
        mock: '국2 / 수6 / 영4 / 탐1',
        mentors: ['유준환 (고려대 경영대학)', '김호민 (서울대 경제학부)', '고대현 (경희대 이과대학)'],
        targets: ['경희대·이화여대·서울시립대 미디어/국어국문 기회균형 (상향)', '숙명여대·동국대 최저없는 학종 (소신)', '건국대·홍익대·숙명여대 교과전형 (적정)'],
        status: 'complete',
        date: '2026.04.08',
        report: './reports/kim/report.html',
        note: '국어 4학기 연속 1등급, 수학 6등급은 아킬레스건. 카드뉴스 피드백 루프 실무 기획 역량 탁월. 수능 최저 없는 서류형 학종 우선. 기회균형/농어촌 전형 활용.',
        color: '#0ea5e9',
    },
];

// ---------- Utilities ----------
function getStatusLabel(s) {
    if (s === 'complete') return '<span class="status-badge complete">완료</span>';
    if (s === 'progress') return '<span class="status-badge progress">진행 중</span>';
    return '<span class="status-badge pending">대기 중</span>';
}
function getInitials(name) { return name.slice(0, 1); }

// =============================================
// SPA Navigation
// =============================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            switchPage(page);
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('show');
            }
        });
    });
}

function switchPage(page) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item[data-page]').forEach(n => n.classList.remove('active'));
    const target = document.getElementById(`page-${page}`);
    if (target) target.classList.add('active');
    const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (navItem) navItem.classList.add('active');
}

// =============================================
// Sidebar Toggle
// =============================================
function initSidebar() {
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    if (menuToggle) menuToggle.addEventListener('click', () => sidebar.classList.add('show'));
    if (closeSidebar) closeSidebar.addEventListener('click', () => sidebar.classList.remove('show'));
}

// =============================================
// Notification Dropdown
// =============================================
function initNotifDropdown() {
    const btn = document.getElementById('notifBtn');
    const dropdown = document.getElementById('notifDropdown');
    if (!btn || !dropdown) return;
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => dropdown.classList.remove('show'));
}

// =============================================
// KPI Count-up Animation
// =============================================
function countUp(el, target, prefix = '', suffix = '', format = 'number') {
    const duration = 1200;
    const start = Date.now();
    const step = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        let display;
        if (format === 'money') {
            display = prefix + current.toLocaleString('ko-KR');
        } else {
            display = prefix + current.toLocaleString() + suffix;
        }
        el.textContent = display;
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

function updateDynamicKPIs() {
    let total = STUDENTS.length;
    let complete = 0;
    let progress = 0;
    
    STUDENTS.forEach(s => {
        if (s.status === 'complete') complete++;
        if (s.status === 'progress') progress++;
    });

    const kpiTotal = document.getElementById('kpiTotalStudents');
    const kpiProgress = document.getElementById('kpiProgress');
    const kpiComplete = document.getElementById('kpiComplete');
    
    if (kpiTotal) countUp(kpiTotal, total, '', '명');
    if (kpiProgress) {
        countUp(kpiProgress, progress, '', '명');
        // Update progress bar width dynamically
        const progressFill = kpiProgress.nextElementSibling.nextElementSibling.querySelector('.kpi-fill');
        if(progressFill) progressFill.style.width = (total === 0 ? 0 : (progress/total)*100) + '%';
    }
    if (kpiComplete) {
        countUp(kpiComplete, complete, '', '건');
        // Update complete bar width dynamically
        const completeFill = kpiComplete.nextElementSibling.nextElementSibling.querySelector('.kpi-fill');
        if(completeFill) completeFill.style.width = (total === 0 ? 0 : (complete/total)*100) + '%';
    }
    
    // Update sidebar badges
    const badgeStudents = document.getElementById('badgeStudents');
    const badgeReports = document.getElementById('badgeReports');
    if (badgeStudents) badgeStudents.textContent = total;
    if (badgeReports) badgeReports.textContent = complete;
}

function initKPICounters() {
    // Other legacy static KPI counters
    document.querySelectorAll('.kpi-value[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const format = el.dataset.format || 'number';
        setTimeout(() => countUp(el, target, prefix, suffix, format), 200);
    });
    
    // Call dynamic KPI
    updateDynamicKPIs();
}

function renderActivityTimeline() {
    const list = document.getElementById('activityList');
    if (!list) return;
    
    // Copy array and sort by date descending
    const sortedStudents = [...STUDENTS].sort((a,b) => new Date(b.date) - new Date(a.date));
    const recentStudents = sortedStudents.slice(0, 6); // show latest 6
    
    list.innerHTML = '';
    recentStudents.forEach(s => {
        const isComplete = (s.status === 'complete');
        const colorClass = isComplete ? 'green' : 'blue';
        const statusText = isComplete ? '리포트 전달 완료' : '컨설팅 진행 시작';
        const tagHTML = getStatusLabel(s.status).replace('status-badge', 'a-tag');
        
        list.innerHTML += `
            <div class="activity-item">
                <div class="activity-dot ${colorClass}"></div>
                <div class="activity-body">
                    <p><strong>${s.name}</strong> ${statusText} ${tagHTML}</p>
                    <span class="a-time">${s.date}</span>
                </div>
            </div>
        `;
    });
}

// =============================================
// Charts
// =============================================
Chart.defaults.color = '#64748b';
Chart.defaults.font.family = "'Inter', sans-serif";

function initCharts() {
    // Grade Bar Chart — 실제 학생 데이터 기반
    const gradeCtx = document.getElementById('gradeChart');
    if (gradeCtx) {
        // 실제 STUDENTS 배열에서 학년 집계
        const gradeCounts = { '1학년': 0, '2학년': 0, '3학년': 0 };
        STUDENTS.forEach(s => {
            if (s.grade.includes('1학년')) gradeCounts['1학년']++;
            else if (s.grade.includes('2학년')) gradeCounts['2학년']++;
            else if (s.grade.includes('3학년')) gradeCounts['3학년']++;
        });
        new Chart(gradeCtx, {
            type: 'bar',
            data: {
                labels: ['1학년', '2학년', '3학년'],
                datasets: [{
                    label: '학생 수',
                    data: [gradeCounts['1학년'], gradeCounts['2학년'], gradeCounts['3학년']],
                    backgroundColor: ['rgba(59,130,246,0.6)', 'rgba(139,92,246,0.6)', 'rgba(16,185,129,0.6)'],
                    borderRadius: 6, borderSkipped: false,
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false },
                    tooltip: { backgroundColor: '#1a2235', titleColor: '#f1f5f9', bodyColor: '#94a3b8', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 10, cornerRadius: 10 }
                },
                scales: {
                    x: { grid: { display: false, drawBorder: false } },
                    y: { grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false }, ticks: { stepSize: 1 }, beginAtZero: true }
                }
            }
        });
    }
}

// =============================================
// Student Table
// =============================================
function renderStudentTable(filter = '') {
    const tbody = document.getElementById('studentTableBody');
    if (!tbody) return;
    const filtered = filter
        ? STUDENTS.filter(s => s.name.includes(filter) || s.school.includes(filter))
        : STUDENTS;

    tbody.innerHTML = filtered.map((s, i) => `
        <tr>
            <td style="color:var(--text-3)">${i + 1}</td>
            <td>
                <div class="student-name-cell">
                    <div class="s-avatar" style="background:${s.color}22; color:${s.color};">${getInitials(s.name)}</div>
                    <strong>${s.name}</strong>
                </div>
            </td>
            <td>
                <div style="font-weight:500;">${s.school}</div>
                <div style="font-size:0.76rem; color:var(--text-3);">${s.grade}</div>
            </td>
            <td style="font-size:0.84rem; color:var(--text-2);">${s.major}</td>
            <td>
                <a class="report-link" href="${s.report}" target="_blank">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> 열기
                </a>
            </td>
            <td>${getStatusLabel(s.status)}</td>
            <td><button class="btn-action" onclick="openStudentModal(${s.id})">상세</button></td>
        </tr>
    `).join('');
}

// =============================================
// Report Grid
// =============================================
function renderReportGrid() {
    const grid = document.getElementById('reportGrid');
    if (!grid) return;
    const completed = STUDENTS.filter(s => s.status === 'complete');
    grid.innerHTML = completed.map(s => `
        <div class="card report-card">
            <div class="report-card-top">
                <div class="report-card-avatar" style="background:${s.color}22; color:${s.color};">${getInitials(s.name)}</div>
                <div class="report-card-info">
                    <h4>${s.name}</h4>
                    <p>${s.school} · ${s.grade}</p>
                </div>
            </div>
            <div style="font-size:0.78rem; color:var(--text-2);">${s.major}</div>
            <div class="report-card-bottom">
                <span class="report-card-date"><i class="fa-regular fa-calendar" style="margin-right:4px;"></i>${s.date}</span>
                <a href="${s.report}" target="_blank" class="report-link-btn">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> 리포트 보기
                </a>
            </div>
        </div>
    `).join('');
}

// =============================================
// Student Modal
// =============================================
function openStudentModal(id) {
    const s = STUDENTS.find(st => st.id === id);
    if (!s) return;
    document.getElementById('modalAvatar').style.cssText = `background:${s.color}22; color:${s.color};`;
    document.getElementById('modalAvatar').textContent = getInitials(s.name);
    document.getElementById('modalName').textContent = s.name;
    document.getElementById('modalSchool').textContent = `${s.school} · ${s.grade}`;
    document.getElementById('modalMajor').textContent = s.major;
    document.getElementById('modalStatus').innerHTML = getStatusLabel(s.status);
    document.getElementById('modalReport').innerHTML = `<a href="${s.report}" target="_blank" class="report-link"><i class="fa-solid fa-link"></i> 리포트 열기</a>`;
    document.getElementById('modalDate').textContent = s.date;
    document.getElementById('modalNote').value = s.note || '';

    // Extended fields
    const extEl = document.getElementById('modalExtended');
    if (extEl) {
        const gpaColor = s.gpa <= 2.0 ? '#10b981' : s.gpa <= 3.0 ? '#f59e0b' : '#ef4444';
        const mentorHtml = s.mentors ? s.mentors.map(m => `<span class="modal-tag">${m}</span>`).join('') : '-';
        const targetHtml = s.targets ? s.targets.map((t, i) => `<div class="modal-target-row"><span class="modal-target-badge badge-t${i}">${['상','소','적','안'][i]||'기'}</span>${t}</div>`).join('') : '-';
        extEl.innerHTML = `
            <div class="modal-ext-row">
                <span class="modal-ext-label">📊 내신 종합</span>
                <strong style="color:${gpaColor}; font-size:1.1rem;">${s.gpa ? s.gpa.toFixed(2) + '등급' : '-'}</strong>
            </div>
            <div class="modal-ext-row">
                <span class="modal-ext-label">📝 모의고사</span>
                <span>${s.mock || '-'}</span>
            </div>
            <div class="modal-ext-row">
                <span class="modal-ext-label">👨‍💼 담당 멘토진</span>
                <div class="modal-tags">${mentorHtml}</div>
            </div>
            <div class="modal-ext-row">
                <span class="modal-ext-label">🎯 지원 전략</span>
                <div class="modal-targets">${targetHtml}</div>
            </div>
        `;
    }

    // Mini GPA chart in modal
    const modalChart = document.getElementById('modalGpaChart');
    if (modalChart && s.gpaHistory && s.gpaHistory.length) {
        if (window._modalChartInst) { window._modalChartInst.destroy(); }
        window._modalChartInst = new Chart(modalChart, {
            type: 'line',
            data: {
                labels: s.gpaLabels || s.gpaHistory.map((_, i) => `${i+1}학기`),
                datasets: [{
                    data: s.gpaHistory,
                    borderColor: s.color,
                    backgroundColor: s.color + '22',
                    borderWidth: 2.5,
                    pointBackgroundColor: s.color,
                    pointRadius: 4,
                    fill: true,
                    tension: 0.4,
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false },
                    tooltip: { callbacks: { label: ctx => ` ${ctx.raw}등급` }, backgroundColor: '#1a2235', bodyColor: '#94a3b8', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, cornerRadius: 8 }
                },
                scales: {
                    x: { grid: { display: false, drawBorder: false }, ticks: { color: '#64748b', font: { size: 11 } } },
                    y: { reverse: true, min: 1, max: 5, grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false }, ticks: { color: '#64748b', font: { size: 11 }, callback: v => v + '등급' } }
                }
            }
        });
    }

    document.getElementById('studentModal').classList.add('show');
}

function initModal() {
    const overlay = document.getElementById('studentModal');
    const close1 = document.getElementById('modalClose');
    const close2 = document.getElementById('modalClose2');
    const closeModal = () => overlay.classList.remove('show');
    if (close1) close1.addEventListener('click', closeModal);
    if (close2) close2.addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}

// =============================================
// Global Search
// =============================================
function initSearch() {
    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                switchPage('students');
                const tableSearch = document.getElementById('tableSearch');
                if (tableSearch) {
                    tableSearch.value = globalSearch.value;
                    renderStudentTable(globalSearch.value);
                }
            }
        });
    }
    const tableSearch = document.getElementById('tableSearch');
    if (tableSearch) {
        tableSearch.addEventListener('input', e => renderStudentTable(e.target.value));
    }
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSidebar();
    initNotifDropdown();
    initKPICounters();
    initCharts();
    renderStudentTable();
    renderReportGrid();
    renderActivityTimeline();
    initModal();
    initSearch();
});
