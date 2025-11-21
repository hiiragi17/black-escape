// Validation script to check for disconnected story choices
const fs = require('fs');
const path = require('path');

// Read the story.ts file
const storyPath = path.join(__dirname, 'src/data/story.ts');
const storyContent = fs.readFileSync(storyPath, 'utf-8');

// Extract the story data object - find the opening { after storyData
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
console.log('Scene IDs:', Array.from(sceneIds).sort().join(', '));

// Extract all "next" references
const nextRefs = new Map(); // scene -> array of next refs
const choiceMatches = storyDataString.matchAll(/"next":\s*"([^"]+)"/g);
for (const match of choiceMatches) {
  const nextId = match[1];
  if (!nextRefs.has(nextId)) {
    nextRefs.set(nextId, []);
  }
}

console.log(`\nFound ${nextRefs.size} unique "next" references`);

// Find disconnected references
const disconnected = [];
for (const nextId of nextRefs.keys()) {
  if (!sceneIds.has(nextId)) {
    disconnected.push(nextId);
  }
}

if (disconnected.length > 0) {
  console.log('\n❌ FOUND DISCONNECTED CHOICES:');
  disconnected.forEach(id => {
    console.log(`  - "${id}" (referenced but scene does not exist)`);

    // Find where this is referenced
    const regex = new RegExp(`"next":\\s*"${id}"`, 'g');
    let match;
    const lines = storyContent.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes(`"next": "${id}"`)) {
        console.log(`    Referenced at line ${idx + 1}`);
      }
    });
  });
  process.exit(1);
} else {
  console.log('\n✅ All story choices are properly connected!');
  process.exit(0);
}
