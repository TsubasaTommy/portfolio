<script lang="ts">
  type Props = {
    height?: string;
    opacity?: number;
  };
  let { height = '70vh', opacity = 0.55 }: Props = $props();
</script>

<div class="holo" style="--h: {height}; --o: {opacity};" aria-hidden="true">
  <div class="blob blob-a"></div>
  <div class="blob blob-b"></div>
  <div class="blob blob-c"></div>
  <div class="grain"></div>
</div>

<style>
  .holo {
    pointer-events: none;
    position: absolute;
    inset: -10% -10% auto -10%;
    height: var(--h);
    z-index: -1;
    opacity: var(--o);
    overflow: hidden;
  }
  .blob {
    position: absolute;
    border-radius: 9999px;
    filter: blur(80px);
    mix-blend-mode: multiply;
    will-change: transform;
  }
  .blob-a {
    width: 50%;
    height: 80%;
    left: -10%;
    top: -20%;
    background: radial-gradient(circle at 30% 30%, #635bff, transparent 60%);
    animation: float-a 18s ease-in-out infinite alternate;
  }
  .blob-b {
    width: 55%;
    height: 90%;
    right: -10%;
    top: -10%;
    background: radial-gradient(circle at 60% 50%, #00d4ff, transparent 60%);
    animation: float-b 22s ease-in-out infinite alternate;
  }
  .blob-c {
    width: 45%;
    height: 70%;
    left: 30%;
    top: 20%;
    background: radial-gradient(circle at 50% 50%, #ff6ac1, transparent 60%);
    animation: float-c 26s ease-in-out infinite alternate;
  }
  .grain {
    position: absolute;
    inset: 0;
    opacity: 0.18;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  }
  @keyframes float-a {
    from {
      transform: translate3d(0, 0, 0) scale(1);
    }
    to {
      transform: translate3d(8%, 6%, 0) scale(1.08);
    }
  }
  @keyframes float-b {
    from {
      transform: translate3d(0, 0, 0) scale(1);
    }
    to {
      transform: translate3d(-6%, 8%, 0) scale(1.05);
    }
  }
  @keyframes float-c {
    from {
      transform: translate3d(0, 0, 0) scale(1);
    }
    to {
      transform: translate3d(4%, -10%, 0) scale(1.1);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .blob {
      animation: none !important;
    }
  }
</style>
