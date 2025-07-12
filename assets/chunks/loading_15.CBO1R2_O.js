const n=`.dots-loader_15 {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(closest-side at calc(100% / 6) 50%, #000 90%, #0000) 0/75% 100%;
  position: relative;
  animation: dots-loader_15-0 1s infinite linear;
}

.dots-loader_15::before {
  content: "";
  position: absolute;
  background: inherit;
  clip-path: inset(0 0 0 50%);
  inset: 0;
  animation: dots-loader_15-1 0.5s infinite linear;
}

@keyframes dots-loader_15-0 {
  0%, 49.99% {
    transform: scale(1)
  }
  50%, 100% {
    transform: scale(-1)
  }
}

@keyframes dots-loader_15-1 {
  0% {
    transform: translateX(-37.5%) rotate(0turn)
  }
  80%, 100% {
    transform: translateX(-37.5%) rotate(1turn)
  }
}
`;export{n as default};
