import { NextResponse } from "next/server";
import users_db from "./users_mock_db.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')
  const password = searchParams.get('password')

  const user = users_db.find(user => user.username === username && user.password === password)

  if(user) {
    console.log('User found: ', user)
    return NextResponse.json(user)
  }
  else {
    console.log('User not found')
    return NextResponse.json({error: 'User not found'})
  }
}
