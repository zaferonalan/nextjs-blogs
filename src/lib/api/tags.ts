import axios from "axios"
import { Tag } from '@/generated/prisma'

export const fetchTags = async (): Promise<Tag[]> => {
  const res = await axios.get("/api/tags")
  return res.data
}