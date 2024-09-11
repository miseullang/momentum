const quotes = [
    {
        quote : '세상이 너무나 어둡고 악의로 가득 차 있다고 생각할 때마다 나는 심해의 바다를 떠올린다. \n사람들이 생각하는 것만큼 심해의 바다는 어둡지 않다. \n거기엔 빛을 품은 생물들이 서로 발광하면서 조화롭게 살아가고 있다. \n\n 나는 이제 심해를 안다.',
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
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;