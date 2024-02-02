import type { NextApiRequest, NextApiResponse } from "next";
import { type IMovie } from "~/entities/movie/model/types";

type ResponseData = IMovie[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const data = [
    {
      Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      Year: "2003",
      imdbID: "tt0325980",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: Dead Man's Chest",
      Year: "2006",
      imdbID: "tt0383574",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: At World's End",
      Year: "2007",
      imdbID: "tt0449088",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: On Stranger Tides",
      Year: "2011",
      imdbID: "tt1298650",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: Dead Men Tell No Tales",
      Year: "2017",
      imdbID: "tt1790809",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_SX300.jpg",
    },
    {
      Title: "The Pirates! Band of Misfits",
      Year: "2012",
      imdbID: "tt1430626",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDhkOGZkZWMtNGI4Mi00ZWI3LTgyYTgtMDU4ZDI3NTNjMWFiXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    },
    {
      Title: "Pirates of Silicon Valley",
      Year: "1999",
      imdbID: "tt0168122",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDc2NTE0NzE4N15BMl5BanBnXkFtZTgwMDQ5MzgwMzE@._V1_SX300.jpg",
    },
    {
      Title: "The Ice Pirates",
      Year: "1984",
      imdbID: "tt0087451",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA1YWRlY2EtZGQ5ZS00Yzg3LTk0ZDYtZDMzNTEyYzczZjA3XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: The Legend of Jack Sparrow",
      Year: "2006",
      imdbID: "tt0815220",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTIzMDUwMjc3NV5BMl5BanBnXkFtZTcwNzMzNTQzMQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Pirates of Somalia",
      Year: "2017",
      imdbID: "tt5126922",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2OTIwNjA0NV5BMl5BanBnXkFtZTgwMDYxNTYxNDM@._V1_SX300.jpg",
    },
  ];
  res.status(200).json(data);
}
