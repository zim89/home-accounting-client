export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  };

  return date.toLocaleDateString('us-US', options);
};
