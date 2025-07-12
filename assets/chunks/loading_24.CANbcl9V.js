const n=`.dots-loader_24 {
  width: 88px;
  height: 12px;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) 25% 0,
  var(--_g) 75% 0;
  background-size: 12px 12px;
  position: relative;
  animation: dots-loader_24-0 1s linear infinite;
}

.dots-loader_24:before {
  content: "";
  position: absolute;
  height: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  inset: 0;
  margin: auto;
  animation: dots-loader_24-1 1s cubic-bezier(0.5, 300, 0.5, -300) infinite;
}

@keyframes dots-loader_24-0 {
  0%, 24% {
    background-position: 25% 0, 75% 0
  }
  40% {
    background-position: 25% 0, 85% 0
  }
  50%, 72% {
    background-position: 25% 0, 75% 0
  }
  90% {
    background-position: 15% 0, 75% 0
  }
  100% {
    background-position: 25% 0, 75% 0
  }
}

@keyframes dots-loader_24-1 {
  100% {
    transform: translate(0.1px)
  }
}
`;export{n as default};
