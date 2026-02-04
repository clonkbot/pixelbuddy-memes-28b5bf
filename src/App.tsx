import React, { useState } from 'react';
import './styles.css';

interface Meme {
  id: number;
  name: string;
  template: string;
  topText: string;
  bottomText?: string;
  year: string;
  description: string;
}

const legendaryMemes: Meme[] = [
  {
    id: 1,
    name: "Distracted Boyfriend",
    template: "distracted",
    topText: "NEW JAVASCRIPT FRAMEWORK",
    bottomText: "MY CURRENT PROJECT",
    year: "2017",
    description: "When you see a shiny new technology"
  },
  {
    id: 2,
    name: "Drake Hotline Bling",
    template: "drake",
    topText: "DEBUGGING FOR HOURS",
    bottomText: "ADDING console.log()",
    year: "2015",
    description: "The classic approve/disapprove format"
  },
  {
    id: 3,
    name: "This Is Fine",
    template: "fine",
    topText: "PRODUCTION SERVER ON FIRE",
    bottomText: "THIS IS FINE",
    year: "2016",
    description: "Everything is fine. Totally fine."
  },
  {
    id: 4,
    name: "Expanding Brain",
    template: "brain",
    topText: "GALAXY BRAIN MOMENT",
    bottomText: "",
    year: "2017",
    description: "Ascending to higher consciousness"
  },
  {
    id: 5,
    name: "Woman Yelling at Cat",
    template: "cat",
    topText: "THE BUG REPORT",
    bottomText: "THE ACTUAL BUG",
    year: "2019",
    description: "Confusion at its finest"
  },
  {
    id: 6,
    name: "Surprised Pikachu",
    template: "pikachu",
    topText: "PUSHED TO MAIN WITHOUT TESTING",
    bottomText: "",
    year: "2018",
    description: "shocked_pixelbuddy.png"
  },
  {
    id: 7,
    name: "Stonks",
    template: "stonks",
    topText: "ADDED ONE LINE OF CSS",
    bottomText: "STONKS",
    year: "2017",
    description: "Infinite profit energy"
  },
  {
    id: 8,
    name: "Two Buttons",
    template: "buttons",
    topText: "SLEEP vs FINISH PROJECT",
    bottomText: "",
    year: "2014",
    description: "The eternal developer dilemma"
  }
];

const PixelBuddy: React.FC<{ expression?: 'happy' | 'shocked' | 'cool' | 'sad' | 'thinking' | 'angry', size?: number }> = ({
  expression = 'happy',
  size = 120
}) => {
  const getExpression = () => {
    switch (expression) {
      case 'shocked':
        return { eyes: '○ ○', mouth: 'O' };
      case 'cool':
        return { eyes: '⌐ ⌐', mouth: '‿' };
      case 'sad':
        return { eyes: '· ·', mouth: '︵' };
      case 'thinking':
        return { eyes: '• •', mouth: '～' };
      case 'angry':
        return { eyes: '> <', mouth: '▽' };
      default:
        return { eyes: '■ ■', mouth: '‿' };
    }
  };

  const expr = getExpression();

  return (
    <div className="pixel-buddy" style={{ width: size, height: size * 0.85 }}>
      <div className="monitor-body">
        <div className="screen-area">
          <div className="screen" style={{ backgroundColor: '#FF6B4A' }}>
            <div className="scanlines"></div>
            <div className="face">
              <div className="eyes">{expr.eyes}</div>
              <div className="mouth">{expr.mouth}</div>
            </div>
          </div>
        </div>
        <div className="control-panel">
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="sliders">
            <div className="slider"></div>
            <div className="slider"></div>
          </div>
        </div>
      </div>
      <div className="monitor-base"></div>
    </div>
  );
};

const MemeCard: React.FC<{ meme: Meme; index: number }> = ({ meme, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getExpressionForMeme = (template: string): 'happy' | 'shocked' | 'cool' | 'sad' | 'thinking' | 'angry' => {
    const expressions: Record<string, 'happy' | 'shocked' | 'cool' | 'sad' | 'thinking' | 'angry'> = {
      distracted: 'cool',
      drake: 'thinking',
      fine: 'happy',
      brain: 'thinking',
      cat: 'angry',
      pikachu: 'shocked',
      stonks: 'cool',
      buttons: 'sad'
    };
    return expressions[template] || 'happy';
  };

  const renderMemeContent = () => {
    switch (meme.template) {
      case 'distracted':
        return (
          <div className="meme-scene distracted-scene">
            <div className="scene-character walking">
              <PixelBuddy expression="cool" size={60} />
              <span className="label">ME</span>
            </div>
            <div className="scene-character new-thing">
              <div className="sparkle-box">
                <span className="sparkle">✨</span>
                <span className="tech-text">{meme.topText}</span>
                <span className="sparkle">✨</span>
              </div>
            </div>
            <div className="scene-character jealous">
              <div className="project-box">
                <span className="sad-text">{meme.bottomText}</span>
              </div>
            </div>
          </div>
        );

      case 'drake':
        return (
          <div className="meme-scene drake-scene">
            <div className="drake-row reject">
              <div className="drake-buddy">
                <PixelBuddy expression="sad" size={50} />
                <div className="hand-gesture">🚫</div>
              </div>
              <div className="drake-text">{meme.topText}</div>
            </div>
            <div className="drake-row approve">
              <div className="drake-buddy">
                <PixelBuddy expression="cool" size={50} />
                <div className="hand-gesture">👉</div>
              </div>
              <div className="drake-text">{meme.bottomText}</div>
            </div>
          </div>
        );

      case 'fine':
        return (
          <div className="meme-scene fine-scene">
            <div className="fire-container">
              <span className="fire">🔥</span>
              <span className="fire delay1">🔥</span>
              <span className="fire delay2">🔥</span>
            </div>
            <PixelBuddy expression="happy" size={70} />
            <div className="coffee-cup">☕</div>
            <div className="fine-text">{meme.bottomText}</div>
          </div>
        );

      case 'brain':
        return (
          <div className="meme-scene brain-scene">
            <div className="brain-levels">
              <div className="brain-level small">
                <PixelBuddy expression="sad" size={30} />
                <span>Using var</span>
              </div>
              <div className="brain-level medium">
                <PixelBuddy expression="happy" size={40} />
                <span>Using let</span>
              </div>
              <div className="brain-level large">
                <PixelBuddy expression="cool" size={50} />
                <span>Using const</span>
              </div>
              <div className="brain-level galaxy">
                <PixelBuddy expression="thinking" size={60} />
                <span className="glow">{meme.topText}</span>
                <div className="galaxy-effect">🌌</div>
              </div>
            </div>
          </div>
        );

      case 'cat':
        return (
          <div className="meme-scene cat-scene">
            <div className="yelling-side">
              <PixelBuddy expression="angry" size={55} />
              <div className="yell-bubble">{meme.topText}</div>
            </div>
            <div className="cat-side">
              <PixelBuddy expression="thinking" size={55} />
              <div className="confused-text">{meme.bottomText}</div>
            </div>
          </div>
        );

      case 'pikachu':
        return (
          <div className="meme-scene pikachu-scene">
            <div className="action-text">{meme.topText}</div>
            <div className="shocked-container">
              <PixelBuddy expression="shocked" size={80} />
              <div className="shock-lines">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
          </div>
        );

      case 'stonks':
        return (
          <div className="meme-scene stonks-scene">
            <div className="stonks-chart">
              <div className="chart-line"></div>
              <PixelBuddy expression="cool" size={60} />
            </div>
            <div className="stonks-text">
              <span className="action">{meme.topText}</span>
              <span className="result">{meme.bottomText}</span>
            </div>
          </div>
        );

      case 'buttons':
        return (
          <div className="meme-scene buttons-scene">
            <PixelBuddy expression="sad" size={50} />
            <div className="sweat-drop">💧</div>
            <div className="buttons-container">
              <button className="meme-button red">SLEEP</button>
              <button className="meme-button blue">CODE</button>
            </div>
            <div className="dilemma-text">{meme.topText}</div>
          </div>
        );

      default:
        return <PixelBuddy expression="happy" size={80} />;
    }
  };

  return (
    <div
      className={`meme-card ${isHovered ? 'hovered' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="meme-header">
        <span className="meme-year">{meme.year}</span>
        <h3 className="meme-name">{meme.name}</h3>
      </div>
      <div className="meme-content">
        {renderMemeContent()}
      </div>
      <div className="meme-footer">
        <p className="meme-description">{meme.description}</p>
      </div>
      <div className="card-glitch"></div>
    </div>
  );
};

const App: React.FC = () => {
  const [hoveredHero, setHoveredHero] = useState(false);

  return (
    <div className="app">
      <div className="noise-overlay"></div>
      <div className="grid-bg"></div>

      <header className="hero">
        <div className="hero-content">
          <div
            className={`hero-mascot ${hoveredHero ? 'bounce' : ''}`}
            onMouseEnter={() => setHoveredHero(true)}
            onMouseLeave={() => setHoveredHero(false)}
          >
            <PixelBuddy expression={hoveredHero ? 'cool' : 'happy'} size={180} />
            <div className="mascot-shadow"></div>
          </div>
          <div className="hero-text">
            <h1 className="title">
              <span className="title-line">PIXEL</span>
              <span className="title-line accent">BUDDY</span>
              <span className="title-line">MEMES</span>
            </h1>
            <p className="subtitle">
              LEGENDARY MEMES. ONE ICONIC FACE.
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">{legendaryMemes.length}</span>
                <span className="stat-label">LEGENDARY MEMES</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">VIBES</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">PIXEL PERFECT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>SCROLL FOR MEMES</span>
          <div className="arrow-down">▼</div>
        </div>
      </header>

      <main className="meme-gallery">
        <div className="gallery-header">
          <h2>THE HALL OF LEGENDS</h2>
          <p>Every iconic meme format, reimagined with PixelBuddy</p>
        </div>
        <div className="meme-grid">
          {legendaryMemes.map((meme, index) => (
            <MemeCard key={meme.id} meme={meme} index={index} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-mascot">
          <PixelBuddy expression="happy" size={40} />
        </div>
        <p className="footer-text">
          Requested by <a href="https://twitter.com/rifkXYZ" target="_blank" rel="noopener noreferrer">@rifkXYZ</a> · Built by <a href="https://twitter.com/clonkbot" target="_blank" rel="noopener noreferrer">@clonkbot</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
