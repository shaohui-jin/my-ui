const n=`.dots-loader_36 {
  height: 15px;
  aspect-ratio: 5;
  display: grid;
  animation: dots-loader_36-0 2s infinite linear;
}

.dots-loader_36:before,
.dots-loader_36:after {
  content: "";
  grid-area: 1/1;
  height: inherit;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) left,
  var(--_g) right;
  background-size: 15px 100%;
  background-repeat: no-repeat;
  animation: dots-loader_36-1 1s infinite linear;
}

.dots-loader_36:after {
  margin-left: auto;
  --s: -1;
}

@keyframes dots-loader_36-0 {
  0%, 49.99% {
    transform: scaleY(1)
  }
  50%, 100% {
    transform: scaleY(-1)
  }
}

@keyframes dots-loader_36-1 {
  0% {
    transform: translate(0, calc(var(--s, 1) * 0px));
    aspect-ratio: 2.3
  }
  33% {
    transform: translate(0, calc(var(--s, 1) * 8px));
    aspect-ratio: 2.3
  }
  66% {
    transform: translate(calc(var(--s, 1) * 19px), calc(var(--s, 1) * 8px));
    aspect-ratio: 3.7
  }
  100% {
    transform: translate(calc(var(--s, 1) * 19px), calc(var(--s, 1) * 0px));
    aspect-ratio: 3.7
  }
}
`;export{n as default};
