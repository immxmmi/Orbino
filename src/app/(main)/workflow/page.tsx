"use client";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges
} from '@xyflow/react';
import type { BackgroundVariant } from '@xyflow/react';
import type { Node, NodeChange, Edge, EdgeChange, Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useState } from 'react';

const initialNodes: Node[] = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];
const initialEdges: Edge[] = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

const availableNodes = [
  { title: "Text", icon: "🔤" },
  { title: "Bild", icon: "🖼️" },
  { title: "Logik", icon: "🔗" },
];

export default function App() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  // Dummy handler for new node
  const addNode = (node: { title: string; icon: string }) => {
    setNodes((prev) => [
      ...prev,
      {
        id: `${node.title}-${prev.length + 1}`,
        position: { x: 50 + Math.random() * 200, y: 50 + Math.random() * 200 },
        data: { label: node.title },
      },
    ]);
  };

  return (
    <div className="w-screen h-screen flex bg-[#0f1117] text-[#e6edf3]">
      <aside className="w-72 bg-[#151821] p-4 border-r border-[#2c313c] flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">📚 Bausteine</h2>
          {availableNodes.map((node) => (
            <button
              key={node.title}
              onClick={() => addNode(node)}
              className="flex items-center gap-2 bg-[#202634] hover:bg-[#2b3244] px-4 py-2 rounded-md text-sm text-[#e6edf3] mb-2"
            >
              <span className="text-xl">{node.icon}</span>
              <span>{node.title}</span>
            </button>
          ))}
        </div>
      </aside>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full h-full max-w-[1400px] max-h-[90vh] rounded-lg border border-[#2c313c] overflow-hidden shadow-md bg-[#1a1e29]">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant={"dots" as BackgroundVariant} gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}
