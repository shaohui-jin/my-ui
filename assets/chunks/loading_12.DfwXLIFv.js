const n=`.dots-loader_12 {
  width: 60px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--_g) 0 50%,
  var(--_g) 50% 50%,
  var(--_g) 50% 50%,
  var(--_g) 100% 50%;
  background-size: 25% 50%;
  animation: dots-loader_12 1s infinite linear;
}

@keyframes dots-loader_12 {
  33% {
    background-position: 0 0, 50% 100%, 50% 100%, 100% 0
  }
  66% {
    background-position: 50% 0, 0 100%, 100% 100%, 50% 0
  }
  100% {
    background-position: 50% 50%, 0 50%, 100% 50%, 50% 50%
  }
}
`;export{n as default};
