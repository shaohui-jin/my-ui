const n=`.classic-loader_23 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  overflow: hidden;
}

.classic-loader_23::before {
  content: "Loading...";
  color: #0000;
  text-shadow: 0 0 0 #000, 10ch 0 0 #fff, 20ch 0 0 #000;
  background: linear-gradient(90deg, #0000 calc(100% / 3), #000 0 calc(2 * 100% / 3), #0000 0) left/300% 100%;
  animation: classic-loader_23 2s infinite;
}

@keyframes classic-loader_23 {
  50% {
    background-position: center;
    text-shadow: -10ch 0 0 #000, 0 0 0 #fff, 10ch 0 0 #000
  }
  100% {
    background-position: right;
    text-shadow: -20ch 0 0 #000, -10ch 0 0 #fff, 0 0 0 #000
  }
}
`;export{n as default};
