import { BattleControls } from './components/BattleControls'
import { PhaseBar } from './components/PhaseBar'
import { PlayerPanel } from './components/PlayerPanel'
import { GameProvider, useGame } from './game/GameContext'
import { demoDefinitions, demoSetup, seedDemoBoard } from './game/demoData'
import './styles.css'

function BattleTable() {
  const { state } = useGame()
  return (
    <main className={`app-shell viewport-${state.viewportOwner.toLowerCase()}`}>
      <header className="topbar">
        <div className="brand"><span className="crown">♛</span><div><h1>HOODMON</h1><small>FSM BATTLE ENGINE · BOLT STARTER</small></div></div>
        <div className="match-meta"><span>ROUND <b>{state.round}</b></span><span>TURN <b>{state.turnNumber}</b></span><span>STATUS <b>{state.status}</b></span></div>
      </header>
      <PhaseBar />
      <PlayerPanel playerId="P2" opponent />
      <div className="center-mark"><span>AWAKEN THE BOND</span></div>
      <PlayerPanel playerId="P1" />
      <BattleControls />
      <aside className="event-log">
        <h3>ENGINE LOG</h3>
        {[...state.eventLog].reverse().slice(0, 6).map((line, i) => <div key={`${line}-${i}`}>{line}</div>)}
      </aside>
    </main>
  )
}

export default function App() {
  return (
    <GameProvider definitions={demoDefinitions} setup={demoSetup} seed={seedDemoBoard}>
      <BattleTable />
    </GameProvider>
  )
}
