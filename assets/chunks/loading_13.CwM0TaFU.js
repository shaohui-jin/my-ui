const a=`.dots-loader_13 {
  --s: 64px;
  width: var(--s);
  aspect-ratio: 2;
  --_g: #000 90%, #0000;
  background: radial-gradient(farthest-side at bottom, var(--_g)) 0 calc(50% - var(--s) / 16),
  radial-gradient(farthest-side at top, var(--_g)) 0 calc(50% + var(--s) / 16),
  radial-gradient(farthest-side at bottom, var(--_g)) 50% calc(50% - var(--s) / 16),
  radial-gradient(farthest-side at top, var(--_g)) 50% calc(50% + var(--s) / 16),
  radial-gradient(farthest-side at bottom, var(--_g)) 100% calc(50% - var(--s) / 16),
  radial-gradient(farthest-side at top, var(--_g)) 100% calc(50% + var(--s) / 16);
  background-size: 25% 25%;
  background-repeat: no-repeat;
  animation: dots-loader_13 1s infinite linear;
}

@keyframes dots-loader_13 {
  16.67% {
    background-position: 0 0, 0 100%, 50% calc(50% - var(--s) / 8), 50% calc(50% + var(--s) / 16), 100% calc(50% - var(--s) / 16), 100% calc(50% + var(--s) / 16)
  }
  33.33% {
    background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% calc(50% - var(--s) / 16), 100% calc(50% + var(--s) / 16)
  }
  50% {
    background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% 0, 100% 100%
  }
  66.67% {
    background-position: 0 calc(50% - var(--s) / 16), 0 calc(50% + var(--s) / 16), 50% 0, 50% 100%, 100% 0, 100% 100%
  }
  83.33% {
    background-position: 0 calc(50% - var(--s) / 16), 0 calc(50% + var(--s) / 16), 50% calc(50% - var(--s) / 16), 50% calc(50% + var(--s) / 16), 100% 0, 100% 100%
  }
}
`;export{a as default};
