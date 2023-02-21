export default async function handler(req, res){
  
  const previousPage = req.headers.referer

  // Se estiver ligado o preview: Desliga.
  if(req.preview){
    res.clearPreviewData()
    res.writeHead(307, { Location: previousPage })
    return res.end()
  }

  const password = 'SENHASEGURA'
  if(req.query.password !== password){
   return res.status(401).json({ message: 'Invalid Password'});
  }

  //Se estiver desligado o preview
  res.setPreviewData({});
  res.writeHead(307, { Location: previousPage })
  res.end()
}
