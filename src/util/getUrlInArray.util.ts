interface Path {
  id: number;
  pathName: string;
  pathUrl: string;
  isLast: boolean;
}

export const getUrlInArray = (url: string) => {
  const arrayPath = url
    .split("/")
    .slice(1,url.length)
    .map( (ele, index) => {
      let FirstLetter = ele.charAt(0).toUpperCase()
      const pathName = `${FirstLetter}${ele.slice(1, ele.length)}`
      return {
        id: index,
        pathName,
        pathUrl: ele,
      }
    })
    
  const urls = arrayPath.reduce( (prev, path, index) => {
    if(index===0) {
      let newUrl = `/${path.pathUrl}`;
      return [...prev, {
        ...path,
        isLast: arrayPath.length === index + 1,
        pathUrl: newUrl
      }]
    }
    let newUrl = `${prev[index-1].pathUrl}/${path.pathUrl}`;
    return [...prev, {
      ...path,
      isLast: arrayPath.length === index + 1,
      pathUrl: newUrl
    }];
  },<Array<Path>>[])

  return urls
}