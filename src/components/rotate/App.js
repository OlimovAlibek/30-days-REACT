import React from 'react';
import ReactFlow, { Background } from 'reactflow';

import 'reactflow/dist/style.css';

import ResizeRotateNode from './ResizeRotateNode';
import { nodes, edges } from './node-edges';

const nodeTypes = {
  resizeRotate: ResizeRotateNode,
};

function Flow() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
    <ReactFlow
    
      nodeTypes={nodeTypes}
      defaultNodes={nodes}
      defaultEdges={edges}
      fitView
    >
      <Background />
    </ReactFlow>
    </div>
  );
}

export default Flow;
