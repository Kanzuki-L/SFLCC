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
            const fetchUrl = proxyBase + encodeURIComponent(targetUrl);
            
            try {
                const res = await fetch(fetchUrl);
                
                if (res.ok) {
                    return await res.json();
                } else {
                    throw new Error(`HTTP ${res.status}`);
                }
            } catch (e) {
                lastError = e;
            }
        }

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
            throw e;
        }
    }
}