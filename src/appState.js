import queryState from 'query-state'

export const qs = queryState({}, { useSearch: true })

const currentStateFromQuery = qs.get()

export const defaults = {
  xFunction: 'cos((cos(y) - x * y))',
  yFunction: 'x',
  dTest: 0.005,
  separationDistance: 0.2,
  simplification: 0.2,
  color: '#000000',
  bg: null,
  timeStep: 0.05,
  strokeWidth: 1
}

export const appState = {
  xFunction: currentStateFromQuery.xf || defaults.xFunction,
  yFunction: currentStateFromQuery.yf || defaults.yFunction,
  seed: currentStateFromQuery.seed || 1,
  color: currentStateFromQuery.color || defaults.color,
  dTest: currentStateFromQuery.dt || defaults.dTest,
  separationDistance: currentStateFromQuery.sd || defaults.separationDistance, // Separation distance between new streamlines.
  simplification: currentStateFromQuery.sm || defaults.simplification, // line simplification amount (0.1-2)
  timeStep: currentStateFromQuery.ts || defaults.timeStep,
  bg: currentStateFromQuery.bg || defaults.bg,
  strokeWidth: currentStateFromQuery.sw || defaults.strokeWidth
}
