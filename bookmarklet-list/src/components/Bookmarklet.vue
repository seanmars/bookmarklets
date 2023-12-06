<script setup lang="ts">


const dinbendonDoBookmarklet = `"use strict";var __awaiter=function(d,n,e,o){function l(t){return t instanceof e?t:new e(function(r){r(t)})}return new(e||(e=Promise))(function(t,r){function c(i){try{s(o.next(i))}catch(f){r(f)}}function a(i){try{s(o.throw(i))}catch(f){r(f)}}function s(i){i.done?t(i.value):l(i.value).then(c,a)}s((o=o.apply(d,n||[])).next())})};(d=>__awaiter(void 0,void 0,void 0,function*(){try{const n=a=>a.querySelector("div > div.order-title > a").innerHTML.split("\u767C\u8D77\u7684")[1].trim(),e=d.querySelectorAll("div > div.main-progress > div > div.mt-2 > div.progress-order"),[o,l]=e,t=n(o),r=n(l),c=\`\${t}
\${r}\`;yield navigator.clipboard.writeText(c),alert(\`\u5DF2\u8907\u88FD\u5230\u526A\u8CBC\u7C3F
\${c}\`)}catch(n){alert(n)}}))(document);`;

const getBookmarklet = (content: string) => {
  return `javascript:(function(){${encodeURI(content)}})()`;
}
</script>

<template>
  <div>
    將以下連結拖曳至書籤列即可，使用時點擊書籤即可執行。
  </div>
  <div class="list">
    <ul>
      <li>
        <a :href="getBookmarklet(dinbendonDoBookmarklet)">訂便當</a>
        > 取得前兩個進行中的訂單名稱，並複製到剪貼簿。
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list {
  width: auto;
}

ul {
  list-style-type: square;
}

li {
  text-align: left;
}
</style>
