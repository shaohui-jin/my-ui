const n=`.dots-loader_27 {
  height: 15px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) left,
  var(--_g) right;
  background-size: 25% 100%;
  display: grid;
}

.dots-loader_27:before,
.dots-loader_27:after {
  content: "";
  grid-area: 1/1;
  margin: auto;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  clip-path: inset(0 0 49%);
  transform-origin: -100% 50%;
  animation: dots-loader_27 .5s infinite alternate;
}

.dots-loader_27:after {
  --s: -1;
  transform-origin: 200% 50%;
}

@keyframes dots-loader_27 {
  0%, 40% {
    transform: scaleY(var(--s, 1)) rotate(0)
  }
  100% {
    transform: scaleY(var(--s, 1)) rotate(calc(var(--s, 1) * -90deg))
  }
}
`;export{n as default};
