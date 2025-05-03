export const API_URL =
  "https://shape-sepolia.g.alchemy.com/v2/pJ46Q0vSNs-l5ncgcSj5-W0wJZh-100k";
export const PRIVATE_KEY =
  "28769a951b287831ca9cb6b3840f7169c36f0fa9b80165c816f1fee7cd1f3faa";
export const contractAddress = "0x377fC5a7B16eb9F101C36C667D5d7C46Ac3D2ecf";
export const contractAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_desc",
        type: "string",
      },
    ],
    name: "addTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "markAsFinished",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getAllTask",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "desc",
            type: "string",
          },
          {
            internalType: "enum TaskToDo.TaskStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct TaskToDo.Task[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getTask",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "enum TaskToDo.TaskStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tasks",
    outputs: [
      {
        internalType: "string",
        name: "desc",
        type: "string",
      },
      {
        internalType: "enum TaskToDo.TaskStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
