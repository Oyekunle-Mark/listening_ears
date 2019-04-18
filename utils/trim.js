const trim = (str) => {
  const newStr = str.trim();
  return newStr.replace(/\s+/g, ' ');
};

export default trim;
