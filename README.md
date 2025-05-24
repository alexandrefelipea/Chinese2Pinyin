## Chinese to Pinyin & TTS Converter 🌐🔊

A web-based tool to convert Chinese characters to Pinyin and generate Text-to-Speech (TTS) audio. Built with vanilla JavaScript and hosted on GitHub Pages. Uses Cloudflare Workers as a CORS proxy.

### Features
- Convert Chinese text to Pinyin with tone marks
- Generate audio pronunciation using TTSMP3 API
- Download generated audio as MP3
- Secure CORS handling via Cloudflare Workers
  
### Live Demo 🚀  
[Try it on GitHub Pages](https://yourusername.github.io/repo-name/)

### Installation 💻
```bash
git clone https://github.com/alexandrefelipea/Chinese2Pinyin.git
```

###  Configuration ⚙️
1. Create Cloudflare Worker (Free)
2. Deploy the provided worker script
3. Get your Worker URL: https://your-worker.your-subdomain.workers.dev
4. Update Proxy URL in app.js:
```javascript
const PROXY_URL = 'https://your-worker.your-subdomain.workers.dev';
```
### Usage 🖱️

1. Open index.html in browser
2. Enter Chinese text in the input box
3. Click "Convert" to get Pinyin
4. Click "Generate Audio" for pronunciation
5. Use download button to save MP3


Contributing 🤝
Contributions welcome! Please:

* Fork the repository
* Create your feature branch
* Submit a Pull Request

Acknowledgements 🙏
* Pinyin conversion by [pinyin](https://www.npmjs.com/package/pinyin)
* Audio generation by [ttsmp3.com](ttsmp3.com)
* [Cloudflare](https://www.cloudflare.com/) Workers for CORS handling