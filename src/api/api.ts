const apiKey = '6614556608606697';
export const fetchAllSuperheroes = async (): Promise<any[]> => {
  try {
    const response = await fetch(`https://superheroapi.com/api/${apiKey}/all`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching superheroes:', error);
    return [];
  }
};
