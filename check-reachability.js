// Check reachability of all story nodes from start
const fs = require('fs');
const path = require('path');

// Read the story.ts file
const storyPath = path.join(__dirname, 'src/data/story.ts');
const storyContent = fs.readFileSync(storyPath, 'utf-8');

// Extract the story data object
const storyDataStart = storyContent.indexOf('export const storyData');
if (storyDataStart === -1) {
  console.error('Could not find storyData export');
  process.exit(1);
}

const openBraceIndex = storyContent.indexOf('{', storyDataStart);
const storyDataString = storyContent.substring(openBraceIndex);

// Extract all scene IDs
const sceneIds = new Set();
const sceneMatches = storyDataString.matchAll(/"([^"]+)":\s*{/g);
for (const match of sceneMatches) {
  sceneIds.add(match[1]);
}

console.log(`Found ${sceneIds.size} scenes in story data`);

// Build graph of connections
const connections = new Map();
for (const sceneId of sceneIds) {
  connections.set(sceneId, []);
}

// Extract all "next" references for each scene
const lines = storyContent.split('\n');
let currentScene = null;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Check if this line defines a scene
  const sceneMatch = line.match(/^\s*"([^"]+)":\s*{/);
  if (sceneMatch) {
    currentScene = sceneMatch[1];
  }

  // Check if this line has a "next" reference
  const nextMatch = line.match(/"next":\s*"([^"]+)"/);
  if (nextMatch && currentScene) {
    const nextId = nextMatch[1];
    if (connections.has(currentScene)) {
      connections.get(currentScene).push(nextId);
    }
  }
}

// BFS from start to find all reachable nodes
const reachable = new Set();
const queue = ['start'];
reachable.add('start');

while (queue.length > 0) {
  const current = queue.shift();
  const next = connections.get(current) || [];

  for (const nextId of next) {
    if (!reachable.has(nextId) && sceneIds.has(nextId)) {
      reachable.add(nextId);
      queue.push(nextId);
    }
  }
}

console.log(`\nReachable from start: ${reachable.size} scenes`);

// Find unreachable nodes
const unreachable = [];
for (const sceneId of sceneIds) {
  if (!reachable.has(sceneId)) {
    unreachable.push(sceneId);
  }
}

if (unreachable.length > 0) {
  console.log('\n❌ FOUND UNREACHABLE SCENES:');
  unreachable.forEach(id => {
    console.log(`  - "${id}"`);

    // Find where this scene is defined
    const lines = storyContent.split('\n');
    lines.forEach((line, idx) => {
      if (line.match(new RegExp(`^\\s*"${id}":\\s*{`))) {
        console.log(`    Defined at line ${idx + 1}`);
      }
    });
  });
  console.log(`\nTotal unreachable scenes: ${unreachable.length}`);
} else {
  console.log('\n✅ All scenes are reachable from start!');
}
