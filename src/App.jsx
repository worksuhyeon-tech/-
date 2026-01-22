const steps = [
  {
    title: "프로젝트 생성",
    description: "1~8컷 선택 및 기본 설정",
    status: "완료",
  },
  {
    title: "캐릭터 설정",
    description: "자동 생성 또는 업로드",
    status: "진행중",
  },
  {
    title: "컷 구성 & 대본",
    description: "장면 설명과 대사 입력",
    status: "대기",
  },
  {
    title: "이미지 생성",
    description: "텍스트/업로드/혼합",
    status: "대기",
  },
  {
    title: "편집",
    description: "말풍선 · 레이어",
    status: "대기",
  },
  {
    title: "내보내기",
    description: "JPG/PNG/PDF/PPTX",
    status: "대기",
  },
];

const projects = [
  {
    name: "고객 서비스 안내 컷툰",
    updatedAt: "오늘 10:40",
    status: "편집 중",
    cuts: 6,
  },
  {
    name: "신규 직원 온보딩",
    updatedAt: "어제 18:12",
    status: "내보내기 완료",
    cuts: 4,
  },
  {
    name: "보안 캠페인",
    updatedAt: "2일 전",
    status: "대본 확정",
    cuts: 8,
  },
];

const cutList = [
  { id: 1, title: "컷 1", status: "대본 입력" },
  { id: 2, title: "컷 2", status: "이미지 생성" },
  { id: 3, title: "컷 3", status: "편집 중" },
];

const characterCards = [
  {
    name: "지수",
    role: "교육 담당자",
    status: "정면/좌/우 생성",
  },
  { name: "민호", role: "고객", status: "정면 생성" },
  { name: "하늘", role: "관리자", status: "업로드 완료" },
];

const layers = [
  { id: "bg", label: "배경", type: "이미지" },
  { id: "char", label: "지수 캐릭터", type: "이미지" },
  { id: "bubble", label: "말풍선", type: "말풍선" },
  { id: "text", label: "대사 텍스트", type: "텍스트" },
];

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="app-eyebrow">Comic Cut Studio</p>
          <h1>내부 교육·홍보용 컷툰 생성 워크플로우</h1>
          <p className="app-subtitle">
            1~8컷 컷툰을 단계형으로 제작하고, PPTX까지 요소 분리 형태로
            내보내는 사내 제작 툴 MVP 레이아웃입니다.
          </p>
        </div>
        <div className="header-actions">
          <button className="ghost">홍보 가이드 보기</button>
          <button className="primary">새 프로젝트</button>
        </div>
      </header>

      <section className="panel login-panel">
        <div>
          <h2>로그인 & 프로젝트 관리</h2>
          <p className="muted">
            이메일 기반 로그인 후 프로젝트를 계정 단위로 저장하고,
            복사/삭제까지 관리할 수 있습니다.
          </p>
        </div>
        <div className="login-grid">
          <div className="login-card">
            <h3>사내 계정 로그인</h3>
            <label className="field">
              이메일
              <input placeholder="name@company.com" />
            </label>
            <label className="field">
              비밀번호
              <input type="password" placeholder="********" />
            </label>
            <button className="primary">로그인</button>
            <p className="hint">자동 저장 및 단계 복귀 데이터가 유지됩니다.</p>
          </div>
          <div className="project-card">
            <div className="project-card-header">
              <h3>내 프로젝트</h3>
              <button className="ghost small">복사</button>
            </div>
            <ul className="project-list">
              {projects.map((project) => (
                <li key={project.name}>
                  <div>
                    <strong>{project.name}</strong>
                    <span>{project.updatedAt}</span>
                  </div>
                  <div className="project-meta">
                    <span className="badge neutral">{project.cuts}컷</span>
                    <span className="badge">{project.status}</span>
                    <button className="ghost small">삭제</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="stepper">
        {steps.map((step, index) => (
          <div className="step" key={step.title}>
            <span className="step-index">0{index + 1}</span>
            <span className="step-label">{step.title}</span>
            <span className="step-desc">{step.description}</span>
            <span className={`step-status status-${step.status}`}>
              {step.status}
            </span>
          </div>
        ))}
      </section>

      <section className="panel preview-panel">
        <div className="preview-header">
          <div>
            <h2>미리보기</h2>
            <p className="muted">
              각 컷의 최신 상태를 한 번에 확인하고 공유 전에 빠르게 점검하세요.
            </p>
          </div>
          <button className="primary">미리보기 모드</button>
        </div>
        <div className="preview-grid">
          {[1, 2, 3, 4].map((cut) => (
            <article key={cut} className="preview-card">
              <div className="preview-thumb">
                <span>컷 {cut}</span>
              </div>
              <div className="preview-meta">
                <strong>컷 {cut}</strong>
                <span className="badge">편집 완료</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="grid">
        <section className="panel">
          <h2>Step 1. 프로젝트 생성</h2>
          <label className="field">
            프로젝트명
            <input placeholder="예: 고객 서비스 안내 컷툰" />
          </label>
          <label className="field">
            컷 수 (1~8)
            <input type="range" min="1" max="8" defaultValue="6" />
            <span className="range-value">6컷 · 기존 컷 유지</span>
          </label>
          <label className="field">
            프로젝트 유형
            <select defaultValue="교육">
              <option value="교육">내부 교육용</option>
              <option value="홍보">내부 홍보용</option>
              <option value="안내">서비스 안내용</option>
            </select>
          </label>
          <div className="auto-save">
            <span className="dot" /> 자동 저장 활성화
          </div>
          <button className="secondary">다음 단계로</button>
        </section>

        <section className="panel">
          <h2>Step 2. 캐릭터 관리</h2>
          <div className="card-grid">
            {characterCards.map((card) => (
              <article className="card" key={card.name}>
                <div className="avatar" />
                <div>
                  <h3>{card.name}</h3>
                  <p>{card.role}</p>
                  <span className="hint">{card.status}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="button-row">
            <button className="primary">캐릭터 자동 생성</button>
            <button className="ghost">이미지 업로드</button>
            <button className="ghost">시트 생성 (정면/좌/우/후면)</button>
          </div>
        </section>
      </div>

      <div className="grid">
        <section className="panel">
          <h2>Step 3. 컷 구성 & 대본</h2>
          <div className="cut-layout">
            <aside className="cut-list">
              {cutList.map((cut) => (
                <button key={cut.id} className="cut-item">
                  <span>{cut.title}</span>
                  <small>{cut.status}</small>
                </button>
              ))}
              <button className="cut-add">+ 컷 추가</button>
            </aside>
            <div className="cut-detail">
              <label className="field">
                장면 설명
                <textarea
                  placeholder="예: 지수가 신규 고객 응대를 설명한다."
                  rows="4"
                />
              </label>
              <label className="field">
                등장 캐릭터
                <div className="tag-row">
                  <span className="tag">지수</span>
                  <span className="tag">민호</span>
                  <button className="ghost small">선택</button>
                </div>
              </label>
              <label className="field">
                대사
                <textarea placeholder="대사를 입력하세요." rows="3" />
              </label>
              <div className="button-row">
                <button className="secondary">컷 잠금</button>
                <button className="ghost">순서 변경</button>
              </div>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Step 4. 이미지 생성</h2>
          <div className="status-card">
            <div>
              <h3>컷 2 - 텍스트 + 업로드 혼합</h3>
              <p>배경 생성 + 캐릭터 고정 방식으로 재생성 가능</p>
            </div>
            <button className="primary">재생성</button>
          </div>
          <div className="status-card muted">
            <div>
              <h3>컷 1 - 텍스트 기반</h3>
              <p>등장 캐릭터 · 행동 · 배경 프롬프트 입력됨</p>
            </div>
            <button className="ghost">완료됨</button>
          </div>
          <div className="image-settings">
            <label className="field">
              행동/표정
              <input placeholder="예: 미소, 손짓" />
            </label>
            <label className="field">
              배경 설명
              <input placeholder="예: 콜센터 상담실 배경" />
            </label>
          </div>
        </section>
      </div>

      <div className="grid">
        <section className="panel">
          <h2>Step 5. 편집기</h2>
          <div className="editor">
            <aside className="editor-nav">
              <h3>컷 네비게이션</h3>
              {cutList.map((cut) => (
                <button key={cut.id} className="cut-item">
                  {cut.title}
                </button>
              ))}
              <div className="layer-stack">
                <h4>레이어</h4>
                {layers.map((layer) => (
                  <div key={layer.id} className="layer-row">
                    <span>{layer.label}</span>
                    <span className="chip">{layer.type}</span>
                  </div>
                ))}
              </div>
            </aside>
            <div className="canvas">
              <div className="canvas-placeholder">
                <p>캔버스 미리보기</p>
                <span>말풍선 · 레이어 · 텍스트 편집</span>
              </div>
            </div>
            <aside className="editor-panel">
              <h3>속성 패널</h3>
              <div className="field">
                폰트
                <select defaultValue="Pretendard">
                  <option>Pretendard</option>
                  <option>Nanum Gothic</option>
                  <option>Apple SD Gothic Neo</option>
                </select>
              </div>
              <div className="field">
                크기
                <input type="number" defaultValue="20" />
              </div>
              <div className="field">
                자간
                <input type="number" defaultValue="0" />
              </div>
              <div className="field">
                말풍선 배경색
                <input type="color" defaultValue="#ffffff" />
              </div>
              <div className="field">
                테두리 두께
                <input type="range" min="1" max="8" defaultValue="2" />
              </div>
              <div className="field">
                투명도
                <input type="range" min="0" max="100" defaultValue="80" />
              </div>
            </aside>
          </div>
          <div className="toolbar">
            <button className="ghost">원형</button>
            <button className="ghost">각진</button>
            <button className="ghost">생각풍선</button>
            <button className="ghost">내레이션</button>
          </div>
        </section>

        <section className="panel">
          <h2>Step 6. 내보내기</h2>
          <div className="export-options">
            <label className="checkbox">
              <input type="checkbox" defaultChecked /> PPTX 요소 분리
            </label>
            <div className="button-row">
              <button className="primary">PPTX 다운로드</button>
              <button className="ghost">PNG</button>
              <button className="ghost">JPG</button>
              <button className="ghost">PDF</button>
            </div>
          </div>
          <div className="note">
            <strong>요소 분리 구조</strong>
            <ul>
              <li>배경 · 캐릭터 · 말풍선 · 텍스트 레이어 분리</li>
              <li>슬라이드 단위로 컷 출력</li>
              <li>다운로드 후 PPT에서 직접 수정 가능</li>
            </ul>
          </div>
          <div className="export-footnote">
            <span className="badge neutral">PPTX 편집 가능</span>
            <span className="badge neutral">자동 저장 로그 포함</span>
          </div>
        </section>
      </div>
    </div>
  );
}
