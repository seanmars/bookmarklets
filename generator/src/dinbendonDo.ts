(async (doc: Document) => {
  try {
    const getTitle = (e: Element) => {
      const title = e.querySelector('div > div.order-title > a');
      return title!.innerHTML.split('發起的')[1].trim();
    };

    const firstTwo = doc.querySelectorAll('div > div.main-progress > div > div.mt-2 > div.progress-order');
    const [first, second] = firstTwo;
    const firstTitle = getTitle(first);
    const secondTitle = getTitle(second);

    // alert(`${firstTitle}\n${secondTitle}`);
    // copy to clipboard
    const text = `${firstTitle}\n${secondTitle}`;
    await navigator.clipboard.writeText(text);
    alert(`已複製到剪貼簿\n${text}`);
  } catch (error) {
    alert(error);
  }
})(document);