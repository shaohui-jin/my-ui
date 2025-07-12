const n=`.dots-loader_42 {
  height: 15px;
  aspect-ratio: 5;
  display: flex;
  justify-content: space-between;
  --_g: no-repeat radial-gradient(farthest-side, #000 95%, #0000);
  background: var(--_g), var(--_g);
  background-size: 20% 100%;
  animation: dots-loader_42-0 1s infinite;
}

.dots-loader_42:before,
.dots-loader_42:after {
  content: "";
  height: inherit;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  animation: dots-loader_42-1 1s infinite;
}

.dots-loader_42:after {
  --s: -1, -1;
}

@keyframes dots-loader_42-0 {
  0%,
  60% {
    background-position: calc(1 * 100% / 3) 0, calc(2 * 100% / 3) 0
  }
  100% {
    background-position: calc(0 * 100% / 3) 0, calc(3 * 100% / 3) 0
  }
}

@keyframes dots-loader_42-1 {
  0% {
    transform: scale(var(--s, 1)) translate(0, 0)
  }
  33% {
    transform: scale(var(--s, 1)) translate(0, 130%)
  }
  66% {
    transform: scale(var(--s, 1)) translate(calc(400% / 3), 130%)
  }
  100% {
    transform: scale(var(--s, 1)) translate(calc(400% / 3), 0)
  }
}
`;export{n as default};
