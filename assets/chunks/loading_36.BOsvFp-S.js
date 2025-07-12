const n=`.classic-loader_36 {
  font-weight: bold;
  font-family: monospace;
  display: inline-grid;
  font-size: 30px;
}

.classic-loader_36:before,
.classic-loader_36:after {
  content: "Loading...";
  grid-area: 1/1;
  -webkit-mask-size: 1.5ch 100%, 100% 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: classic-loader_36-1 1s infinite;
}

.classic-loader_36:before {
  -webkit-mask-image: linear-gradient(#000 0 0),
  linear-gradient(#000 0 0);
}

.classic-loader_36:after {
  -webkit-mask-image: linear-gradient(#000 0 0);
  animation: classic-loader_36-1 1s infinite,
  loading_36-2 .2s infinite cubic-bezier(0.5, 200, 0.5, -200);
}

@keyframes classic-loader_36-1 {
  0% {
    -webkit-mask-position: 0 0, 0 0
  }
  20% {
    -webkit-mask-position: .5ch 0, 0 0
  }
  40% {
    -webkit-mask-position: 100% 0, 0 0
  }
  60% {
    -webkit-mask-position: 4.5ch 0, 0 0
  }
  80% {
    -webkit-mask-position: 6.5ch 0, 0 0
  }
  100% {
    -webkit-mask-position: 2.5ch 0, 0 0
  }
}

@keyframes classic-loader_36-2 {
  100% {
    transform: translateY(0.2px)
  }
}
`;export{n as default};
