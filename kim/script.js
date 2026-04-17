// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ─── Chart.js ───
    const ctx = document.getElementById('gradeChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1학년 1학기', '1학년 2학기', '2학년 1학기', '2학년 2학기'],
            datasets: [{
                label: '내신 등급',
                data: [2.15, 1.94, 1.90, 2.09],
                borderColor: '#002F6C',
                backgroundColor: 'rgba(0, 47, 108, 0.08)',
                borderWidth: 3,
                pointBackgroundColor: ['#002F6C','#002F6C','#002F6C','#E11D48'],
                pointBorderColor: '#fff',
                pointBorderWidth: 2.5,
                pointRadius: 7,
                fill: true,
                tension: 0.35
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    reverse: true,
                    min: 1.5,
                    max: 3.5,
                    ticks: {
                        stepSize: 0.5,
                        callback: v => v + '등급',
                        font: { family: 'Pretendard', size: 12 }
                    },
                    grid: { color: '#F1F5F9' }
                },
                x: {
                    ticks: { font: { family: 'Pretendard', size: 11 } },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => `${ctx.parsed.y}등급`,
                        title: items => items[0].label
                    },
                    bodyFont: { family: 'Pretendard' },
                    titleFont: { family: 'Pretendard' }
                }
            }
        }
    });
});

// ─── Popup Data ───
const popupData = {
    mentor1: {
        title: '유준환 멘토 — 고려대 경영대학',
        desc: `<strong>생기부 정밀 진단</strong><br>
            같은 내신 대역의 경쟁자들과 비교했을 때 자율과 진로 영역이 심각하게 부족합니다. 1학년 진로는 탐구 활동이 전무해 글자수가 비어있고, 2학년 부반장 활동 같은 주도적인 리더십 소재를 전혀 어필하지 못했습니다.<br><br>
            <strong>해결 솔루션</strong><br>
            자율과 진로는 교과 세특과 달리 제약 없이 '전공에 대한 나의 수준 높은 지식'을 있는 그대로 뽐낼 수 있는 백지입니다. 3학년 때는 진로 관련 책이나 대립 이론을 분석하고, 반 친구들을 대상으로 '의문점 기반 설문조사'까지 능동적으로 기획해 강한 주도적 역량을 채워 넣으세요. 활동 개수는 무리하지 말고 딱 2개만 깊게 파서 글자 수를 밀도 있게 꽉 채우십시오.<br><br>
            <strong>최우선 목표</strong><br>
            앞으로의 출석 관리는 기본이며, 인문계라도 발목을 잡을 위험이 큰 '수학, 영어' 성적을 3학년 때 무조건 2등급까지 끌어올려 성장 서사를 증명하세요. 교과 세특의 첫 구간에는 "국어 항상 1등급" 등 우수한 성취도를 명시하는 문장을 과감하게 배치해야 합니다.`
    },
    mentor2: {
        title: '김호민 멘토 — 서울대 경제학부',
        desc: `<strong>전문 분야</strong><br>
            언론, 미디어 커뮤니케이션 맞춤형 심화 탐구 기획<br><br>
            <strong>핵심 메시지</strong><br>
            "일반고 학생들의 미디어 지망 생기부를 보면 단순히 '유튜브 제작', '영상 편집' 수준에 머물러 있습니다. 대학이 원하는 건 영상을 잘 만드는 학생이 아니라 현상을 잘 '분석'하는 기획자입니다. 미디어 프레이밍 등 대학 수준의 이론을 선행 적용해보세요."`
    },
    mentor3: {
        title: '고대현 멘토 — 경희대 이과대학 26학번',
        desc: `<strong>합격 분석</strong><br>
            경희대 이과대학 26학번 합격 노하우. 2.7등급 학종 합격 및 내신 방어 전략 적용.<br><br>
            <strong>전문 영역</strong><br>
            기회균형/농어촌 전형 특수입시 분석 및 내신 데이터 기반 합격률 제고 전략<br><br>
            <strong>핵심 메시지</strong><br>
            "수학의 4등급 하락과 정체된 내신은 학종에서 불리한 신호입니다. 3학년 땐 무조건 수학 방어와 함께 생기부 개수 줄이기에 돌입하세요. 비교과는 필요한 딱 한두 개만 집중하고 무조건 지필 시험에 올인해야 합니다."`
    },
    action1: {
        title: '최우선 — 추락하는 수학 내신 방어 및 국어/탐구 수능 최저 루틴',
        desc: `<strong>왜 필수인가?</strong><br>
            수학 4등급, 모의고사 6등급은 미디어/국문과라 해도 최상위권 진입을 막는 가장 큰 장애물입니다. 수능 최저가 걸려있을 경우 무조건 탈락 위기입니다.<br><br>
            <strong>실행 방법</strong><br>
            1. 3학년 1학기 지필평가는 수학 내신 3등급 사수에 총력전 배치.<br>
            2. 수능 수학은 과감히 버리고, 사탐/국어 수능 최저(2합) 루틴 확립.<br>
            3. 비교과 활동으로 인한 야간 자율학습 결손 방지 (동아리 투입 시간 최소화).<br><br>
            <strong>목표</strong><br>
            정시 지원 불가 상태임을 명심하고, 최저 라인 2합 5를 기반으로 수시 올인.`
    },
    action2: {
        title: '탐구 1 — 미디어 프레이밍 이론 적용 보수/진보 뉴스 비교',
        desc: `<strong>연계 과목:</strong> 사회 탐구 / 미디어 연계 / 국어<br><br>
            <strong>탐구 배경</strong><br>
            2학년 다매체 환경에서 카드뉴스로 대응한 실무 리더십을, 이제는 3학년의 "학술적 통찰력"으로 격상해야 합니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 특정 사회 현안(예: 부동산, 노동 문제) 기사를 매체 성향별로 스크랩.<br>
            2. 고프먼의 프레이밍 이론을 적용, 단어 선택과 논조가 어떻게 대중의 시각을 재단하는지 비교 분석.<br>
            3. 단순 비평으로 끝내지 말고, '미래 미디어 종사자의 뉴스 유통 책임'에 대한 철학적 결론 도출.<br><br>
            <strong>세특 활용법</strong><br>
            "현상을 표면적으로 읽는 1차원적 독해를 넘어, 언론의 구조적 보도 스탠스를 비판적으로 수용함" 이라는 평가 유도.`
    },
    action3: {
        title: '탐구 2 — 단행본·웹소설 영상화(OTT)와 트랜스미디어 스토리텔링 분석',
        desc: `<strong>연계 과목:</strong> 문학 / 언어와 매체 / 진로<br><br>
            <strong>탐구 배경</strong><br>
            단순한 '영상 제작'이 아닌, 국어국문과 미디어를 동시에 지망하는 학생에게 가장 매력적인 교집합은 '이야기가 매체를 갈아탈 때(Trans-media) 어떻게 변하는가'를 분석하는 것입니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. '보건교사 안은영' 등 소설 원작의 영상화 사례 1개 선정.<br>
            2. 문학의 텍스트 묘사가 영상의 앵글, 조명, 그리고 내레이션으로 변환되며 독자(시청자)의 타겟팅 텐션이 어떻게 재구성되는지 비평 및 분석.<br><br>
            <strong>세특 활용법</strong><br>
            문학 작품의 심층적 수용을 넘어, 이를 최신 매체(OTT) 언어로 번역할 줄 아는 예비 콘텐츠 PD/작가의 날카로운 기획 역량 어필.`
    },
    action4: {
        title: '세특 기획 — 한국 현대 소설 서술 시점 비교 (1인칭 vs 전지적)',
        desc: `<strong>연계 과목:</strong> 국어 / 문학 심화<br><br>
            <strong>탐구 배경</strong><br>
            2학년 때 보여준 '나상 vs 탈향' 시점 비교의 지적 호기심을, 3학년 한국 현대 소설 심화 분석으로 연속 선상에 올립니다.<br><br>
            <strong>탐구 방법</strong><br>
            1. 선생님께 세특 첫 줄 "4개 학기 내내 1등급을 놓치지 않는 우수함" 명시 부탁.<br>
            2. 동일한 역사적 배경을 다룬 두 소설을 골라, 1인칭 소설과 전지적 작가 시점 소설이 독자의 감정 이입을 어떻게 통제하는지 학술 에세이 형식으로 작성.<br><br>
            <strong>세특 활용법</strong><br>
            국어국문 지망생으로서의 압도적 텍스트 독해 능력과 서사 분석 능력을 대학에 못박아 버리는 화룡점정 활동.`
    },
    action5: {
        title: '세특 전략 — 블라인드 정성평가를 뚫어내는 퍼스널 브랜딩',
        desc: `<strong>실행 가이드:</strong> 3학년 수행평가 및 보고서 제출 패러다임 완전 교체<br><br>
            <strong>왜 해야 하는가?</strong><br>
            1학년 세특에 가득한 "수업을 열심히 들음", "호기심을 가지고 조사함" 같은 내용이 다시 반복되면 서울권 주요대학 학종 탈락입니다.<br><br>
            <strong>구체적 방법론</strong><br>
            1. 과제 제출 시, A4 한 장 짜리 요약본 최상단에 **[탐구 동기]➔[적용 이론명]➔[비교 분석 결과]➔[나의 결론]** 을 볼드체로 명시하여 제출.<br>
            2. 선생님이 바로 1500바이트 글자 수에 복사/붙여넣기 할 수 있을 정도의 완성된 학술 문장형태로 작성해 소통.<br>
            3. "조사함" -> "이론을 매핑하여 A와 B의 구조적 차이를 도출함" 으로 워딩 상향.`
    },
    action6: {
        title: '독서 심화 — 미디어 비평서 및 문학 이론서 기반 세특 확장',
        desc: `<strong>연계 영역:</strong> 전 교과 독서 및 진로 활동<br><br>
            <strong>독서 배경</strong><br>
            국문학과 매스미디어 전공 학종에서는 흔한 실무형 생기부(단순 유튜브 제작, 무비티켓 모으기)보다 탄탄한 '학술적·이론적 독해력'을 우선시합니다. 독보적인 국어 1등급 무기를 극대화할 때입니다.<br><br>
            <strong>실행 가이드</strong><br>
            1. &laquo;저널리즘의 원칙&raquo;이나 &laquo;문학과 영상예술&raquo; 등 대학 수준의 전공 개론·비평서 1~2권을 정독.<br>
            2. 줄거리 요약을 철저히 배제하고, 책의 '이론적 렌즈'를 통해 최근 소셜미디어상 화제가 된 콘텐츠나 여론 현상을 도마 위에 올려 분석하는 글 작성.<br><br>
            <strong>세특 활용법</strong><br>
            단순히 책상을 넓히는 것이 아닌 깊이를 파고드는 활동. "~을 읽고 배움을 얻음" 대신 "~개념을 원용하여, 교과 시간에 제기된 현상 B를 심층 해석함" 구조로 지적 탐구심 증명.`
    }
};

window.openPopup = function(id) {
    const data = popupData[id];
    if (!data) return;

    document.getElementById('modalBody').innerHTML = `
        <h3 class="popup-title">${data.title}</h3>
        <p class="popup-desc">${data.desc}</p>
    `;
    document.getElementById('popupModal').classList.add('active');
};

window.closePopup = function(e, force = false) {
    if (force || e.target.id === 'popupModal') {
        document.getElementById('popupModal').classList.remove('active');
    }
};

// ─── Scroll animation (IntersectionObserver) ───
const sections = document.querySelectorAll('.report-section, .toc-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) both';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

sections.forEach(sec => {
    sec.style.opacity = '0';
    observer.observe(sec);
});
