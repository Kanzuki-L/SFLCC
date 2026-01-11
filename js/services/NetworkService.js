export class NetworkService {
    constructor() {
        this.proxies = [
            'https://sflcc-proxy.kennylim8979.workers.dev/?', 
            'https://corsproxy.io/?',
            'https://api.allorigins.win/raw?url=',
            'https://thingproxy.freeboard.io/fetch/'
        ];
    }

    async fetchData(targetUrl) {
        if (!targetUrl.includes('sfl.world')) {
            return this._directFetch(targetUrl);
        }

        let lastError = null;

        for (const proxyBase of this.proxies) {
            if (proxyBase.includes('您的名字')) {
                console.warn('[Network] 警告：您似乎忘记修改 NetworkService.js 里的 Worker 地址了');
            }

            const fetchUrl = proxyBase + encodeURIComponent(targetUrl);
            
            try {
                console.log(`[Network] Trying proxy: ${proxyBase}`); 
                
                const res = await fetch(fetchUrl);
                
                if (res.ok) {
                    console.log(`[Network] Success with: ${proxyBase}`);
                    return await res.json();
                } else {
                    throw new Error(`HTTP ${res.status}`);
                }
            } catch (e) {
                console.warn(`[Network] Proxy failed (${proxyBase}):`, e);
                lastError = e;
            }
        }

        console.error("All proxies failed. Please check your internet or VPN.");
        throw lastError;
    }

    async _directFetch(url) {
        const fetchUrl = url + '?t=' + Date.now();
        
        try {
            const res = await fetch(fetchUrl);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            if (url.includes('.ts')) {
                const text = await res.text();
                return { content: text };
            } else {
                return await res.json();
            }
        } catch (e) {
            console.error(`Direct Fetch Error (${url}):`, e);
            throw e;
        }
    }
}