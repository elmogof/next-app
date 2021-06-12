export async function getCommentData(id) {
  const res = await fetch(
    'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/comments/'
  )
  const data = await res.json()
  const item = data.items.filter((comment) => comment.id === parseInt(id))

  return {
    item,
  }
}

export async function getAllCommentIds() {
  const res = await fetch(
    'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/comments/'
  )
  const data = await res.json()

  return data.items.map(({ id }) => {
    return {
      params: {
        id: id.toString(),
      },
    }
  })
}

export async function getAllComments() {
  const res = await fetch(
    'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/maximo/tripntaxi/comments/'
  )
  const data = await res.json()

  return data.items
}
