# HOODMON — Bolt-Compatible Battle Engine Starter

A Bolt-friendly Vite + React + TypeScript starter that wraps the HOODMON finite-state battle engine in a React context/store and includes a working battle-state UI.

## Locked rules represented in this starter

- Standard LP: 2,500
- Starting Bond: 5, max 10, +1 during Bond Phase
- Objective victory: 3 Stars
- Turn FSM: Refresh -> Draw -> Bond -> Main -> Command -> End
- 40-card Hoodmon Deck
- Separate 6-card Task Deck per player, 3 visible Task slots
- 1 Active Hoodmon, 3 Reserves, 3 Magic, 2 Traps, 1 Field per player
- Stage 1 Basic -> Stage 2 Evolved -> Stage 3 Ascended -> Stage 4 Transcended
- No evolution during Round 1
- Printed attack damage is used by default; ATK is a reference stat unless a card explicitly uses it
- Marked and Leashed are binary runtime conditions
- 2-response Reaction Window architecture
- Local face-to-face handoff state (`viewportOwner`, `needsPassInterstitial`)

## Open in Bolt

This is a normal Vite/React project, so Bolt can work with it without a custom backend runtime.

1. Put these project files into a new Bolt project (or import the project from a Git repository).
2. Run `npm install` if Bolt has not already installed dependencies.
3. Run `npm run dev`.
4. Ask Bolt to build UI on top of `src/game/GameContext.tsx` rather than reimplementing game rules inside components.

## Important integration rule

Keep `src/game/engine/` framework-neutral. UI components should call the actions exposed by `GameContext` and render the resulting `GameState`. Do not duplicate rules such as Bond gain, phase transitions, Reaction Windows, Marked/Leashed, or win checks in React components.

## Where to replace demo data

`src/game/demoData.ts` is intentionally disposable. Replace:

- `demoDefinitions` with `cmsCardsToDefinitionMap(yourCards)` from the real card JSON.
- `demoSetup` with decks selected in the lobby/deck builder.
- `seedDemoBoard` with your actual match setup/deployment flow.

The engine's CMS adapter is in `src/game/engine/cardDataAdapter.ts`.

## Build verification

```bash
npm install
npm run build
```
