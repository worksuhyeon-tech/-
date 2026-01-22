const steps = [
  "프로젝트 생성",
  "캐릭터 설정",
  "컷 구성 & 대본",
  "이미지 생성",
  "편집",
  "내보내기",
];

const cutList = [
  { id: 1, title: "컷 1", status: "대본 입력" },
  { id: 2, title: "컷 2", status: "이미지 생성" },
  { id: 3, title: "컷 3", status: "편집 중" },
];

const characterCards = [
  { name: "지수", role: "교육 담당자" },
  { name: "민호", role: "고객" },
  { name: "하늘", role: "관리자" },
];

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="app-eyebrow">Comic Cut Studio</p>
          <h1>내부 교육·홍보용 컷툰 생성 워크플로우</h1>
          <p className="app-subtitle">
            1~8컷 컷툰을 단계형으로 제작하고, PPTX까지 요소 분리 형태로 내보내는
            사내 제작 툴 MVP 레이아웃입니다.
          </p>
        </div>
        <button className="primary">새 프로젝트</button>
      </header>

      <section className="stepper">
        {steps.map((step, index) => (
          <div className="step" key={step}>
            <span className="step-index">0{index + 1}</span>
            <span className="step-label">{step}</span>
          </div>
        ))}
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
            <input type="range" min="1" max="8" defaultValue="4" />
            <span className="range-value">4컷</span>
          </label>
          <label className="field">
            프로젝트 유형
            <select defaultValue="교육">
              <option value="교육">내부 교육용</option>
              <option value="홍보">내부 홍보용</option>
              <option value="안내">서비스 안내용</option>
            </select>
          </label>
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
                </div>
              </article>
            ))}
          </div>
          <div className="button-row">
            <button className="primary">캐릭터 생성</button>
            <button className="ghost">이미지 업로드</button>
            <button className="ghost">시트 생성</button>
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
              <button className="secondary">컷 잠금</button>
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
                색상
                <input type="color" defaultValue="#1f2a37" />
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
        </section>
      </div>
    </div>
  );
}
