/**
 * 사용자 모바일 환경 판별 Fn (모바일 폰)
 * @param agent 사용자 기기 환경
 * @returns mobile boolen
 */
const detectMobileDevice = (agent: string) => {
    const mobileRegex = [
        /Android/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
    ];
    return mobileRegex.some((mobile) => agent.match(mobile));
};

/**
 * 사용자 모바일 환경 판별 Fn (모바일 브라우저)
 * @param agent 사용자 기기 환경
 * @returns mobile boolen
 */
const detectInAppBrowser = (agent: string) => {
    const inappRegex = [
        /KAKAOTALK/i,
        /Instagram/i,
        /NAVER/i,
        /zumapp/i,
        /Whale/i,
        /Snapchat/i,
        /Line/i,
        /everytimeApp/i,
        /WhatsApp/i,
        /Electron/i,
        /wadiz/i,
        /AliApp/i,
        /FB_IAB/i,
        /FB4A/i,
        /FBAN/i,
        /FBIOS/i,
        /FBSS/i,
        /SamsungBrowser/i,
    ];
    return inappRegex.some((mobile) => agent.match(mobile));
};

export { detectInAppBrowser, detectMobileDevice };
