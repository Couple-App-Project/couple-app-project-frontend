export const getDday = (anniversary: string) => {
    const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        
        const anniversaryDate = new Date(anniversary);
        const anniYear = anniversaryDate.getFullYear();
        const anniMonth = anniversaryDate.getMonth();
        const anniDay = anniversaryDate.getDate();

        const anniversaryTime = new Date(
            anniYear,
            anniMonth,
            anniDay,
        ).getTime();
        const currentTime = new Date(year, month, day).getTime();

        // 처음 만난 날을 1일째로 포함하기 때문에 마지막에 +1 진행
        return (currentTime - anniversaryTime) / (1000 * 60 * 60 * 24) + 1;
}