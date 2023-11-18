export async function focusFirstChild(parentSelector: string) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      const parent = parentSelector.startsWith('#')
        ? document.getElementById(parentSelector.replace('#', ''))
        : document.querySelector(parentSelector);

      const element = parent?.querySelector(
        'a, button, input, textarea, select',
      ) as HTMLElement;

      if (element) {
        element.focus();
      }

      resolve();
    });
  });
}
