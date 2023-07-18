fetch('https://weibo-9qsvnblo6-pc-study.vercel.app/api').then(data=>data.json()).then(data=>{
    let html = '<style>.weibo-new{background:#ff3852}.weibo-hot{background:#ff9406}.weibo-jyzy{background:#ffc000}.weibo-recommend{background:#00b7ee}.weibo-adrecommend{background:#febd22}.weibo-friend{background:#8fc21e}.weibo-boom{background:#bd0000}.weibo-topic{background:#ff6f49}.weibo-topic-ad{background:#4dadff}.weibo-boil{background:#f86400}#weibo-container{overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}#weibo-container::-webkit-scrollbar{display:none}.weibo-list-item{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:nowrap}.weibo-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:auto}.weibo-num{float:right}.weibo-hotness{display:inline-block;padding:0 6px;transform:scale(.8) translateX(-3px);color:#fff;border-radius:8px}</style>'
    html += '<div class="weibo-list">'
    let hotness = {
        '��': 'weibo-boom',
        '��': 'weibo-hot',
        '��': 'weibo-boil',
        '��': 'weibo-new',
        '��': 'weibo-recommend',
        '��': 'weibo-jyzy',
        'Ӱ': 'weibo-jyzy',
        '��': 'weibo-jyzy',
        '��': 'weibo-jyzy'
    }
    for (let item of data) {
        html += '<div class="weibo-list-item"><div class="weibo-hotness ' + hotness[(item.hot || '��')] + '">' + (item.hot || '��') + '</div>' + '<span class="weibo-title"><a title="' + item.title + '"href="' + item.url + '" target="_blank" rel="external nofollow noreferrer">' + item.title + '</a></span>' + '<div class="weibo-num"><span>' + item.num + '</span></div></div>'
    }
    html += '</div>'
    document.getElementById('weibo-container').innerHTML = html
}
).catch(function(error) {
    console.log(error);
});