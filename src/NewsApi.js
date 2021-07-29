/* eslint-disable max-len */
export const fetchArticles = async (query) => {
  if (!query) return [];
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=1f83b46c5c0241c5b95d2c5e0f901789`);
  const json = await res.json();

  return json.articles;
};
