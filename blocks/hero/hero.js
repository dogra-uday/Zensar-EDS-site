export default async function decorate(block) {
  const res = await fetch('/content/zed-site.model.json');
  const data = await res.json();

  const title = data?.title || 'Default Title';
  const desc = data?.description || 'Default Description';

  block.innerHTML = `
    <h1>${title}</h1>
    <p>${desc}</p>
  `;
}
