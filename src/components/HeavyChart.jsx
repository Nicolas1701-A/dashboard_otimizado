// Imagine que este componente importe bibliotecas pesadas como Chart.js ou Three.js
const HeavyChart = () => {
return (
<div style={{ padding: '20px', backgroundColor: '#ffe4e1',
marginTop: '20px' }}>
<h2>📊 Gráfico Pesado</h2>
<p>Este componente só foi baixado pela rede quando você clicou
no botão!</p>
</div>
);
};
export default HeavyChart;