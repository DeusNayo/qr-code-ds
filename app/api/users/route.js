export async function POST(request) {
  console.log(request.query.user)
  console.log(request.query.password)
    return new Response("LLego")
    
  }