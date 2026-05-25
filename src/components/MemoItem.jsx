import React from 'react';
const Item = ({ id, text }) => {

// O console.log ajuda o estudante a ver no painel quando o componente renderiza
console.log(`Renderizando MemoItem: ${id}`);
return (
<div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
<strong>ID: {id}</strong> - {text}
</div>
);
};

// Envolvendo o componente com React.memo
export const MemoItem = React.memo(Item);