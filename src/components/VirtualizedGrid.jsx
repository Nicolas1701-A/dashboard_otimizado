import { Grid } from 'react-virtualized';
const VirtualizedGrid = ({ data }) => {
    
// Função que renderiza as células da grade
const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
const itemIndex = rowIndex * 3 + columnIndex; // Matemática para grid de 3 colunas
const item = data[itemIndex];
if (!item) return null;
return (
<div key={key} style={{ ...style, border: '1px solid #aaa',
padding: '10px' }}>
<strong>Grade:</strong> {item.name}
</div>
);
};
return (
<Grid
cellRenderer={cellRenderer}
columnCount={3} // 3 colunas
columnWidth={150} // Largura da coluna
height={300} // Altura visível
rowCount={Math.ceil(data.length / 3)} // Total de linhas
rowHeight={50} // Altura da linha
width={450} // Largura total da grade

/>
);
};
export default VirtualizedGrid;