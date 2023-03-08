const handlerShare = (userCode: string) => {
    if (navigator.share) {
        navigator
            .share({
                title: '꾸욱',
                text: `${userCode}`,
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqeV49q7hC1rOvgQTrws7UNwZKS5Ui52TcQ&usqp=CAU',
            })
            .catch(() => alert('다시 시도해 주세요.'));
    } else {
        alert('공유하기가 지원되지 않는 환경입니다.');
    }
};

export default handlerShare;
