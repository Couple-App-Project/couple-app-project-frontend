const getDday = (anniversary?: string, selectDate?: Date) => {
    if (typeof anniversary === undefined) return 0;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();

    const anniversaryDate = new Date(String(anniversary));
    const anniYear = anniversaryDate.getFullYear();
    const anniMonth = anniversaryDate.getMonth();
    const anniDay = anniversaryDate.getDate();

    const anniversaryTime = new Date(anniYear, anniMonth, anniDay).getTime();
    const currentTime = selectDate
        ? selectDate.getTime()
        : new Date(year, month, day).getTime();

    // 처음 만난 날을 1일째로 포함하기 때문에 마지막에 +1 진행
    return (currentTime - anniversaryTime) / (1000 * 60 * 60 * 24) + 1;
};

export default getDday;
