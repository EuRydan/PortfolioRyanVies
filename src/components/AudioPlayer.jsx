"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// Cole o texto do artigo aqui, ou passe via prop `text`
const ARTICLE_TEXT = `Criar um site profissional em Duque de Caxias custa, em média, entre R$ 1.500 e R$ 10.000 em 2026. Esse intervalo amplo existe porque "site" é uma palavra que cobre coisas muito diferentes: uma página simples de captura de leads, um site institucional com várias seções, uma loja virtual com integração de pagamento ou uma plataforma com área de cliente. O que você paga depende do que você precisa. E entender essa diferença é o que evita contratar barato hoje e pagar caro pra refazer daqui seis meses.`;

const SPEEDS = [0.75, 1, 1.25, 1.5, 2];

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ text = ARTICLE_TEXT, title = "Ouvir artigo" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIndex, setSpeedIndex] = useState(1); // default 1x
  const [supported, setSupported] = useState(true);

  const utteranceRef = useRef(null);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const pausedAtRef = useRef(0);
  const charIndexRef = useRef(0);

  // Estima duração total em segundos baseado no texto e velocidade
  const estimateDuration = useCallback(
    (speed = SPEEDS[speedIndex]) => {
      const words = text.trim().split(/\s+/).length;
      const wpm = 160 * speed;
      return Math.round((words / wpm) * 60);
    },
    [text, speedIndex]
  );

  useEffect(() => {
    if (!window.speechSynthesis) {
      setSupported(false);
    }
    setDuration(estimateDuration());
    return () => stopAll();
  }, []);

  useEffect(() => {
    setDuration(estimateDuration());
  }, [speedIndex, estimateDuration]);

  function stopAll() {
    window.speechSynthesis?.cancel();
    clearInterval(intervalRef.current);
    setIsPlaying(false);
    setIsPaused(false);
  }

  function resetAll() {
    stopAll();
    setProgress(0);
    setElapsed(0);
    pausedAtRef.current = 0;
    charIndexRef.current = 0;
  }

  function startTicker(startFrom = 0) {
    clearInterval(intervalRef.current);
    startTimeRef.current = Date.now() - startFrom * 1000;
    const total = estimateDuration();

    intervalRef.current = setInterval(() => {
      const spent = (Date.now() - startTimeRef.current) / 1000;
      const capped = Math.min(spent, total);
      setElapsed(capped);
      setProgress((capped / total) * 100);
      if (capped >= total) {
        clearInterval(intervalRef.current);
        setIsPlaying(false);
        setIsPaused(false);
        setProgress(100);
      }
    }, 250);
  }

  function speak(fromChar = 0) {
    window.speechSynthesis.cancel();

    const slice = text.slice(fromChar);
    const utterance = new SpeechSynthesisUtterance(slice);
    utterance.lang = "pt-BR";
    utterance.rate = SPEEDS[speedIndex];

    // Tenta usar voz pt-BR se disponível
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(
      (v) => v.lang === "pt-BR" || v.lang.startsWith("pt")
    );
    if (ptVoice) utterance.voice = ptVoice;

    utterance.onboundary = (e) => {
      if (e.name === "word") {
        charIndexRef.current = fromChar + e.charIndex;
      }
    };

    utterance.onend = () => {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      setElapsed(estimateDuration());
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function handlePlay() {
    if (!supported) return;

    if (isPaused) {
      // Retoma do ponto pausado
      speak(charIndexRef.current);
      startTicker(pausedAtRef.current);
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }

    resetAll();
    setTimeout(() => {
      speak(0);
      startTicker(0);
      setIsPlaying(true);
    }, 50);
  }

  function handlePause() {
    window.speechSynthesis.cancel();
    clearInterval(intervalRef.current);
    pausedAtRef.current = elapsed;
    setIsPlaying(false);
    setIsPaused(true);
  }

  function handleStop() {
    resetAll();
  }

  function handleSpeedToggle() {
    const next = (speedIndex + 1) % SPEEDS.length;
    setSpeedIndex(next);
    // Se estiver tocando, reinicia com nova velocidade
    if (isPlaying) {
      window.speechSynthesis.cancel();
      clearInterval(intervalRef.current);
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text.slice(charIndexRef.current));
        utterance.lang = "pt-BR";
        utterance.rate = SPEEDS[next];
        const voices = window.speechSynthesis.getVoices();
        const ptVoice = voices.find((v) => v.lang === "pt-BR" || v.lang.startsWith("pt"));
        if (ptVoice) utterance.voice = ptVoice;
        utterance.onboundary = (e) => {
          if (e.name === "word") charIndexRef.current = charIndexRef.current + e.charIndex;
        };
        utterance.onend = () => {
          clearInterval(intervalRef.current);
          setIsPlaying(false);
          setIsPaused(false);
          setProgress(100);
        };
        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        startTicker(pausedAtRef.current || elapsed);
      }, 50);
    }
  }

  function handleSeek(e) {
    const pct = parseFloat(e.target.value);
    const total = estimateDuration();
    const seekTo = (pct / 100) * total;
    const charPos = Math.floor((pct / 100) * text.length);

    clearInterval(intervalRef.current);
    window.speechSynthesis.cancel();

    setProgress(pct);
    setElapsed(seekTo);
    pausedAtRef.current = seekTo;
    charIndexRef.current = charPos;

    if (isPlaying || isPaused) {
      setTimeout(() => {
        speak(charPos);
        startTicker(seekTo);
        setIsPlaying(true);
        setIsPaused(false);
      }, 50);
    }
  }

  if (!supported) {
    return (
      <div style={styles.wrapper}>
        <p style={{ color: "#888", fontSize: 14 }}>
          Seu navegador não suporta leitura em voz alta. Tente Chrome ou Safari.
        </p>
      </div>
    );
  }

  const total = estimateDuration();

  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.iconWrap}>
          {/* Waveform icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="8" width="2" height="8" rx="1" fill="#FF5C1A" />
            <rect x="6" y="5" width="2" height="14" rx="1" fill="#FF5C1A" />
            <rect x="10" y="3" width="2" height="18" rx="1" fill="#FF5C1A" />
            <rect x="14" y="6" width="2" height="12" rx="1" fill="#FF5C1A" />
            <rect x="18" y="9" width="2" height="6" rx="1" fill="#FF5C1A" />
          </svg>
        </div>
        <span style={styles.title}>{title}</span>
        <span style={styles.readTime}>~ {Math.round(total / 60)} min</span>
      </div>

      {/* Progress bar */}
      <div style={styles.progressWrap}>
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={handleSeek}
          style={styles.range}
          aria-label="Progresso da leitura"
        />
        <div
          style={{
            ...styles.progressFill,
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Time */}
      <div style={styles.timeRow}>
        <span style={styles.timeText}>{formatTime(elapsed)}</span>
        <span style={styles.timeText}>{formatTime(total)}</span>
      </div>

      {/* Controls */}
      <div style={styles.controls}>
        {/* Stop / Restart */}
        <button
          onClick={handleStop}
          style={styles.btnSecondary}
          aria-label="Reiniciar"
          title="Reiniciar"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h12v12H6z" />
          </svg>
        </button>

        {/* Play / Pause */}
        <button
          onClick={isPlaying ? handlePause : handlePlay}
          style={styles.btnPrimary}
          aria-label={isPlaying ? "Pausar" : isPaused ? "Continuar" : "Ouvir"}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Speed */}
        <button
          onClick={handleSpeedToggle}
          style={styles.btnSpeed}
          aria-label={`Velocidade: ${SPEEDS[speedIndex]}x`}
          title="Alterar velocidade"
        >
          {SPEEDS[speedIndex]}x
        </button>
      </div>

      {/* Status label */}
      <div style={styles.statusWrap}>
        <span style={styles.statusDot(isPlaying, isPaused)} />
        <span style={styles.statusText}>
          {isPlaying
            ? "Reproduzindo"
            : isPaused
            ? "Pausado"
            : progress >= 100
            ? "Concluído"
            : "Pronto"}
        </span>
      </div>

      <style>{`
        input[type=range] {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
          width: 100%;
          height: 4px;
          position: relative;
          z-index: 2;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #FF5C1A;
          margin-top: -5px;
          cursor: pointer;
          transition: transform 0.15s;
        }
        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.3);
        }
        input[type=range]::-webkit-slider-runnable-track {
          height: 4px;
          background: transparent;
        }
        input[type=range]:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    background: "#111111",
    border: "1px solid #222",
    borderRadius: 12,
    padding: "20px 24px",
    maxWidth: "100%",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    userSelect: "none",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  iconWrap: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
    flex: 1,
  },
  readTime: {
    color: "#555",
    fontSize: 12,
  },
  progressWrap: {
    position: "relative",
    height: 4,
    background: "#222",
    borderRadius: 2,
    marginBottom: 6,
  },
  progressFill: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 4,
    background: "#FF5C1A",
    borderRadius: 2,
    pointerEvents: "none",
    transition: "width 0.25s linear",
    zIndex: 1,
  },
  range: {
    position: "absolute",
    top: -6,
    left: 0,
    width: "100%",
    opacity: 0,
    zIndex: 3,
    height: 16,
    cursor: "pointer",
  },
  timeRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  timeText: {
    color: "#555",
    fontSize: 11,
    fontVariantNumeric: "tabular-nums",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: 14,
  },
  btnPrimary: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "#FF5C1A",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    transition: "opacity 0.15s, transform 0.15s",
  },
  btnSecondary: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#1a1a1a",
    border: "1px solid #333",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#888",
    transition: "color 0.15s",
  },
  btnSpeed: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "#1a1a1a",
    border: "1px solid #333",
    cursor: "pointer",
    color: "#FF5C1A",
    fontSize: 12,
    fontWeight: 600,
    transition: "background 0.15s",
  },
  statusWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  statusDot: (playing, paused) => ({
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: playing ? "#22c55e" : paused ? "#f59e0b" : "#444",
    transition: "background 0.3s",
  }),
  statusText: {
    color: "#555",
    fontSize: 11,
  },
};
