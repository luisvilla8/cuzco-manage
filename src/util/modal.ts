export const handleBlurModalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const target = e.target as HTMLInputElement;
  const childElementLength = target.childNodes.length;
  if (childElementLength === 1) handleClose();
}