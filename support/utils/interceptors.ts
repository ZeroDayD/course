import {Page} from '@playwright/test';

export async function setupInterceptors(page: Page): Promise<void> {
    const blockedPatterns = [
        // '**/popup.js',
        '**/promo/**',
        '**/consent.js',
        // '**/interstitial*',
        '**/gtm.js',
        // '**/homepage/nsp/**',
        // '**/nsp-widget-*',
        '**/*smartlook.com/**',
        '**/trafficguard.ai/**',
        // '**/trustpilot.com/**',
    ];

    for (const pattern of blockedPatterns) {
        await page.route(pattern, route => route.abort());
    }
}
