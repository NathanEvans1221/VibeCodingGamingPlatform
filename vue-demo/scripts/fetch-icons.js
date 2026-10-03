// scripts/fetch-icons.js
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const dataPath = path.resolve('src/data/games.json');
const games = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const LIST_URL = 'https://www.xin-stars.com/GameIntro/GAME_List/';

async function fetchIconsFromList() {
    const res = await fetch(LIST_URL, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
        },
        signal: AbortSignal.timeout(15000)
    });

    if (!res.ok) {
        throw new Error(`List page returned HTTP ${res.status}`);
    }

    const html = await res.text();
    const dom = new JSDOM(html, { url: LIST_URL });
    const cards = dom.window.document.querySelectorAll('a.js-item.game-card');
    const map = new Map();
    cards.forEach(card => {
        const img = card.querySelector('img');
        const nameSpan = card.querySelector('span');
        if (img && nameSpan) {
            const name = nameSpan.textContent.trim();
            const iconUrl = img.getAttribute('src');
            if (name && iconUrl) map.set(name, new URL(iconUrl, LIST_URL).href);
        }
    });
    dom.window.close();

    if (map.size === 0) {
        throw new Error('No game icons found on the list page');
    }

    return map;
}

async function main() {
    console.log('🔎 Fetching icons from list page for', games.length, 'games...');
    const iconsMap = await fetchIconsFromList();
    let matched = 0;
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        const newIcon = iconsMap.get(game.name);
        if (newIcon) {
            game.icon = newIcon;
            matched++;
            console.log(`✅ ${game.name} -> ${newIcon}`);
        } else {
            console.log(`⚠️ ${game.name} -> keep existing (${game.icon})`);
        }
    }

    if (matched === 0) {
        throw new Error('No local games matched the fetched icons; data file was not changed');
    }

    fs.writeFileSync(dataPath, JSON.stringify(games, null, 2), 'utf-8');
    console.log(`🎉 Updated ${matched} of ${games.length} game icons in src/data/games.json`);
}

main().catch(error => {
    console.error('❌ Failed to update game icons:', error.message);
    process.exitCode = 1;
});
