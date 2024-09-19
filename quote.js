const quotes = [
    {
        quote : '세상이 너무나 어둡고 악의로 가득 차 있다고 생각할 때마다 나는 심해의 바다를 떠올린다. \n사람들이 생각하는 것만큼 심해의 바다는 어둡지 않다. \n거기엔 빛을 품은 생물들이 서로 발광하면서 조화롭게 살아가고 있다.',
        author : '「어두운 바다의 등불이 되어」, 연산호'
    },
    {
        quote : '인간에 의해서 신은 수 없이 죽고 되살아나기를 반복한다. \n또, 신은 인간에게 끝없는 모욕과 수모를 당하기도 하면서 찬양과 감사 인사를 받는다. \n 그 이유는 간단하다. 인간들이 그러기 위해서 신을 만들었기 때문이다.',
        author : '「신의 역할」, 잠실동 물리학자'
    },
    {
        quote : '그곳에 두 세계가 얽혀 있었다. \n 세계의 양쪽 끝에서부터 나온 밤과 낮이.',
        author : '「데미안」, 헤르만 헤세'
    },
    {
        quote : '나는 지난 반년 동안 급격히 자라서 키만 멀쑥해서는, 절반밖에 이해하지 못하는 세상을 어슬렁거렸다. \n소년다운 귀여움은 다 사라져버려서 내 생각에도 이런 모습으로는 남에게 사랑받기 어렵겠다 싶었다. \n더군다나  나조차 나를 전혀 사랑하지 않았다.',
        author : '「데미안」, 헤르만 헤세'
    },
    {
        quote : '달의 하얀 빗물통은 다 퍼내어 비었고, 별 없이 잠을 자기는 너무 힘들다.',
        author : '「비가 전하는 소식」, 귄터 아이히'
    },
    {
        quote : '슬프다 아니아프다. 아프다 외에 슬프다. 슬픔의 결과로 아프거나 아픔의 결과로 슬프거나 슬픔과 아픔 사이에는 인과관계가 있는 경우가 많고 둘 사이에 교집합도 있을 법하니 진여는 굳이 생각을 정정하지 않으며 중요한 것은 아픈지 또는 슬픈지가 아니라 아픈 것 또는 슬픈 것이 자신의 손이라는 데 있다.',
        author : '「상아의 문으로」, 구병모'
    },
    {
        quote : '가슴을 연 채로 살면 상처받을 수도 있다. 하지만 가슴을 닫은 채로 사는 것만큼 많이 상처받지는 않는다.',
        author : '「좋은지 나쁜지 누가 아는가」, 류시화'
    },
    {
        quote : '동의하지 않아도 봄은 온다.',
        author : '「봄」, 최승자'
    },
    {
        quote : '인생은 폭풍우 속에서 어떻게 살아남을 것인가가 아니라 빗속에서 어떻게 춤을 추는가이다.',
        author : '「좋은지 나쁜지 누가 아는가」, 류시화'
    },
    {
        quote : '내 슬픔 하나를 두고 그것에 정신이 팔려 그것으로 모든 것을 정당화시킨 채로 우리는 또 얼마나 남의 상처를 헤집는 것인가.',
        author : '「사랑은 상처를 허락하는 것이다」, 공지영'
    },
    {
        quote : '묻겠다. 당신에게 어느 날 절대로, 절대로 놓치고 싶지 않은 무언가가 생긴다면 당신은 그것을 어떻게 갖겠는가.',
        author : '「실내인간」, 이석원'
    },
    {
        quote : '나로 하여 네가 아름다울 수 있다면 네 몫의 축복 뒤에서 나는 안개처럼 스러지는 다만 너의 배경이어도 좋다.',
        author : '「안개꽃」, 복효근'
    },
    {
        quote : '네게 비 내리는 소리를 들려주고 싶었어 왜냐면 그건 그리움의 소리니까.',
        author : '「청설」, 청펀펀'
    },
    {
        quote : '사는 게 염증날 때 당신이 울지 않았으면 참 좋겠다.',
        author : '「풀잎」, 원구식'
    },
    {
        quote : '나 차라리 그대를 달게 삼켰으면 삼켜졌으면.',
        author : '「출사탕기」, 김박은경'
    },
    {
        quote : '알아? 네가 있어서 세상에 태어난 게 덜 외롭다.',
        author : '「일요일의 노래」, 황인숙'
    },
    {
        quote : '진흙반죽처럼 부드러워지고 싶다 \n 무엇이든 되고 싶다 \n 작은 항아리가 되어 벤자민 화분과 함께 네 책상 위에 놓이고 싶다 \n 네 어린 시절의 큰 글씨를 영원히 기억하고 싶다 \n 학년이 올라갈 때마다 알맞게 줄어드는 글씨를 보고 싶다 \n 토끼의 두 귀처럼 때때로 부드럽게 접힐 줄 아는 네 마음을 보고 싶다 \n 베여나간 오리나무 밑둥 향기에 공손히 인사하듯 길게 구부러지는 너의 훌쩍 자란 등뼈를 만져보고 싶다',
        author : '「죽은 엄마가 아이에게」'
    },
    {
        quote : '세상의 모든 비밀을 전해 듣고 \n 분노 속에서 네가 어떤 것도 다시 건드릴 수 없을 것 같은 고통을 느낄 때 \n 단 하나의 사물이 되고 싶다 \n 네 커다란 손에 잡혀 검은 벽을 향해 던져지며 부서지는 항아리가 \n 단단하게 굳어 제대로 모양 잡힌 유일한 기억이',
        author : '「죽은 엄마가 아이에게」'
    },
    {
        quote : '한밤중에 일어나 연인의 잠든 얼굴을 한번 만지고 \n 나쁜 꿈의 물풀들을 네 손으로 천천히 쓰다듬는 날이 지나가고 \n 너의 늙어가는 얼굴 가득 물결처럼 번져가는 흰 주름을 보고 싶다 \n 공원 벤치에 잠시 지팡이를 세워두고 \n 새벽의 별들처럼 아침이 고요하게 거둬들이는 \n 네 마지막 숨결을 느끼고 싶다 \n ',
        author : '「죽은 엄마가 아이에게」'
    },
    {
        quote : '진흙 반죽처럼 부드러워지고 싶다 \n 무엇이든 되고 싶다 \n 지금 내 곁의 빈 나무관 속을 떠돌며 \n 반쯤 부패해가는 네 얼굴 위로 내려앉기를 기다리는 톱밥먼지만 아니라면',
        author : '「죽은 엄마가 아이에게」'
    }
];
    

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;