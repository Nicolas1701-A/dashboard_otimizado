import React, { PureComponent } from 'react';
export class PureItem extends PureComponent {
render() {
const { id, text } = this.props;
console.log(`Renderizando PureItem: ${id}`);
return (
<div style={{ padding: '10px', borderBottom: '1px solid #eee',
color: 'blue' }}>
<strong>ID: {id}</strong> - {text} (Class)
</div>
);
}
}