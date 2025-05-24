function convert() {
    const inputText = document.getElementById('input-text').value;
    const results = document.getElementById('results');

    const result = pinyin.pinyin(inputText, {
        segment: true,
    }
    );
    document.getElementById('output').textContent = formatOutput(result);
    results.hidden = false;

}

function formatOutput(pinyinArray) {
    return pinyinArray.map(group => group[0]).join(' ');
}

const PROXY_URL = 'https://your-worker.your-subdomain.workers.dev';

async function generateTTS(text) {
    try {
        const audioPlayer = document.getElementById('audio-player');
        const audioElement = document.getElementById('audio-element');
        const downloadBtn = document.getElementById('download-btn');
        const generateBtn = document.getElementById('generate-btn');

        generateBtn.disabled = true;
        audioPlayer.hidden = true;
        audioElement.pause();
        audioElement.removeAttribute('src');

        const response = await fetch(PROXY_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                msg: text,
                lang: 'Zhiyu',
                source: 'ttsmp3'
            })
        });

        const data = await response.json();
        if (data.Error !== 0) throw new Error('API Error');

        const audioUrl = data.URL.replace(/\\\//g, '/');
        audioElement.src = audioUrl;
        audioPlayer.hidden = false;

        downloadBtn.href = `${PROXY_URL}/download?url=${encodeURIComponent(audioUrl)}`;
        downloadBtn.download = `tts-${Date.now()}.mp3`;
        generateBtn.disabled = false;

        audioElement.play().catch(() => {
            console.log('Autoplay is locked');
        });

    } catch (error) {
        console.error('Error:', error);
        alert('Error generating audio');
    }
}

function copyResult() {
    const output = document.getElementById('output');
    output.select();
    navigator.clipboard.writeText(output.value);
}
