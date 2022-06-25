/** scroll the element to the viewable area */
export default function showIntoView(target: HTMLElement | null, list?: HTMLElement | null) {
  if (!list) list = target?.parentElement;

  const top = target?.offsetTop ?? 0;
  const listTop = list?.scrollTop ?? 0;
  const listHeight = list?.offsetHeight ?? 0;

  if (top - listTop > listHeight || top < listTop) {
    list?.scrollTo({ top });
  }
}
