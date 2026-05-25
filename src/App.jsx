import React, { useState, useMemo, Suspense } from 'react';
import { MemoItem } from './components/MemoItem';
import { PureItem } from './components/PureItem';
import WindowList from './components/WindowList';
import VirtualizedGrid from './components/VirtualizedGrid';
import './App.css';
// 1. Configurando o Lazy Loading para o componente pesado
const HeavyChartLazy = React.lazy(() =>
import('./components/HeavyChart'));
function App() {
const [count, setCount] = useState(0);
const [showChart, setShowChart] = useState(false);

// 2. Gerando uma massa de dados massiva (10.000 itens)
// O useMemo impede que o array seja recriado a cada renderização
const massiveData = useMemo(() => {
return Array.from({ length: 10000 }).map((_, i) => ({
id: i,
name: `Usuário ${i + 1}`
}));
}, []);
return (
<div style={{ padding: '20px', fontFamily: 'Arial' }}>
<h1>Dashboard de Alta Performance</h1>
{/* 3. Testando o Re-render */}
<div style={{ marginBottom: '20px' }}>
<button onClick={() => setCount(c => c + 1)}>
Forçar Re-render (Contador: {count})
</button>
<p style={{ fontSize: '12px' }}>
<em>Abra o console. Note que ao clicar, os componentes
abaixo NÃO imprimem log novamente.</em>
</p>
<MemoItem id={1} text="Eu sou um React.memo" />
<PureItem id={2} text="Eu sou um PureComponent" />
</div>
<hr />
{/* 4. Testando Virtualização */}
<div style={{ display: 'flex', gap: '20px' }}>
<div style={{ flex: 1 }}>
<h3>Lista (React Window) - 10k itens</h3>
<WindowList data={massiveData} />
</div>
<div style={{ flex: 1 }}>
<h3>Grade (React Virtualized)</h3>
<VirtualizedGrid data={massiveData} />
</div>
</div>
<hr />
{/* 5. Testando Lazy Loading e Suspense */}
<div>
<h3>Carregamento Sob Demanda</h3>
<button onClick={() => setShowChart(true)}>
Carregar Gráfico Pesado
</button>
{showChart && (
// O Suspense exibe um fallback (ex: um loader) enquanto  script do componente é baixado
<Suspense fallback={<p>Carregando módulo pesado pela
rede...</p>}>
<HeavyChartLazy />
</Suspense>
)}
</div>
</div>
);
}

export default App;