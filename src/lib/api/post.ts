import { Post } from "@/generated/prisma";
import axios from "axios";

export const fetchPost = async(): Promise<Post[]> => {
    const res = await axios.get("/api/post")
    return res.data
}