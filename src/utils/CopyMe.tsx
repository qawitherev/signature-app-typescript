/**
 * 
 * @param data thing to be copied to clipboard
 */
export function CopyMe(data: string) {
  navigator.clipboard
    .writeText(data)
    .then(() => console.info(`copied to clipboard`))
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
}
