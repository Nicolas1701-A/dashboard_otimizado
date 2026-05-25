import { FixedSizeList as List } from 'react-window';

const WindowList = ({ data }) => {

  const Row = ({ index, style }) => (
    <div style={style}>
      <div style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
        Item da Lista: {data[index].name}
      </div>
    </div>
  );

  return (
    <List
      height={400}
      itemCount={data.length}
      itemSize={35}
      width={'100%'}
    >
      {Row}
    </List>
  );
};

export default WindowList;