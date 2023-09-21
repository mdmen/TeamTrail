type PageScale = 'small' | 'regular' | 'large';

export function setPageScale(scale: PageScale): void {
  const classes: Record<PageScale, string> = {
    small: 'app-small-scale',
    regular: 'app-regular-scale',
    large: 'app-large-scale',
  };

  const classesString = Object.values(classes).join(' ');
  document.documentElement.classList.remove(classesString);
  document.documentElement.classList.add(classes[scale]);
}
